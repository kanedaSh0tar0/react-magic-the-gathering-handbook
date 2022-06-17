import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import cn from 'classnames'

import { getApiResourse } from '../../utils/getApiResourse'
import { CARDS_LINK } from '../../constants/apiLinks'
import { addCard, removeCard } from '../../store/favoritesCards'

import withHandlingResponse from '../../hoc/withHandlingResponse'
import Loader from '../../components/UI/Loader/Loader'
import GoBack from '../../components/UI/GoBack/GoBack'
import CardImage from '../../components/CardComponents/CardImage/CardImage'
import CardInfo from '../../components/CardComponents/CardInfo/CardInfo'

import styles from './CardPage.module.css'

function CardPage({ setErrorResponse }) {
    const [loadind, setLoadind] = useState(true)
    const [card, setCard] = useState({})
    const [favorite, setFavorite] = useState(false)
    const dispatch = useDispatch()
    const favoritesCards = useSelector(state => state.favoritesCards)
    const params = useParams()

    useEffect(() => {
        (async () => {
            const response = await getApiResourse(`${CARDS_LINK}${params.id}`)
            const responseBody = await response.json()
            const cardData = await responseBody.card

            if (response) {
                setErrorResponse(false)
                setLoadind(false)
                setCard(cardData)
                favoritesCards.forEach(item => item.id === cardData.id && setFavorite(true))
            } else setErrorResponse(true)
        })()
    }, [favoritesCards, params.id, setErrorResponse])

    const toggleFavorite = () => {
        if (!favorite) {
            setFavorite(true)
            return addCard({ id: card.id, name: card.name, imageUrl: card.imageUrl })
        } else {
            setFavorite(false)
            return removeCard({ id: card.id, name: card.name, imageUrl: card.imageUrl })
        }
    }

    if (loadind) {
        return <Loader />
    }

    return (
        <div>
            <div className={styles.topPanel}>
                <GoBack />

                <button onClick={() => dispatch(toggleFavorite())} className={cn(styles.favorite, favorite && styles.favorite_active)}>
                    <svg viewBox="0 0 28 28">
                        <path clipRule="evenodd" d="M5 2.92445C5 1.8616 5.8616 1 6.92444 1H20.3956C21.4584 1 22.32 1.8616 22.32 2.92444V25.0556C22.32 26.6414 20.5096 27.5466 19.2409 26.5951L13.66 22.4094L8.07911 26.5951C6.81045 27.5466 5 26.6414 5 25.0556V2.92445ZM20.3956 3.50178C20.3956 3.18293 20.1371 2.92444 19.8182 2.92444L7.50178 2.92445C7.18293 2.92445 6.92444 3.18293 6.92444 3.50178V24.4782C6.92444 24.7161 7.19601 24.8519 7.38631 24.7092L12.5053 20.8699C13.1896 20.3567 14.1304 20.3567 14.8147 20.8699L19.9337 24.7092C20.124 24.8519 20.3956 24.7161 20.3956 24.4782V3.50178Z" fillRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className={styles.mainContent}>
                <CardImage classes={styles.image} src={card.imageUrl} alt={card.name} />
                <CardInfo {...card} />
            </div>
        </div>
    )
}

export default withHandlingResponse(CardPage)