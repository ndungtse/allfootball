import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import footReducer from './slices/footDataSlice'

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        footData: footReducer
    })
})