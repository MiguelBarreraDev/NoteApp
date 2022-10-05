import { PrivateRoutes, PublicRoutes } from '@/config'
import { createUser, resetUser } from '@/redux/states'
import { loginService } from '@/services'
import { ls } from '@/utitlities'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFetchAndLoad from './useFetchAndLoad'

export default function useAuth () {
  const navigate = useNavigate()
  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { callEndpoint, loading } = useFetchAndLoad()

  const login = async ({ username, password }) => {
    const { data } = await callEndpoint(loginService({ username, password }))

    if (data?.jwt) ls.setItem('jwt', data.jwt)
    dispatch(createUser({ username: data.username, jwt: data.jwt }))
    navigate(PrivateRoutes.PRIVATE.route)
  }

  const logout = ({ redirect = true } = {}) => {
    ls.removeItem('jwt')
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
