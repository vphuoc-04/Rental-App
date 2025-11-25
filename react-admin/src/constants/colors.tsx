export interface ColorTheme {
    id: string;
    name: string;
    light: {
        primary: string;
        background: string;
        asideBackground: string;
        asideText: string; 
        asideActiveText: string; 
        asideActiveBackground: string; 
    };
    dark: {
        primary: string;
        background: string;
        asideBackground: string;
        asideText: string;
        asideActiveText: string;
        asideActiveBackground: string;
    };
}

export const colorThemes: ColorTheme[] = [
    {
        id: 'default',
        name: 'Mặc định',
        light: {
            primary: '#ffffff',
            background: '#ffffff',
            asideBackground: '#ffffff',
            asideText: '#374151',
            asideActiveText: '#374151',
            asideActiveBackground: '#F3F4F6'
        },
        dark: {
            primary: '#005fbf',
            background: '#000000',
            asideBackground: '#18181b',
            asideText: '#d1d5db',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#27272A'
        }
    },
    {
        id: 'blue-dark',
        name: 'Xanh dương đậm',
        light: {
            primary: '#0C1B40',
            background: '#ffffff',
            asideBackground: '#0C1B40',
            asideText: '#d1d5db',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#1d315eff',
        },
        dark: {
            primary: '#005fbf',
            background: '#000000',
            asideBackground: '#182440ff',
            asideText: '#d1d5db',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#084078ff'
        }
    },
    {
        id: 'green',
        name: 'Xanh lá',
        light: {
            primary: '#11907dff',
            background: '#ffffff',
            asideBackground: '#11907dff',
            asideText: '#d1d5db',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#00ad94'
        },
        dark: {
            primary: '#10b981',
            background: '#000000',
            asideBackground: '#052e16',
            asideText: '#d1d5db',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#0d8563ff'
        }
    }
];

export const defaultTheme = colorThemes[0];