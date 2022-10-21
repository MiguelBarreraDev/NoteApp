import { loadAbort } from '@/utilities'
import axios from 'axios'

const { VITE_BACKEND_URL } = import.meta.env

// TODO: How work interceptor?
const apiInstance = axios.create({
  baseURL: VITE_BACKEND_URL
})
apiInstance.interceptors.request.use(request => {
  console.log('request:', request)
  return request
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
    call: axios.post(getURL('users/login'), data, {
      signal: controller.signal
    }),
    controller
  }
}

/**
 * ...
 */
export const signupService = ({ name, surname, username, email, password }) => {
  const controller = loadAbort()
  const data = {
    name,
    surname,
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
export const profileService = () => {
  const controller = loadAbort()

  return {
    call: apiInstance.get('users/profile', {
      signal: controller.signal
    }),
    controller
  }
}
