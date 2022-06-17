import { createSlice } from '@reduxjs/toolkit'

const initialState = () => {
    const localData = localStorage.getItem('favoritesCards')
    return localData !== null ? JSON.parse(localData) : []
}

const favoritesCards = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            return [
                ...state,
                action.payload
            ]
        },
        removeCard: (state, action) => {
            return state.filter(card => card.id !== action.payload.id)
        }
    }
})

export const { addCard, removeCard } = favoritesCards.actions

export default favoritesCards.reducer