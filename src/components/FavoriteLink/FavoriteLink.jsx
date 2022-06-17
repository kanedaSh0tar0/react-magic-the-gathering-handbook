import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './FavoriteLink.module.css'


function FavoriteLink() {
    const [counter, setCounter] = useState(0)
    const store = useSelector(state => state.favoritesCards)

    useEffect(() => {
        store.length > 99 ? setCounter('...') : setCounter(store.length)
    }, [store.length])

    return (
        <div className={styles.container}>
            <span className={styles.counter}>{counter}</span>
            <div className={styles.icon}>
                <svg viewBox="0 0 512 512">
                    <path d="M409.6,0.1H102.4C74.7,0.1,52,23.1,52,51.1v409.5c0,28,22.7,51,50.4,51c25.3,4.7,73.5-54.7,138.8-142.8  c11.8-15.8,21.8-9.4,28.5-0.2c72.5,99.6,124.6,146.2,139.9,143c27.7,0,50.4-22.9,50.4-51V51.1C460,23.1,437.3,0.1,409.6,0.1z   M206.8,80.7l23-3.3c3.2-0.5,5.9-2.4,7.3-5.3l10.3-20.8c3.6-7.2,13.8-7.2,17.4,0L275,72c1.4,2.9,4.1,4.8,7.3,5.3l23,3.3  c8,1.2,11.1,10.9,5.4,16.5L294,113.4c-2.3,2.2-3.3,5.4-2.8,8.6l3.9,22.9c1.4,7.9-7,14-14.1,10.2l-20.5-10.8c-2.8-1.5-6.2-1.5-9,0  l-20.5,10.8c-7.1,3.7-15.4-2.3-14.1-10.2l3.9-22.9c0.5-3.1-0.5-6.4-2.8-8.6l-16.6-16.2C195.6,91.6,198.8,81.8,206.8,80.7z   M403.5,267.8c0,8-6.6,14.6-14.6,14.6H123.1c-8,0-14.6-6.6-14.6-14.6v-4.6c0-8,6.6-14.6,14.6-14.6h265.8c8,0,14.6,6.6,14.6,14.6  V267.8z M403.5,201.2c0,8-6.6,14.6-14.6,14.6H123.1c-8,0-14.6-6.6-14.6-14.6v-4.6c0-8,6.6-14.6,14.6-14.6h265.8  c8,0,14.6,6.6,14.6,14.6V201.2z" />
                </svg>
            </div>
        </div>
    )
}

export default FavoriteLink