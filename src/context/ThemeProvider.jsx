import React, { useState, useContext } from 'react'

import changeThemeStyles from '../utils/changeThemeStyles'

const ThemeContext = React.createContext()
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null)

    const changeTheme = color => {
        setTheme(color)
        changeThemeStyles(color)
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider