import {combineReducers, configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import catsSlice from './catsSlice'
import rootSaga from './rootSaga'
import postsSlice from './postsSlice'

const saga = createSagaMiddleware()

const rootReducer = combineReducers ({
    cats: catsSlice,
    posts: postsSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga]
})

saga.run(rootSaga)