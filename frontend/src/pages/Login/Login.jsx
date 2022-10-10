import { useCallback, useState, useEffect } from 'react'
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
  const [inputValues, setInputValues] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  const handleClose = useCallback(() => setErrorMessage(''), [])

  const changeInputValue = inputKey => e => (
    setInputValues(cs => ({ ...cs, [inputKey]: e.target.value }))
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await login(inputValues)
    if (response?.error) setErrorMessage(response.error)
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer onSubmit={handleSubmit}>
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
            value={inputValues?.username}
            onChange={changeInputValue('username')}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            label='Password'
            type='password'
            value={inputValues?.password}
            onChange={changeInputValue('password')}
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
        <ShowError open={Boolean(errorMessage)} handleClose={handleClose}>
          { errorMessage }
        </ShowError>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
