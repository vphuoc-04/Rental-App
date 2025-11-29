import { 
    FaAlignLeft, 
    FaBars, 
    FaMoon, 
    FaSun, 
    FaPalette,
    FaRedoAlt,
} from "react-icons/fa";

import { useTheme } from "@/contexts/ThemeContext";
import CustomPopover from "@/components/CustomPopover";
import { colorThemes } from "@/constants/colors";

import PageHeading from "@/components/Heading";

type Crumb = { title: string; route: string };

interface HeaderProps {
    onToggleAside: () => void;
    isMobile?: boolean;
    onOpenSheet?: () => void;
    breadcrumb?: Crumb | Crumb[]; 
}

const Header = ({ onToggleAside, isMobile = false, onOpenSheet, breadcrumb }: HeaderProps) => {
    const { theme, toggleTheme, colorTheme, setColorTheme } = useTheme();

    const handleResetToDefault = () => {
        setColorTheme('default');
    };

    const resetAction = (
        <button
            onClick={handleResetToDefault}
            className="p-2 rounded-lg bg-[var(--color-hover)] hover:bg-[var(--color-active)] cursor-pointer transition-colors"
            aria-label="Reset về mặc định"
            title="Reset về mặc định"
        >
            <FaRedoAlt className="text-[var(--color-text-secondary)] text-sm" />
        </button>
    );

    const colorThemeContent = (
        <div className="space-y-4">
            <div>
                <span className="text-sm font-medium text-[var(--color-text-primary)] mb-2 block">
                    Màu chủ đạo
                </span>
                <div className="flex flex-wrap gap-2">
                    {colorThemes.map((themeItem) => (
                        <button
                            key={themeItem.id}
                            onClick={() => setColorTheme(themeItem.id)}
                            className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 cursor-pointer ${
                                colorTheme.id === themeItem.id 
                                    ? 'border-[var(--color-text-primary)] ring-2 ring-offset-2 ring-[var(--color-text-secondary)]' 
                                    : 'border-[var(--color-border)]'
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
        </div>
    );

    return (
        <div className="px-5 py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-sm">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <button
                        onClick={onToggleAside}
                        className="p-2 rounded-lg bg-[var(--color-hover)] hover:bg-[var(--color-active)] cursor-pointer flex-shrink-0"
                        aria-label="Toggle menu"
                    >
                        {isMobile ? (
                            <FaBars className="text-[var(--color-icon)] text-lg" />
                        ) : (
                            <FaAlignLeft className="text-[var(--color-icon)]" />
                        )}
                    </button>

                    {breadcrumb && <PageHeading breadcrumb={breadcrumb} />}
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-[var(--color-hover)] hover:bg-[var(--color-active)] cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <FaMoon className="text-[var(--color-icon)]" />
                        ) : (
                            <FaSun className="text-[var(--color-icon)]" />
                        )}
                    </button>

                    {isMobile ? (
                        <button
                            onClick={onOpenSheet}
                            className="p-2 rounded-lg bg-[var(--color-hover)] hover:bg-[var(--color-active)] cursor-pointer"
                            aria-label="Tùy chỉnh giao diện"
                        >
                            <FaPalette className="text-[var(--color-icon)]" />
                        </button>
                    ) : (
                        <CustomPopover 
                            icons={<FaPalette className="text-[var(--color-icon)]" />}
                            title="Tùy chỉnh giao diện"
                            description="Chọn các màu có sẵn mà bạn thích"
                            className="p-2 rounded-lg bg-[var(--color-hover)] hover:bg-[var(--color-active)] cursor-pointer"
                            actions={resetAction}
                        >
                            {colorThemeContent}
                        </CustomPopover>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;