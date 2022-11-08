import axios from 'axios'
import { ls } from '.'

const { VITE_BACKEND_URL } = import.meta.env

export const axiosPublic = axios.create({
  baseURL: VITE_BACKEND_URL
})

export const axiosPrivate = axios.create({
  baseURL: VITE_BACKEND_URL
})

axiosPrivate.interceptors.request.use(request => {
  request.headers.Authorization ??= `Bearer ${ls.getItem('jwt')}`
  return request
})
