import { FaAlignLeft, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

interface HeaderProps {
    onToggleAside: () => void;
    isMobile?: boolean;
}

const Header = ({ onToggleAside, isMobile = false }: HeaderProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="px-5 py-4 bg-white dark:bg-[#18181b] border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center  gap-4">
                <div className="flex items-center">
                    <button
                        onClick={onToggleAside}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] transition-colors duration-200 cursor-pointer"
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
                    className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A] hover:bg-gray-200 dark:hover:bg-[#424247] transition-colors duration-200 cursor-pointer"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <FaMoon className="text-[#00000]" />
                    ) : (
                        <FaSun className="text-white" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default Header