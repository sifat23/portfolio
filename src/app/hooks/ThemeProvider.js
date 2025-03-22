import {useEffect, useState} from "react";

const ThemeProvider = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: light)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

    const mediaQueryListener = (e => {
        setIsDarkTheme(e.matches)
    });

    useEffect(() => {
        const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: light)");
        darkThemeMediaQuery.addListener(mediaQueryListener);
        return () => darkThemeMediaQuery.removeListener(mediaQueryListener);
    }, []);

    return isDarkTheme;
}

