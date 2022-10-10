import { PrivateRoutes, PublicRoutes } from '@/config'
import { createUser, resetUser } from '@/redux/states'
import { loginService } from '@/services'
import { ls } from '@/utilities'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFetchAndLoad from './useFetchAndLoad'

export default function useAuth () {
  const navigate = useNavigate()
  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { callEndpoint, loading } = useFetchAndLoad()

  const login = async ({ username, password }) => {
    const response = await callEndpoint(loginService({ username, password }))

    // Hanlde error
    if (response?.error) return response

    // Set auth token
    ls.setItem('jwt', response.jwt)

    // Create new user in memory
    dispatch(createUser({ username: response.username, jwt: response.jwt }))
    navigate(PrivateRoutes.PRIVATE.route)
  }

  const logout = ({ redirect = true } = {}) => {
    // Unset auth token
    ls.removeItem('jwt')

    // Remove current session of the user
    dispatch(resetUser())
    redirect && navigate(PublicRoutes.LOGIN.route)
  }

  return {
    login,
    logout,
    isLogged: Boolean(userState.jwt),
    loading,
    user: userState
  }
}
