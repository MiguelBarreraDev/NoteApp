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
import { useDispatch } from 'react-redux'
import { updateError } from '@/redux/states'
import { Header } from '@/components/Common/Header'

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
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const { login, isLogged, logout, loading } = useAuth()
  const { getAttributes, submit, useValidate } = useMyform()

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  useValidate(customErrors)

  const handleSubmit = async (values) => {
    const loginResponse = await login(values)
    const { error, code } = loginResponse || {}
    if (error) {
      code === 0
        ? dispatch(updateError({ active: true, type: 'error', message: error }))
        : setError(true)
    }
  }

  return (
    <>
      <Header />
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
              type='password'
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
          {error && <FormGridItem>
            <Typography color='error'>
              Username or password incorrects
            </Typography>
          </FormGridItem>}
        </FormGridContainer>
      </AuthenticateFormContainer>
    </>
  )
}
