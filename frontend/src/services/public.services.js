import { axiosPrivate, axiosPublic, loadAbort } from '@/utilities'

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
    call: axiosPublic('users/login', data, {
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
    call: axiosPublic('users/signup', data, { signal: controller.signal }),
    controller
  }
}

/**
 * ...
 */
export const profileService = () => {
  const controller = loadAbort()

  return {
    call: axiosPrivate.get('users/profile', {
      signal: controller.signal
    }),
    controller
  }
}
