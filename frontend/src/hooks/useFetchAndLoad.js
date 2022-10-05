import { ls } from '@/utitlities'
import { useState, useEffect } from 'react'

// Make controlled asynchronous calls
const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false)
  let controller = null

  // Make asyncronous call
  const callEndpoint = async (asyncCall) => {
    setLoading(true)
    let result = {}

    if (asyncCall.controller) controller = asyncCall.controller

    try {
      result = await asyncCall.call
    } catch (error) {
      if (error.response.status === 401) ls.removeItem('jwt')
    }

    setLoading(false)
    return result
  }

  // Cancel the asyncronous call
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
