import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CardsPaginationPanel from '../CardsPaginationPanel/CardsPaginationPanel'
import UIArrowButton from '../../UI/UIArrowButton/UIArrowButton'

import styles from './CardsNavigation.module.css'

function CardsNavigation({ movePrev, moveNext, counterPage, navLinks, moveTo, totalPage }) {
    const [nextLink, setNextLink] = useState('')
    const [prevLink, setPrevLink] = useState('')

    const createLink = link => {
        let index = ''
        if (link) {
            index = link.indexOf('?')
            return link.slice(index, link.lenght)
        }
    }

    useEffect(() => {
        setNextLink(createLink(navLinks.next))
        setPrevLink(createLink(navLinks.prev))
    }, [navLinks.next, navLinks.prev])

    if (!totalPage) return <div></div>

    return (
        <div className={styles.cardsNav}>
            <div className={styles.cardsPagination}>
                <Link
                    to={prevLink ? prevLink : '?page=1'}
                    className={styles.cardsNav_button}
                >
                    <UIArrowButton disable={!navLinks.prev} onClick={movePrev} direction={true} />
                </Link>

                <CardsPaginationPanel
                    totalPage={totalPage}
                    moveTo={moveTo}
                    navLinks={navLinks}
                    counterPage={counterPage}
                />

                <Link
                    to={nextLink ? nextLink : `?page=${totalPage}`}
                    className={styles.cardsNav_button}
                >
                    <UIArrowButton disable={!navLinks.next} onClick={moveNext} direction={false} />
                </Link>
            </div>
        </div>
    )
}

export default CardsNavigation