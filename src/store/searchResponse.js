import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const searchResponse = createSlice({
    name: 'searchResponse',
    initialState: initialState,
    reducers: {
        setSearchResponse: (_, action) => {
            return action.payload
        }
    }
})

export const { setSearchResponse } = searchResponse.actions

export default searchResponse.reducer