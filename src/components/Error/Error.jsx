import styles from './Error.module.css'
import Image from './img/error.jpg'

function Error() {
    return (
        <div className={styles.error}>
            <h2 className={styles.error__text}>Oops, something went wrong...</h2>
            <img className={styles.error__image} alt="Error" src={Image} />
        </div>
    )
}

export default Error