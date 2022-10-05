import { PublicRoutes } from '@/config'
import {ls} from '@/utitlities'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false)
  let controller = null

  const callEndpoint = async (asyncCall) => {
    setLoading(true)
    let result = {}

    if (asyncCall.controller) controller = asyncCall.controller

    try {
      result = await asyncCall.call
    } catch (error) {
      if (error.response.status === 401) {
        ls.removeItem('jwt')
      }
    }
    setLoading(false)
    return result
  }

  const cancelEndpoint = () => {
    setLoading(false)
    controller && controller.abort()
  }

  useEffect(() => {
    return () => cancelEndpoint()
  }, [])

  return {
    callEndpoint,
    loading
  }
}

export default useFetchAndLoad
