import { createContext, useContext, useEffect, useState } from "react";

interface appContextType {
    isDark: boolean,
    setIsDark: (isDark: boolean) => void,
    themeClass: any;
    mobile: boolean;
    setMobile: (mobile: boolean) => void;
}

const appDefaultValues = {
    isDark: false,
    setIsDark: () => {},
    themeClass: {},
    mobile: false,
    setMobile: () => { },
}

const themes = {
    light: {
        text: 'text-black',
        bg: 'bg-white',
        bg1: 'bg-orange-600',
        bgAlt: 'bg-slate-100',
        textAlt: 'text-white',
        textAlt1: 'text-orange-600',
        color: '#ea580c',
        color1: 'orange-600'
    },
    dark: {
        text: 'text-white',
        bg: 'bg-black',
        bg1: 'bg-orange-600',
        bgAlt: 'bg-slate-100',
        textAlt: 'text-black',
        textAlt1: 'text-orange-600',
        color: '#ea580c',
        color1: 'orange-600',
    }
}

const AppContext = createContext<appContextType>(appDefaultValues);

export const useApp = ()=> useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false);
    const [mobile, setMobile] = useState(false) 
    const [themeClass, setThemeClass] = useState(themes.light)


    const saveTheme = () => {
        if (isDark) {
            localStorage.setItem('theme', "dark");
        }else{
            localStorage.setItem('theme', "light");
        }
    }

    const getSavedTheme = () => {
        const localIsDark = localStorage.getItem('isDark');
        if (localIsDark) {
            if (localIsDark === "dark") {
                setIsDark(true);
                setThemeClass(themes.dark);
            }else{
                setIsDark(false);
                setThemeClass(themes.light); 
            }
        }
    }

    useEffect(() => {
        saveTheme();
        setThemeClass(isDark?themes.dark:themes.light)
    }, [isDark]);
    
    useEffect(() => {
        getSavedTheme();
    }, []);

    return (
        <AppContext.Provider value={{ isDark, setIsDark, themeClass, mobile, setMobile }}>
            {children}
        </AppContext.Provider>
    );
}