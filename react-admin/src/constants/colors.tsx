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
        asideScrollbarThumb: string;
        asideScrollbarThumbHover: string;
        closeSheetIcon: string;
    };
    dark: {
        primary: string;
        background: string;
        asideBackground: string;
        asideText: string;
        asideActiveText: string;
        asideActiveBackground: string;
        asideScrollbarThumb: string;
        asideScrollbarThumbHover: string;
        closeSheetIcon: string;
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
            asideActiveBackground: '#F3F4F6',
            asideScrollbarThumb: '#e5e7eb',
            asideScrollbarThumbHover: '#d1d5db',
            closeSheetIcon: '#5f646aff'
        },
        dark: {
            primary: '#005fbf',
            background: '#000000',
            asideBackground: '#18181b',
            asideText: '#ffffffff',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#27272A',
            asideScrollbarThumb: '#27272A',
            asideScrollbarThumbHover: '#3c3c3c',
            closeSheetIcon: '#ffffff'
        }
    },
    {
        id: 'blue-dark',
        name: 'Xanh dương đậm',
        light: {
            primary: '#0C1B40',
            background: '#ffffff',
            asideBackground: '#0C1B40',
            asideText: '#ffffffff',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#1d315eff',
            asideScrollbarThumb: '#1d315eff',
            asideScrollbarThumbHover: '#2a4474ff',
            closeSheetIcon: '#ffffff'
        },
        dark: {
            primary: '#005fbf',
            background: '#000000',
            asideBackground: '#1e2c4aff',
            asideText: '#ffffffff',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#084078ff',
            asideScrollbarThumb: '#084078ff',
            asideScrollbarThumbHover: '#0a5596ff',
            closeSheetIcon: '#ffffff'
        }
    },
    {
        id: 'green',
        name: 'Xanh lá',
        light: {
            primary: '#156b5eff',
            background: '#ffffff',
            asideBackground: '#0e7969ff',
            asideText: '#ffffffff',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#17a48fff',
            asideScrollbarThumb: '#17a48fff',
            asideScrollbarThumbHover: '#1bbfa5ff',
            closeSheetIcon: '#ffffff'
        },
        dark: {
            primary: '#11907dff',
            background: '#ffffff',
            asideBackground: '#11907dff',
            asideText: '#ffffffff',
            asideActiveText: '#ffffff',
            asideActiveBackground: '#00ad94',
            asideScrollbarThumb: '#00ad94',
            asideScrollbarThumbHover: '#00c9adff',
            closeSheetIcon: '#ffffff'
        }
    }
];

export const defaultTheme = colorThemes[0];