import { createSlice } from "@reduxjs/toolkit";


const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false,
        error: false
    },
    reducers: {
        getCatsFetch: state => {
            state.isLoading = true
        },
        getCatsSuccess: (state, action) => {
            state.isLoading = false
            state.cats = action.payload
        },
        getCatsFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }

    }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catsSlice.actions
export default catsSlice.reducer