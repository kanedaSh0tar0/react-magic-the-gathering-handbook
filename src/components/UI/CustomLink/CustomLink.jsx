import { Link, useMatch } from 'react-router-dom'

import styles from './CustomLink.module.css'

function CustomLink({ children, to }) {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })

    return (
        <Link className={match ? styles.linkActive : styles.link} to={to}>
            {children}
        </Link>
    )
}

export default CustomLink