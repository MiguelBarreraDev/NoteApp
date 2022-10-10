import { useState, useEffect } from 'react'
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
import { ShowError } from '@/components/ShowError'

export default function Login () {
  const [errorMessage, setErrorMessage] = useState('')
  const { login, isLogged, logout, loading } = useAuth()
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  return (
    <AuthenticateFormContainer>
      <FormGridContainer
        onSubmit={handleSubmit({ formValues, login, setErrorMessage })}
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
            type='text'
            value={formValues?.username}
            onChange={changeInputValue({ setFormValues, inputKey: 'username' })}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            label='Password'
            type='password'
            value={formValues?.password}
            onChange={changeInputValue({ setFormValues, inputKey: 'password' })}
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
        <ShowError
          open={Boolean(errorMessage)}
          handleClose={() => closeError(setErrorMessage)}
        >
          {errorMessage}
        </ShowError>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}

const handleSubmit = ({ formValues, login, setErrorMessage }) => async (e) => {
  e.preventDefault()
  const { username, password } = formValues
  const loginResponse = await login({ username, password })
  if (loginResponse?.error) setErrorMessage(loginResponse.error)
}

const changeInputValue = ({ setFormValues, inputKey }) => e => (
  setFormValues(cs => ({ ...cs, [inputKey]: e.target.value }))
)

const closeError = (setErrorMessage) => setErrorMessage('')
