import { useState, useEffect, useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import withHandlingResponse from '../../hoc/withHandlingResponse'
import CardList from '../../components/CardsList/CardsList'
import CardsPageControls from '../../components/CardsNavigation/CardsPageControls/CardsPageControls'

import { getApiResourse } from '../../utils/getApiResourse'
import { getHeadersLinks } from '../../utils/getCardsData'
import { CARDS_LINK, QUERY_PARAMS, SORT_WITHOUT_IMG } from '../../constants/apiLinks'

// import styles from './CardsPage.module.css'

function CardsPage({ setErrorResponse }) {
    const location = useLocation()
    const [searchPatams, setSearchPatams] = useSearchParams(location.search)
    const [cards, setCards] = useState(null)
    const [counterPage, setCounterPage] = useState(parseInt(searchPatams.get('page') || 1))
    const [totalPage, setTotalPage] = useState('')
    const [navLinks, setNavLinks] = useState({})
    const [loading, setLoading] = useState(true)
    const searchResponse = useSelector(state => state.searchResponse)
    const pageSize = 48
    const prevSearchReq = useRef(searchResponse)


    async function getCardsList(url) {
        const response = await getApiResourse(url)
        const responseBody = await response.json()
        const responseHeaders = await response.headers

        if (response) {
            const slicedUrl = url.slice(CARDS_LINK.length, url.length)
            const cardsList = responseBody.cards.map(({ name, imageUrl, id }) => {
                return {
                    name,
                    imageUrl,
                    id
                }
            })

            if (prevSearchReq.current !== searchResponse) {
                prevSearchReq.current = searchResponse
                setCounterPage(1)
            }

            setSearchPatams(slicedUrl)
            setNavLinks(getHeadersLinks(responseHeaders))
            setTotalPage(Math.ceil(responseHeaders.get('Total-Count') / pageSize))
            setCards(cardsList)
            setErrorResponse(false)
            setLoading(false)
        } else {
            setErrorResponse(true)
        }
    }

    useEffect(() => {
        setLoading(true)
        getCardsList(`${CARDS_LINK}${QUERY_PARAMS.START}${searchResponse && QUERY_PARAMS.SEARCH_NAME + searchResponse + QUERY_PARAMS.AND}${QUERY_PARAMS.PAGE}${counterPage}${QUERY_PARAMS.AND}${QUERY_PARAMS.PAGE_SIZE}${pageSize}${QUERY_PARAMS.AND}${searchResponse === '' && QUERY_PARAMS.CONTAINSE + SORT_WITHOUT_IMG}`)
    }, [searchResponse, counterPage])

    return (
        <div>
            <CardsPageControls
                counterPage={counterPage}
                setCounterPage={setCounterPage}
                navLinks={navLinks}
                totalPage={totalPage}
            />
            <CardList cards={cards} loading={loading} />
        </div>
    )
}

export default withHandlingResponse(CardsPage)