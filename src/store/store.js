import { configureStore } from '@reduxjs/toolkit'

import favoritesCards from './favoritesCards'
import searchResponse from './searchResponse'
import manaItems from './manaItems'

const store = configureStore({
    reducer: {
        favoritesCards,
        searchResponse,
        manaItems
    }
})

store.subscribe(() => {
    localStorage.setItem('favoritesCards', JSON.stringify(store.getState().favoritesCards))
})

export default store