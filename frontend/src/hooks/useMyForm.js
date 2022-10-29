import {toList} from '@/utilities'
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

  const useValidate = (cb) => {
    useEffect(() => {
      setValidate({ run: cb })
    }, [values])
  }

  const handleChange = (name, e) => {
    const { value } = e.target

    setValues(cs => ({ ...cs, [name]: value }))
  }

  const handleErrors = e => {
    const { name } = e.target
    const newErrors = validate.run(values)

    setErrors(cs => ({ ...cs, [name]: newErrors[name] }))
  }

  const submit = (cb) => ({
    onSubmit: (e) => {
      e.preventDefault()

      const existingErrors = toList(errors).some(error => error !== '')
      if (existingErrors) return

      cb(values)
    }
  })

  return {
    getAttributes,
    values,
    handleErrors,
    setValidate,
    errors,
    useValidate,
    submit
  }
}
