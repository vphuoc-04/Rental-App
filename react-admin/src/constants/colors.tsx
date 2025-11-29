export interface ColorTheme {
    id: string;
    name: string;
    light: {
        primary: string;
        background: string;
        surface: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        border: string;
        hover: string;
        active: string;
        scrollbar: string;
        scrollbarHover: string;
        icon: string;
        buttonPrimary: string;
        buttonPrimaryHover: string;
        buttonDisabled: string;
    };
    dark: {
        primary: string;
        background: string;
        surface: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        border: string;
        hover: string;
        active: string;
        scrollbar: string;
        scrollbarHover: string;
        icon: string;
        buttonPrimary: string;
        buttonPrimaryHover: string;
        buttonDisabled: string;
    };
}

export const colorThemes: ColorTheme[] = [
    {
        id: 'default',
        name: 'Mặc định',
        light: {
            primary: '#3b82f6',
            background: '#ffffff',
            surface: '#ffffff',
            textPrimary: '#1f2937',
            textSecondary: '#6b7280',
            textTertiary: '#9ca3af',
            border: '#e5e7eb',
            hover: '#f3f4f6',
            active: '#e5e7eb',
            scrollbar: '#d1d5db',
            scrollbarHover: '#9ca3af',
            icon: '#374151',
            buttonPrimary: '#18181b',
            buttonPrimaryHover: '#2a2a2d',
            buttonDisabled: '#9ca3af'
        },
        dark: {
            primary: '#3b82f6',
            background: '#0f0f0f',
            surface: '#18181b',
            textPrimary: '#f8fafc',
            textSecondary: '#d1d5db',
            textTertiary: '#9ca3af',
            border: '#374151',
            hover: '#27272a',
            active: '#3f3f46',
            scrollbar: '#404040',
            scrollbarHover: '#52525b',
            icon: '#f8fafc',
            buttonPrimary: '#3b82f6',
            buttonPrimaryHover: '#2563eb',
            buttonDisabled: '#374151'
        }
    },
    {
        id: 'blue-dark',
        name: 'Xanh dương đậm',
        light: {
            primary: '#1e40af',
            background: '#ffffff',
            surface: '#0C1B40',
            textPrimary: '#ffffff',
            textSecondary: '#dbeafe',
            textTertiary: '#93c5fd',
            border: '#1e40af',
            hover: '#1e3a8a',
            active: '#1d4ed8',
            scrollbar: '#1e40af',
            scrollbarHover: '#1d4ed8',
            icon: '#ffffff',
            buttonPrimary: '#1e40af',
            buttonPrimaryHover: '#1e3a8a',
            buttonDisabled: '#9ca3af'
        },
        dark: {
            primary: '#1e40af',
            background: '#0f172a',
            surface: '#1e293b',
            textPrimary: '#f1f5f9',
            textSecondary: '#cbd5e1',
            textTertiary: '#64748b',
            border: '#334155',
            hover: '#1e293b',
            active: '#334155',
            scrollbar: '#475569',
            scrollbarHover: '#64748b',
            icon: '#f1f5f9',
            buttonPrimary: '#1e40af',
            buttonPrimaryHover: '#1e3a8a',
            buttonDisabled: '#374151'
        }
    },
    {
        id: 'green',
        name: 'Xanh lá',
        light: {
            primary: '#059669',
            background: '#ffffff',
            surface: '#065f46',
            textPrimary: '#ffffff',
            textSecondary: '#d1fae5',
            textTertiary: '#a7f3d0',
            border: '#059669',
            hover: '#047857',
            active: '#10b981',
            scrollbar: '#059669',
            scrollbarHover: '#10b981',
            icon: '#ffffff',
            buttonPrimary: '#059669',
            buttonPrimaryHover: '#047857',
            buttonDisabled: '#9ca3af'
        },
        dark: {
            primary: '#059669',
            background: '#022c22',
            surface: '#064e3b',
            textPrimary: '#f0fdfa',
            textSecondary: '#ccfbf1',
            textTertiary: '#99f6e4',
            border: '#047857',
            hover: '#064e3b',
            active: '#047857',
            scrollbar: '#059669',
            scrollbarHover: '#10b981',
            icon: '#f0fdfa',
            buttonPrimary: '#059669',
            buttonPrimaryHover: '#047857',
            buttonDisabled: '#374151'
        }
    }
];

export const defaultTheme = colorThemes[0];