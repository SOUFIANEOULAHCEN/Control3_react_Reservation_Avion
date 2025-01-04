import { configureStore } from '@reduxjs/toolkit'
import flightReducer from '../reducers/flightReducer'

export const store = configureStore({
  reducer: {
    flights: flightReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

