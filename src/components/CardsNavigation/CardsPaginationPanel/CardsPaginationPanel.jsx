import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { QUERY_PARAMS, CARDS } from '../../../constants/apiLinks'
import UIButton from '../../UI/UIButton/UIButton'

import styles from './CardsPaginationPanel.module.css'

function CardsPaginationPanel({ moveTo, counterPage, totalPage }) {
    const [paginationLinks, setPaginationLinks] = useState([])
    const searchResponse = useSelector(store => store.searchResponse)

    useEffect(() => {
        let currentPaginationLinks = []
        const maxPages = () => {
            if (totalPage > 7 && window.innerWidth > 640) {
                return 7
            }
            else if (window.innerWidth <= 425) {
                return 0
            }
            else if (totalPage > 7 && window.innerWidth <= 640) {
                return 5
            }
            else return totalPage
        }

        for (let i = 1; i < totalPage; i++) {
            currentPaginationLinks.push(i)
        }


        if (maxPages() === 0) {
            currentPaginationLinks = [1, '...', totalPage]
        }
        else if (counterPage >= 1 && counterPage <= Math.ceil(maxPages() / 2)) {
            const leftLinks = []
            for (let i = 1; i < maxPages(); i++) {
                leftLinks.push(i)
            }
            totalPage > 7
                ? currentPaginationLinks = [...leftLinks, '...', totalPage]
                : currentPaginationLinks = [...leftLinks, totalPage]
        }
        else if (counterPage > Math.ceil(maxPages() / 2) && counterPage <= totalPage - Math.ceil(maxPages() / 2)) {
            const sliced1 = currentPaginationLinks.slice(counterPage - Math.floor(maxPages() / 2), counterPage - 1)
            const sliced2 = currentPaginationLinks.slice(counterPage, (counterPage - 1) + Math.floor(maxPages() / 2))
            currentPaginationLinks = [1, '...', ...sliced1, counterPage, ...sliced2, '...', totalPage]
        }
        else if (counterPage <= totalPage && counterPage >= totalPage - Math.ceil(maxPages() / 2)) {
            const rightLinks = []
            for (let i = totalPage; i > totalPage - (maxPages() - 1); i--) {
                rightLinks.unshift(i)
            }
            totalPage > 7
                ? currentPaginationLinks = [1, '...', ...rightLinks]
                : currentPaginationLinks = [1, ...rightLinks]
        } else return

        setPaginationLinks(currentPaginationLinks)
    }, [totalPage, counterPage])

    return (
        <div className={styles.panel}>
            {paginationLinks.map((link, ind) => {
                return link !== '...'
                    ?
                    (<Link
                        to={`/${CARDS}${QUERY_PARAMS.START}${searchResponse && QUERY_PARAMS.SEARCH_NAME + searchResponse + QUERY_PARAMS.AND}${QUERY_PARAMS.PAGE}${link}`}
                        key={ind}
                        onClick={moveTo}
                    >
                        <UIButton classes={[styles.button, counterPage === link && styles.button_active]}>{link}</UIButton>
                    </Link>)
                    :
                    <span
                        className={styles.dots}
                        key={ind}>
                        &#8943;
                    </span>
            })}
        </div>
    )
}

export default CardsPaginationPanel