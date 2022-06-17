import cn from 'classnames'

import { useTheme } from '../../../context/ThemeProvider'

import manaW from '../../../styles/img/manaIcons/W.svg'
import manaB from '../../../styles/img/manaIcons/B.svg'

import styles from './ThemeButton.module.css'

function ThemeButton() {
    const isTheme = useTheme()

    return (
        <div className={styles.container}>
            <button onClick={() => isTheme.changeTheme('light')} className={cn(styles.halfBtn, styles.light)}>
                <img src={manaW} alt="Theme color light" />
            </button>
            <button onClick={() => isTheme.changeTheme('dark')} className={cn(styles.halfBtn, styles.dark)}>
                <img src={manaB} alt="Theme color dark" />
            </button>
        </div>
    )
}

export default ThemeButton