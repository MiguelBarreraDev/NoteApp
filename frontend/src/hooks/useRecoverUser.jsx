import { PublicRoutes } from '@/config'
import { updateUser } from '@/redux/states'
import { profileService } from '@/services'
import { log, ls } from '@/utitlities'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFetchAndLoad from './useFetchAndLoad'

export default function useRecoverUser () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { callEndpoint } = useFetchAndLoad()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const jwt = ls.getItem('jwt')
    const recoveryUser = async () => {
      const { data } = await callEndpoint(profileService({ jwt }))

      if (!data) {
        setLoading(false)
        return ls.removeItem('jwt')
      }

      dispatch(updateUser({ id: data.id, username: data.username, jwt }))
      setLoading(false)
    }

    if (!jwt) {
      setLoading(false)
      return navigate(PublicRoutes.LOGIN.route)
    }
    recoveryUser()
  }, [])

  return { loading }
}
