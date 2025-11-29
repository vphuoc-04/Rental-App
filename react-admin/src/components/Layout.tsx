import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import Aside from "./Aside"
import Header from "./Header"
import Footer from "./Footer"
import CustomSheet from "@/components/CustomSheet"
import { FaRedoAlt } from "react-icons/fa"
import { useTheme } from "@/contexts/ThemeContext"
import { colorThemes } from "@/constants/colors"

type Crumb = { title: string; route: string }

type ContextType = {
    setBreadcrumb: (breadcrumb: Crumb | Crumb[]) => void
}

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [isAsideSheetOpen, setIsAsideSheetOpen] = useState(false)
    const [breadcrumb, setBreadcrumb] = useState<Crumb | Crumb[] | undefined>()
    const { colorTheme, setColorTheme } = useTheme()

    const toggleAside = () => {
        if (isMobile) {
            setIsAsideSheetOpen(prev => !prev)
        } else {
            setIsCollapsed(prev => !prev)
        }
    }

    const closeAside = () => {
        if (isMobile) {
            setIsAsideSheetOpen(false)
        } else {
            setIsCollapsed(true)
        }
    }

    const expandAside = () => {
        setIsCollapsed(false)
    }

    const openSheet = () => {
        setIsSheetOpen(true)
    }

    const closeSheet = () => {
        setIsSheetOpen(false)
    }

    const handleResetToDefault = () => {
        setColorTheme('default')
    }

    useEffect(() => {
        const check = () => {
            const mobile = window.innerWidth < 1024
            setIsMobile(mobile)
            setIsCollapsed(mobile ? true : false)
        }

        check()
        window.addEventListener("resize", check)

        return () => window.removeEventListener("resize", check)
    }, [])

    const colorThemeContent = (
        <div className="space-y-4 px-4 pb-5">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Màu chủ đạo
                </span>
                <button
                    onClick={handleResetToDefault}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] cursor-pointer transition-colors"
                    aria-label="Reset về mặc định"
                    title="Reset về mặc định"
                >
                    <FaRedoAlt className="text-gray-600 dark:text-gray-300 text-sm" />
                </button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center pb-4">
                {colorThemes.map((themeItem) => (
                    <button
                        key={themeItem.id}
                        onClick={() => {
                            setColorTheme(themeItem.id)
                            setTimeout(() => closeSheet(), 300)
                        }}
                        className={`w-12 h-12 rounded-full border-2 transition-all hover:scale-110 cursor-pointer ${
                            colorTheme.id === themeItem.id 
                                ? 'border-gray-900 dark:border-white ring-2 ring-offset-2 ring-gray-400' 
                                : 'border-gray-300 dark:border-gray-600'
                        }`}
                        style={{ 
                            backgroundColor: themeItem.light.primary 
                        }}
                        title={themeItem.name}
                        aria-label={`Chọn màu ${themeItem.name}`}
                    />
                ))}
            </div>
        </div>
    )

    return (
        <div className="flex h-screen overflow-hidden">
            {!isMobile && (
                <div className={`
                    transition-[width] duration-500 ease-in-out
                    ${isCollapsed ? "w-20" : "w-65"}
                `}>
                    <Aside
                        isCollapsed={isCollapsed}
                        isMobile={false}
                        onClose={closeAside}
                        onExpand={expandAside}
                    />
                </div>
            )}

            <div className="flex-1 bg-gray-100 dark:bg-[#000000] flex flex-col lg:min-w-0 transition-[margin] duration-500 ease-in-out">
                <Header 
                    isMobile={isMobile} 
                    onToggleAside={toggleAside}
                    onOpenSheet={openSheet}
                    breadcrumb={breadcrumb}
                />

                <div className="flex-1 overflow-y-auto">
                    <Outlet context={{ setBreadcrumb } satisfies ContextType} />
                </div>

                <Footer />
            </div>

            {isMobile && (
                <CustomSheet
                    isSheetOpen={isAsideSheetOpen}
                    closeSheet={closeAside}
                    side="left"
                    showHeader={false}
                    className="w-[280px] p-0"
                >
                    <Aside
                        isCollapsed={false}
                        isMobile={true}
                        onClose={closeAside}
                        onExpand={expandAside}
                    />
                </CustomSheet>
            )}

            {isMobile && (
                <CustomSheet
                    title="Tùy chỉnh giao diện"
                    description="Chọn các màu có sẵn mà bạn thích"
                    isSheetOpen={isSheetOpen}
                    closeSheet={closeSheet}
                    side="bottom"
                    className=""
                >
                    {colorThemeContent}
                </CustomSheet>
            )}
        </div>
    )
}

export function useLayoutContext() {
    return useOutletContext<ContextType>()
}

export default Layout