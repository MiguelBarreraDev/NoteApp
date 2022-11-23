import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import {
  AuthenticateFormContainer,
  FormGridItem,
  FormGridContainer,
  SubmitButton,
  CustomTextField
} from '@/styledComponents'
import { useAuth, useMyForm } from '@/hooks'
import { Header } from '@/components/Common/Header'

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
  else if (values.username.length < 8) newErrors.username = 'Min length 8 characters'
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

export default function SignUp () {
  const [error, setError] = useState('')
  const { signup, logout, isLogged, loading } = useAuth()
  const { getAttributes, useValidate, submit } = useMyForm()

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  useValidate(customErrors)

  const handleSubmit = async (values) => {
    const response = await signup(values)
    if (response?.error) setError(response.error)
  }

  return (
    <>
      <Header />
      <AuthenticateFormContainer>
        <FormGridContainer
          sx={{ maxWidth: '500px' }}
          {...submit(handleSubmit)}>
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
            />
          </FormGridItem>
          <FormGridItem sm={5.8}>
            <CustomTextField
              required
              color='secondary'
              label='Lastname'
              {...getAttributes('surname')}
            />
          </FormGridItem>
          <FormGridItem>
            <CustomTextField
              required
              color='secondary'
              label='Username'
              {...getAttributes('username')}
            />
          </FormGridItem>
          <FormGridItem>
            <CustomTextField
              required
              color='secondary'
              label='E-mail'
              type='email'
              {...getAttributes('email')}
            />
          </FormGridItem>
          <FormGridItem>
            <CustomTextField
              required
              color='secondary'
              label='Password'
              type='password'
              {...getAttributes('password')}
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
          {Boolean(error) && <FormGridItem>
            <Typography color='error'>
              Username or password incorrects
            </Typography>
          </FormGridItem>}
        </FormGridContainer>
      </AuthenticateFormContainer>
    </>
  )
}
