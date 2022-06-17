import { Link } from 'react-router-dom'

import CardImage from '../CardImage/CardImage'

import styles from './CardListItem.module.css'

function CardListItem({ name, imageUrl, id }) {
    return (
        <>
            <Link to={`${id}`} className={styles.link}>
                <div className={styles.card}>
                    <CardImage src={imageUrl} alt={name} />

                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardListItem