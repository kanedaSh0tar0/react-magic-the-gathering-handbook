import { useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { debounce } from 'lodash'
import cn from 'classnames'

import CustomLink from '../UI/CustomLink/CustomLink'
import FavoriteLink from '../FavoriteLink/FavoriteLink'

import ThemeButton from '../UI/ThemeButton/ThemeButton'
import Burger from '../UI/Burger/Burger'

import styles from './Header.module.css'
import Logo from './img/logo.webp'

function Header() {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [location])

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        } else document.body.style.overflowY = 'auto'
    }, [open])

    const debounceWindowSize = useCallback(
        debounce(() => {
            if (window.innerWidth > 640) setOpen(false)
        }, 500),
        []
    )

    window.addEventListener('resize', () => {
        debounceWindowSize()
    })

    const onClick = () => {
        setOpen(!open)
    }

    return (
        <header className={styles.container}>
            <img className={styles.logo} alt="Logo" src={Logo} />

            <nav className={cn(styles.navList, open && styles.navListOpen)}>
                <div className={styles.mainLinks}>
                    <CustomLink classes={styles.link} to="/">Home</CustomLink>
                    <CustomLink classes={styles.link} to="cards">Cards</CustomLink>
                </div>

                <div className={styles.functionalLinks}>
                    <CustomLink classes={styles.linkImg} to="favorites">
                        <FavoriteLink classes={open && styles.favoriteLinkBurger} />
                    </CustomLink>

                    <ThemeButton />
                </div>
            </nav>

            <Burger
                classes={styles.burger}
                onClick={onClick}
                condition={open}
            />
        </header>

    )
}

export default Header