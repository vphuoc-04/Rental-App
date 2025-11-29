import React, { createContext, useContext, useEffect, useState } from 'react';
import { colorThemes, defaultTheme } from '@/constants/colors';
import type { ColorTheme } from '@/constants/colors';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    colorTheme: ColorTheme;
    toggleTheme: () => void;
    setColorTheme: (themeId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme as Theme) || 'light';
    });

    const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
        const savedColorTheme = localStorage.getItem('colorTheme');
        return colorThemes.find(t => t.id === savedColorTheme) || defaultTheme;
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('colorTheme', colorTheme.id);
        
        const root = document.documentElement;
        const currentColors = colorTheme[theme];
        
        root.style.setProperty('--color-primary', currentColors.primary);
        
        root.style.setProperty('--color-background', currentColors.background);
        root.style.setProperty('--color-surface', currentColors.surface);
        
        root.style.setProperty('--color-text-primary', currentColors.textPrimary);
        root.style.setProperty('--color-text-secondary', currentColors.textSecondary);
        root.style.setProperty('--color-text-tertiary', currentColors.textTertiary);
        
        root.style.setProperty('--color-border', currentColors.border);
        root.style.setProperty('--color-hover', currentColors.hover);
        root.style.setProperty('--color-active', currentColors.active);
        
        root.style.setProperty('--color-scrollbar', currentColors.scrollbar);
        root.style.setProperty('--color-scrollbar-hover', currentColors.scrollbarHover);
        
        root.style.setProperty('--color-icon', currentColors.icon);
        
        root.style.setProperty('--color-aside-background', currentColors.surface);
        root.style.setProperty('--color-aside-text', currentColors.textPrimary);
        root.style.setProperty('--color-aside-active-text', currentColors.textPrimary);
        root.style.setProperty('--color-aside-active-background', currentColors.active);
        root.style.setProperty('--color-aside-scrollbar-thumb', currentColors.scrollbar);
        root.style.setProperty('--color-aside-scrollbar-thumb-hover', currentColors.scrollbarHover);
        root.style.setProperty('--sheet-close-icon-color', currentColors.icon);

        root.style.setProperty('--color-card-background', currentColors.surface);

        root.style.setProperty('--color-button-primary', currentColors.buttonPrimary);
        root.style.setProperty('--color-button-primary-hover', currentColors.buttonPrimaryHover);
        root.style.setProperty('--color-button-disabled', currentColors.buttonDisabled);
    }, [colorTheme, theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setColorTheme = (themeId: string) => {
        const newTheme = colorThemes.find(t => t.id === themeId);
        if (newTheme) {
            setColorThemeState(newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};