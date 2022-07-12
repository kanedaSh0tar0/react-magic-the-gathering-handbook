import cn from 'classnames'

import styles from './Burger.module.css'

function Burger({ classes, onClick, condition }) {
    return (
        <div
            onClick={onClick}
            className={cn(styles.container, condition ? styles.lineAnimationOpen : styles.lineAnimationClose, classes)}
        >
            <div className={cn(styles.line, styles.openLine)}></div>
            <div className={cn(styles.line, styles.openLine)}></div>
            <div className={cn(styles.line, styles.openLine)}></div>
            <div className={cn(styles.line, styles.closeLine, condition && styles.burgerOpen)}></div>
            <div className={cn(styles.line, styles.closeLine, condition && styles.burgerOpen)}></div>
        </div>
    )
}

export default Burger