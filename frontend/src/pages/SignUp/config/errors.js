const customErrors = (values) => {
  const newErrors = {}

  // Name errors
  if (values.name === '') newErrors.name = 'Please complete this field'
  else if (values.name.length < 2) newErrors.name = 'Min length 2 characters'
  else newErrors.name = ''

  // Surname errors
  if (values.surname === '') newErrors.surname = 'Please complete this field'
  else if (values.surname.length < 2) newErrors.surname = 'Min length 2 characters'
  else newErrors.surname = ''

  // Username errors
  if (values.username === '') newErrors.username = 'Please complete this field'
  else if (values.username.length < 2) newErrors.username = 'Min length 2 characters'
  else newErrors.username = ''

  // Email errors
  if (values.email === '') newErrors.email = 'Please complete this field'
  else if (values.email.length < 8) newErrors.email = 'Min length 8 characters'
  else newErrors.email = ''

  // Password errors
  if (values.password === '') newErrors.password = 'Please complete this field'
  else if (values.password.length < 8) newErrors.password = 'Min length 8 characters'
  else newErrors.password = ''

  return newErrors
}

export default customErrors
