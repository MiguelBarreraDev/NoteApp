import { createSlice } from '@reduxjs/toolkit'

// error = {
//   id: ''
//   message: '',
//   code: '',
//   type: '',
//   active: false
// }

const initialErrorState = []

export const errorSlice = createSlice({
  name: 'error',
  initialState: initialErrorState,
  reducers: {
    // addError: (state, action) => ({ ...state, ... })
    updateError: (state, action) => [...state, action.payload],
    removeError: (state, action) =>
      state.filter((error) => error.id !== action.payload.errorId),
    resetError: () => initialErrorState
  }
})

export const { updateError, resetError, removeError } = errorSlice.actions

export default errorSlice.reducer
