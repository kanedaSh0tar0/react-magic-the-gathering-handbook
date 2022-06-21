import { Link, useMatch } from 'react-router-dom'
import cn from 'classnames'

import styles from './CustomLink.module.css'

function CustomLink({ children, to, classes }) {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })

    return (
        <Link className={cn(styles.link, classes, match && styles.linkActive)} to={to}>
            {children}
        </Link>
    )
}

export default CustomLink