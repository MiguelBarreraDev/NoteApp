import { useState, useEffect, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import {
  AuthenticateFormContainer,
  FormGridItem,
  FormGridContainer,
  SubmitButton,
  CustomTextField
} from '@/styledComponents'
import { useAuth, useFetchAndLoad, useMyForm } from '@/hooks'
import { toList } from '@/utilities'
import { ShowError } from '@/components/ShowError'

export default function SignUp () {
  const [errorMessage, setErrorMessage] = useState('')
  const { signup, logout, isLogged } = useAuth()
  const { loading } = useFetchAndLoad()
  const { getAttributes, formValues, customErrors, errors } = useMyForm({
    name: { content: '' },
    surname: { content: '' },
    username: { content: '' },
    email: { content: '', type: 'email' },
    password: { content: '', type: 'password' }
  })

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  const handleErrors = () => {
    const newErrors = {}

    // Name errors
    if (formValues.name === '') newErrors.name = 'Please complete this field'
    else if (formValues.name < 2) newErrors.name = 'Min length 2 characters'
    else newErrors.name = ''

    // Surname errors
    if (formValues.surname === '') newErrors.surname = 'Please complete this field'
    else if (formValues.surname < 2) newErrors.surname = 'Min length 2 characters'
    else newErrors.surname = ''

    // Username errors
    if (formValues.username === '') newErrors.username = 'Please complete this field'
    else if (formValues.username < 8) newErrors.username = 'Min length 8 characters'
    else newErrors.username = ''

    // Email errors
    if (formValues.email === '') newErrors.email = 'Please complete this field'
    else if (formValues.email < 8) newErrors.email = 'Min length 8 characters'
    else newErrors.email = ''

    // Password errors
    if (formValues.password === '') newErrors.password = 'Please complete this field'
    else if (formValues.password < 8) newErrors.password = 'Min length 8 characters'
    else newErrors.password = ''
    console.log('newErrors:', newErrors)
    customErrors(newErrors)
  }

  const handleClose = useCallback(() => setErrorMessage(''), [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const existingErrors = toList(errors).some(error => error !== '')
    if (existingErrors) return

    const response = await signup(formValues)
    if (response?.error) setErrorMessage(response.error)
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer sx={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <Typography
          align='center'
          variant='h5'
          sx={{ width: '100%', color: 'Text.light', fontWeight: 'bold' }}
        >
          Welcome
        </Typography>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            color='secondary'
            label='Name'
            {...getAttributes('name')}
            onBlur={handleErrors}
          />
        </FormGridItem>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            color='secondary'
            label='Lastname'
            {...getAttributes('surname')}
            onBlur={handleErrors}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='Username'
            {...getAttributes('username')}
            onBlur={handleErrors}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='E-mail'
            {...getAttributes('email')}
            onBlur={handleErrors}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='Password'
            {...getAttributes('password')}
            onBlur={handleErrors}
          />
        </FormGridItem>
        <FormGridItem>
          <SubmitButton
            color='secondary'
            variant='contained'
            disabled={loading}
          >
            {loading
              ? <CircularProgress color='secondary'/>
              : 'Sign up'}
          </SubmitButton>
        </FormGridItem>
        <ShowError
          sx={{ maxWidth: '500px' }}
          open={Boolean(errorMessage)}
          handleClose={handleClose}
        >
          { errorMessage }
        </ShowError>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
