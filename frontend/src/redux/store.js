import { configureStore } from '@reduxjs/toolkit'
import { errorReducer, userReducer } from './states'

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer
  }
})
