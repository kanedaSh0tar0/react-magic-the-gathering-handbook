import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import CardList from '../../components/CardsList/CardsList'

import styles from './FavoritesPage.module.css'

function FavoritesPage() {
    const [favoriteCards, setFavoriteCards] = useState([])
    const favoritesCards = useSelector(state => state.favoritesCards)

    useEffect(() => {
        setFavoriteCards(() => favoritesCards)
    }, [favoritesCards])

    return (
        <div className={styles.favoritePage}>
            {favoriteCards.length
                ? <CardList cards={favoriteCards} />
                : <h2>You do not have favorites cards</h2>
            }
        </div>
    )
}

export default FavoritesPage