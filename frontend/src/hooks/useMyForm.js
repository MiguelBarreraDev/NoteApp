import { toList } from '@/utilities'
import { useEffect, useMemo, useState } from 'react'

/**
 * Custom hooks that allows you to easily control forms
 * params {Object} initialValues - default values for the inputs
 */
export default function useMyform (initialValues = {}) {
  const onlyKeys = useMemo(() => Object
    .keys(initialValues)
    .reduce((obj, key) => ({ ...obj, [key]: '' }), {}),
  [initialValues])

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(onlyKeys)
  const [validate, setValidate] = useState({ run: null })
  const [check, setCheck] = useState(false)

  // Error validation on each update of 'errors' state
  useEffect(() => {
    const existingErrors = toList(errors).some(error => error !== '')
    existingErrors ? setCheck(false) : setCheck(true)
  }, [errors])

  /**
   * Sets attributes for an input element
   * params {String} name - Key to register a input element
   */
  const getAttributes = name => {
    const attributes = {
      onChange: e => handleChange(name, e),
      name,
      value: values[name] ?? '',
      error: Boolean(errors[name]),
      helperText: errors[name],
      onBlur: handleErrors
    }

    return attributes
  }

  /**
   * Reset value inputs to initial values or empty object
   */
  const reset = () => {
    setValues(initialValues || {})
  }

  /**
   * Allowed set function to validate values inputs
   * params {Function} cb - Validate function
   */
  const useValidate = (cb) => {
    useEffect(() => {
      setValidate({ run: cb })
    }, [cb])
  }

  /**
   * Detec changes in the inputs and update your values
   * params {String} name - name of the input
   * params {object} e - onChange event
   */
  const handleChange = (name, e) => {
    const { value } = e.target

    setValues(cs => ({ ...cs, [name]: value }))
  }

  /**
   * Validate all inputs for the onSubmit event
   */
  const validateAllFields = () => {
    if (!validate.run) return { send: true }

    const newErrors = validate.run(values)
    const existingErrors = Object
      .keys(errors)
      .some(key => errors[key] !== newErrors[key])

    return { send: !existingErrors, newErrors }
  }

  /**
   * Update errors in the onBlur event
   * params {object} e - onBlur event
   */
  const handleErrors = e => {
    if (!validate.run) return

    const { name } = e.target
    const newErrors = validate.run(values)

    setErrors(cs => ({ ...cs, [name]: newErrors[name] }))
  }

  /**
   * HOF for handle onSubmit event
   * params {Function} cb - Function to be executed with the inputs values
   */
  const submit = (cb) => e => {
    e.preventDefault()

    const { send, newErrors } = validateAllFields()

    if (!check || !send) return setErrors(newErrors)

    cb(values)
  }

  return {
    getAttributes,
    values,
    errors,
    useValidate,
    submit,
    reset
  }
}
