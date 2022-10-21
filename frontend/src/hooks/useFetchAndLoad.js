import { ls } from '@/utilities'
import { useState, useEffect } from 'react'

const handleError = ({ error }) => {
  if ([400, 401].includes(error.response.status)) {
    ls.removeItem('jwt')
    return { error: 'Credentials Incorrects', code: 401 }
  }
  if (error.response.status === 0) {
    return { error: 'An internal problem arose', code: 0 }
  }
}

// Make controlled asynchronous calls
const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false)
  let controller = null

  // Make asyncronous call
  const callEndpoint = async (asyncCall) => {
    setLoading(true)

    if (asyncCall.controller) controller = asyncCall.controller

    try {
      // execute asyncronous call
      const { data } = await asyncCall.call
      setLoading(false)

      return data
    } catch (error) {
      setLoading(false)

      return handleError({ error })
    }
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
