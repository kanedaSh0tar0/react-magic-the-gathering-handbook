import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'

import { fetchManaItems } from '../../../store/manaItems'

import styles from './CardInfo.module.css'

function CardInfo({
    name,
    flavor,
    originalText,
    originalType,
    rarity,
    manaCost,
    text
}) {
    const [manaItemsLinks, setManaItemsLinks] = useState([])
    const [cardText, setCardText] = useState(null)
    const manaItems = useSelector(state => state.manaItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchManaItems())
    }, [dispatch])

    useEffect(() => {
        (() => {
            const origText = originalText?.length || !originalText <= 1 ? text : originalText

            setManaItemsLinks(() => {
                const links = []
                manaCost && manaCost
                    .match(/{.+?}/g)
                    .forEach((textMana, ind) => {
                        manaItems.items.forEach(fetchMana => {
                            if (textMana === fetchMana.symbol) {
                                links.push(
                                    <img
                                        className={cn(styles.manaItem, styles.manaItem_big)}
                                        alt="Mana cost"
                                        key={ind}
                                        src={fetchMana.svg_uri}
                                    />
                                )
                            }
                        })
                    })
                return links
            })

            setCardText(() => {
                const readyText = []
                origText && origText
                    .split(/({.})/g)
                    .filter(item => item !== '')
                    .forEach((textItem, ind) => {
                        /{.+}/.test(textItem)
                            ? manaItems.items.forEach(fetchMana => {
                                if ((textItem) === fetchMana.symbol) {
                                    readyText.push(<img
                                        className={styles.manaItem}
                                        alt="Mana cost"
                                        key={ind}
                                        src={fetchMana.svg_uri}
                                    />)
                                }
                            })
                            : readyText.push(textItem)
                    })
                return readyText
            })
        })()
    }, [manaItems.items, manaCost, originalText, text])

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h2 className={styles.name}>{name.replace('//', 'or')}</h2>

                <ul className={styles.manaCost}>
                    {manaItemsLinks && manaItemsLinks.map(manaLink => { return manaLink })}
                </ul>
            </div>

            <span className={styles.type}>{originalType}</span>
            <span className={styles.type}>{rarity}</span>

            <div className={styles.text}>
                <div className={styles.originalText}>
                    {cardText && cardText.map(item => { return item })}
                </div>

                {flavor && <div className={styles.flavor}>{flavor}</div>}
            </div>
        </div>
    )
}

export default CardInfo