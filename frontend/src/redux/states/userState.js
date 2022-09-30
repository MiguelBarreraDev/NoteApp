import { createSlice } from '@reduxjs/toolkit'

const emptyUserState = {
  name: '',
  lastname: '',
  username: '',
  email: '',
  jwt: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: emptyUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => emptyUserState
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
