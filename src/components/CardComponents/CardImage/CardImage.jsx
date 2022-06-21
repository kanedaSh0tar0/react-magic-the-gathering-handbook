import cn from 'classnames'

import cardBack from './image/cardBack.webp'

import styles from './CardImage.module.css'

function CardImage({ src, alt, classes }) {
    return (
        <div className={cn(styles.container, classes)}>
            <img
                className={styles.image}
                src={src ? src : cardBack}
                alt={alt}
            />
        </div>
    )
}

export default CardImage