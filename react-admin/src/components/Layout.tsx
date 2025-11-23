import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Aside from "./Aside"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const toggleAside = () => {
        if (isMobile) {
            setIsCollapsed(false)
        } else {
            setIsCollapsed(prev => !prev)
        }
    }

    const closeAside = () => {
        setIsCollapsed(true)
    }

    const expandAside = () => {
        setIsCollapsed(false)
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

    return (
        <div className="flex h-screen overflow-hidden">

            {isMobile && !isCollapsed && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
                    onClick={closeAside}
                />
            )}

            <div className={`
                transition-transform duration-300 ease-in-out
                ${isMobile ? "fixed inset-y-0 left-0 z-50 w-70" : ""}
                ${isMobile && isCollapsed ? "-translate-x-full" : ""}
                ${!isMobile ? (isCollapsed ? "w-20" : "w-70") : ""}
            `}>
                <Aside
                    isCollapsed={isCollapsed}
                    isMobile={isMobile}
                    onClose={closeAside}
                    onExpand={expandAside}
                />
            </div>

            <div className="flex-1 bg-gray-100 dark:bg-[#000000] flex flex-col transition-all duration-300 lg:min-w-0">
                <Header isMobile={isMobile} onToggleAside={toggleAside} />

                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Layout
