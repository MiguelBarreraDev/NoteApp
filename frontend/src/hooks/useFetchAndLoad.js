import { useState, useEffect } from "react"

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false)
  let controller = null;

  const callEndpoint = async (asyncCall) => {
    if (asyncCall.controller) controller = asyncCall.controller
    setLoading(true)
    let result = {}
    try {
      result = await asyncCall.call
    } catch (error) {
      throw error
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
