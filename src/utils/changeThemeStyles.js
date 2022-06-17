const changeThemeStyles = theme => {
    const root = document.querySelector(':root')
    const backgroundStyle = '--backgroundDefault'
    const textColor = '--colorDefault'

    switch (theme) {
        case 'light':
            root.style.setProperty(backgroundStyle, 'var(--backgroundLigth)')
            root.style.setProperty(textColor, 'var(--colorBlack)')
            break
        case 'dark':
            root.style.setProperty(backgroundStyle, 'var(--backgroundDark)')
            root.style.setProperty(textColor, 'var(--colorWhite)')
            break
        default:
            break
    }
}

export default changeThemeStyles