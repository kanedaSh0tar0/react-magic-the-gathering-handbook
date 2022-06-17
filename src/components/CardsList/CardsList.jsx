import CardListItem from '../CardComponents/CardListItems/CardListItem'
import Loader from '../UI/Loader/Loader'

import styles from './CardsList.module.css'

function CardList({ cards, loading }) {
    if (loading) {
        return <Loader />
    }

    return (
        <div className={styles.cardListContainer}>
            {!!cards.length
                ? <ul className={styles.cardList}>
                    {cards.map(item => {
                        return (
                            <li className={styles.cardListItem} key={item.id}>
                                <CardListItem {...item} />
                            </li>
                        )
                    })}
                </ul>
                : <h2 className={styles.notFound}>Card not found</h2>
            }
        </div>
    )
}

export default CardList