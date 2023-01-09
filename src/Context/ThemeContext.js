import React from "react";

const ThemeContext = React.createContext();
export const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");
    const ChangeLight = () => {
        setTheme("light");
    };
    const ChangeDark = () => {
        setTheme("dark");
    };

    const value = { theme, ChangeLight, ChangeDark };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;