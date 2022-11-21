import { createSlice } from '@reduxjs/toolkit'

const initialErrorState = {
  message: '',
  code: '',
  type: '',
  active: false
}

export const errorSlice = createSlice({
  name: 'error',
  initialState: initialErrorState,
  reducers: {
    updateError: (state, action) => ({ ...state, ...action.payload }),
    resetError: () => initialErrorState
  }
})

export const { updateError, resetError } = errorSlice.actions

export default errorSlice.reducer
