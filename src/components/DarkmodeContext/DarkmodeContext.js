import { useState, useEffect, createContext } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(JSON.parse(localStorage.getItem('darkMode') || false));

    const toggle = () => {
        setDarkmode(!darkmode);
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkmode)
    }, [darkmode]);

    return (
        <DarkmodeContext.Provider value={{ darkmode, toggle }}>
            {children}
        </DarkmodeContext.Provider>
    )
}