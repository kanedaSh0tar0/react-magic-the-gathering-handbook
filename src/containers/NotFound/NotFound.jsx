import { useLocation } from 'react-router-dom'

import styles from './NotFound.module.css'

function NotFound() {
    const location = useLocation()

    return (
        <h2 className={styles.title}>Not found {location.pathname}</h2>
    )
}

export default NotFound