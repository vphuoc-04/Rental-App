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

interface HeaderProps {
    onToggleAside: () => void;
    isMobile?: boolean;
    onOpenSheet?: () => void; 
}

const Header = ({ onToggleAside, isMobile = false, onOpenSheet }: HeaderProps) => {
    const { theme, toggleTheme, colorTheme, setColorTheme } = useTheme();

    const handleResetToDefault = () => {
        setColorTheme('default');
    };

    const resetAction = (
        <button
            onClick={handleResetToDefault}
            className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] cursor-pointer transition-colors"
            aria-label="Reset về mặc định"
            title="Reset về mặc định"
        >
            <FaRedoAlt className="text-gray-600 dark:text-gray-300 text-sm" />
        </button>
    );

    const colorThemeContent = (
        <div className="space-y-4">
            <div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Màu chủ đạo
                </span>
                <div className="flex flex-wrap gap-2">
                    {colorThemes.map((themeItem) => (
                        <button
                            key={themeItem.id}
                            onClick={() => setColorTheme(themeItem.id)}
                            className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 cursor-pointer ${
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
        </div>
    );

    return (
        <div className="px-5 py-4 bg-white dark:bg-[#18181b] border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <button
                        onClick={onToggleAside}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMobile ? (
                            <FaBars className="text-gray-600 dark:text-white text-lg" />
                        ) : (
                            <FaAlignLeft className="text-gray-600 dark:text-white" />
                        )}
                    </button>
                </div>
              
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] cursor-pointer"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <FaMoon className="text-[#00000]" />
                    ) : (
                        <FaSun className="text-white" />
                    )}
                </button>

                {isMobile ? (
                    <button
                        onClick={onOpenSheet}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] cursor-pointer"
                        aria-label="Tùy chỉnh giao diện"
                    >
                        <FaPalette className="text-gray-600 dark:text-white" />
                    </button>
                ) : (
                    <CustomPopover 
                        icons={<FaPalette />}
                        title="Tùy chỉnh giao diện"
                        description="Chọn các màu có sẵn mà bạn thích"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] cursor-pointer"
                        actions={resetAction}
                    >
                        {colorThemeContent}
                    </CustomPopover>
                )}
            </div>
        </div>
    )
}

export default Header;