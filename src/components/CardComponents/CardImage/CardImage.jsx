import cn from 'classnames'

import cardBackc from './cardBack.jpg'

import styles from './CardImage.module.css'

function CardImage({ src, alt, classes }) {
    return (
        <div className={cn(styles.container, classes)}>
            <img
                className={styles.image}
                src={src ? src : cardBackc}
                alt={alt}
            />
        </div>
    )
}

export default CardImage