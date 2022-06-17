import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    loading: null
}

export const fetchManaItems = createAsyncThunk('manaItems/fetchManaItems', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://api.scryfall.com/symbology')

        if (!response.ok) {
            throw new Error('Server error')
        }

        return await response.json()

    } catch (error) {
        return rejectWithValue(error.value)
    }
})

const manaItems = createSlice({
    name: 'manaItems',
    initialState,
    extraReducers: {
        [fetchManaItems.pending]: (state) => {
            state.loading = 'loading'
        },
        [fetchManaItems.fulfilled]: (state, action) => {
            state.loading = 'resolved'
            state.items = action.payload.data
        },
        [fetchManaItems.rejected]: (state) => {
            state.loading = 'rejected'
        }
    }
})

export default manaItems.reducer