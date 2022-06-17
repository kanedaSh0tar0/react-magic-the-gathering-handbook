import cn from 'classnames'

import styles from './UIButton.module.css'

function UIButton({ children, classes }) {
    return (
        <button className={cn(styles.button, classes)}>{children}</button>
    )
}

export default UIButton