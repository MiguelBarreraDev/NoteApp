import { toList } from '@/utilities'
import { useEffect, useMemo, useState } from 'react'

export default function useMyform (initialValues) {
  const onlyContent = useMemo(() => Object
    .keys(initialValues)
    .reduce((obj, key) => ({ ...obj, [key]: initialValues[key].content }), {}), [])

  const onlyKeys = useMemo(() => Object
    .keys(initialValues)
    .reduce((obj, key) => ({ ...obj, [key]: '' }), {}), [])

  const [values, setValues] = useState(onlyContent)
  const [errors, setErrors] = useState(onlyKeys)
  const [validate, setValidate] = useState({ run: null })
  const [check, setCheck] = useState(false)

  useEffect(() => {
    const existingErrors = toList(errors).some(error => error !== '')
    existingErrors ? setCheck(false) : setCheck(true)
  }, [errors])

  const getAttributes = name => {
    return {
      type: initialValues[name].type ?? 'text',
      onChange: e => handleChange(name, e),
      name,
      value: values[name],
      error: Boolean(errors[name]),
      helperText: errors[name],
      onBlur: handleErrors
    }
  }

  const reset = () => {
    setValues(onlyContent)
  }

  const useValidate = (cb) => {
    useEffect(() => {
      setValidate({ run: cb })
    }, [values])
  }

  const handleChange = (name, e) => {
    const { value } = e.target

    setValues(cs => ({ ...cs, [name]: value }))
  }

  const validateAllFields = () => {
    if (!validate.run) return { send: true }
    const newErrors = validate.run(values)
    const existingErrors = Object.keys(errors).some(key => errors[key] !== newErrors[key])

    return { send: !existingErrors, newErrors }
  }

  const handleErrors = e => {
    const { name } = e.target

    if (!validate.run) return

    const newErrors = validate.run(values)
    setErrors(cs => ({ ...cs, [name]: newErrors[name] }))
  }

  const submit = (cb) => ({
    onSubmit: (e) => {
      e.preventDefault()

      const { send, newErrors } = validateAllFields()

      if (!check || !send) return setErrors(newErrors)

      cb(values)
    }
  })

  const updateValidate = (name, value) => {
    setValidate(cs => ({ ...cs, [name]: value }))
  }

  return {
    getAttributes,
    values,
    errors,
    useValidate,
    submit,
    updateValidate,
    reset
  }
}
