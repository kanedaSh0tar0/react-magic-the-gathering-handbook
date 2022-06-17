import CustomLink from '../UI/CustomLink/CustomLink'
import FavoriteLink from '../FavoriteLink/FavoriteLink'

import ThemeButton from '../UI/ThemeButton/ThemeButton'

import styles from './Header.module.css'
import Logo from './img/logo.png'

function Header() {
    return (
        <header className={styles.container}>
            <img className={styles.logo} alt="Logo" src={Logo} />

            <nav className={styles.navList}>
                <div className={styles.mainLinks}>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="cards">Cards</CustomLink>
                </div>

                <div className={styles.functionalLinks}>
                    <CustomLink to="favorites"><FavoriteLink /></CustomLink>
                    <ThemeButton />
                </div>
            </nav>
        </header>

    )
}

export default Header