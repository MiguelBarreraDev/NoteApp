import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { useAuth } from '@/hooks'
import {
  AuthenticateFormContainer,
  FormGridItem,
  FormGridContainer,
  SubmitButton,
  CustomTextField
} from '@/styledComponents'
import CircularProgress from '@mui/material/CircularProgress'
import useMyform from '@/hooks/useMyForm'

const customErrors = (values) => {
  const newErrors = {}

  // Username errors
  if (values.username === '') newErrors.username = 'Please complete this field'
  else newErrors.username = ''

  // Password errors
  if (values.password === '') newErrors.password = 'Please complete this field'
  else newErrors.password = ''

  return newErrors
}

export default function Login () {
  const [error, setError] = useState('')
  const { login, isLogged, logout, loading } = useAuth()
  const { getAttributes, submit, useValidate } = useMyform({
    username: { content: '' },
    password: { content: '', type: 'password' }
  })

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  useValidate(customErrors)

  const handleSubmit = async (values) => {
    const loginResponse = await login(values)
    if (loginResponse?.error) setError(loginResponse.error)
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer
        onSubmit={submit(handleSubmit)}
      >
        <FormGridItem>
          <Typography variant='h5' sx={{ color: 'Text.light', fontWeight: 'bold' }}>
            Welcome
          </Typography>
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            label='Username'
            {...getAttributes('username')}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            label='Password'
            {...getAttributes('password')}
          />
        </FormGridItem>
        <FormGridItem>
          <SubmitButton
            variant='contained'
            disabled={loading}
          >
            {loading
              ? <CircularProgress color='primary' />
              : 'Log in'}
          </SubmitButton>
        </FormGridItem>
        {Boolean(error) && <FormGridItem>
          <Typography color='error'>
            Username or password incorrects
          </Typography>
        </FormGridItem>}
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
