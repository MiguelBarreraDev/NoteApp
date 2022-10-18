import { userAdapter } from '@/adapters'
import { updateUser } from '@/redux/states'
import { profileService } from '@/services'
import { ls } from '@/utilities'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useAuth from './useAuth'
import useFetchAndLoad from './useFetchAndLoad'

export default function useRecoverUser () {
  const { isLogged, logout } = useAuth()
  const dispatch = useDispatch()
  const { callEndpoint } = useFetchAndLoad()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const jwt = ls.getItem('jwt')
    const recoveryUser = async () => {
      const profileResponse = await callEndpoint(profileService({ jwt }))

      if (profileResponse.error) {
        setLoading(false)
        return ls.removeItem('jwt')
      }

      dispatch(updateUser(userAdapter({ ...profileResponse, jwt })))
      setLoading(false)
    }

    if (!jwt) {
      setLoading(false)
      return logout({ redirect: isLogged })
    }

    recoveryUser()
  }, [])

  return { loading }
}
