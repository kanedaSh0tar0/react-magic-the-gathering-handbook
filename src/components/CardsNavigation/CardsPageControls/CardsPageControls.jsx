import CardsNavigation from '../CardsNavigation/CardsNavigation'
import UIInput from '../../UI/UIInput/UIInput'

import styles from './CardsPageControls.module.css'

function CardsPageControls({ counterPage, navLinks, setCounterPage, totalPage }) {
    const handleChangeNext = () => {
        setCounterPage(prev => parseInt(+prev + 1))
    }

    const handleChangePrev = () => {
        setCounterPage(prev => prev !== '1' ? parseInt(+prev - 1) : 1)
    }

    const handleMoveTo = ({ target }) => {
        setCounterPage(+target.textContent)
    }

    return (
        <div className={styles.cardsControls}>
            <CardsNavigation
                moveNext={handleChangeNext}
                movePrev={handleChangePrev}
                counterPage={counterPage}
                navLinks={navLinks}
                moveTo={handleMoveTo}
                totalPage={totalPage}
            />

            <UIInput />
        </div>
    )
}

export default CardsPageControls