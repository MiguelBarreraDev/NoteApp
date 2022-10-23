import { useState } from 'react'

export default function useMyform (initialValues) {
  const [inputs, setInputs] = useState(initialValues)
  const [errors, setErrors] = useState(
    Object.keys(initialValues).reduce((obj, key) => ({ ...obj, [key]: '' }), {})
  )
  console.log('inputs:', inputs)
  console.log('errors:', errors)
  const handleChange = (name, e) => {
    const { value: content } = e.target

    setInputs(cs => ({ ...cs, [name]: { ...cs[name], content } }))
  }

  const handleError = (name, error) => {
    setErrors(cs => ({ ...cs, [name]: error }))
  }

  const getAttributes = name => {
    return {
      type: inputs[name].type ?? 'text',
      onChange: e => handleChange(name, e),
      name,
      value: inputs[name].content,
      error: Boolean(errors[name]),
      helperText: errors[name] ?? ''
    }
  }

  const customErrors = newErrors => setErrors(cs => ({ ...cs, ...newErrors }))

  return {
    getAttributes,
    formValues: Object
      .keys(initialValues)
      .reduce((obj, key) => ({ ...obj, [key]: inputs[key].content }), {}),
    handleError,
    customErrors,
    errors
  }
}
