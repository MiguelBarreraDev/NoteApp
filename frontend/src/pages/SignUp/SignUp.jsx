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
import { customErrors } from './config'

export default function SignUp () {
  const [error, setError] = useState(null)
  const { signup, logout, isLogged, loading } = useAuth()
  const { getAttributes, submit, validate } = useMyForm()

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  validate(customErrors)

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
          onSubmit={submit(handleSubmit)}
        >
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
            {error.map((item, index) => (
            <Typography key={index} align='left' color='error'>
              - {item}
            </Typography>
            ))}
          </FormGridItem>}
        </FormGridContainer>
      </AuthenticateFormContainer>
    </>
  )
}
