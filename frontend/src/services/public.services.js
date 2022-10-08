import { loadAbort } from '@/utilities'
import axios from 'axios'

const { VITE_BACKEND_URL } = import.meta.env

// TODO: How work interceptor?
axios.interceptors.request.use((config) => {
  return config
})

const getURL = (path) => `${VITE_BACKEND_URL}/${path}`

/**
 * ...
 */
export const loginService = ({ username, password }) => {
  const controller = loadAbort()
  const data = {
    username,
    password
  }

  return {
    call: axios.post(getURL('users/login'), data, { signal: controller.signal }),
    controller
  }
}

/**
 * ...
 */
export const signupService = ({ name, lastname, username, email, password }) => {
  const controller = loadAbort()
  const data = {
    name,
    surname: lastname,
    username,
    email,
    password
  }

  return {
    call: axios.post(getURL('users/signup'), data, { signal: controller.signal }),
    controller
  }
}

/**
 * ...
 */
export const profileService = ({ jwt }) => {
  const controller = loadAbort()

  return {
    call: axios.get(getURL('users/profile'), {
      headers: {
        Authorization: jwt
      },
      signal: controller.signal
    }),
    controller
  }
}
