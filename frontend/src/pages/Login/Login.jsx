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

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, logout } = useAuth()

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer onSubmit={handleSubmit}>
        <FormGridItem>
          <Typography variant='h5' sx={{ color: 'Text.main', fontWeight: 'bold' }}>
            Welcome
          </Typography>
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            label='Username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            label='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <SubmitButton
            variant='contained'
            disabled={!(username && password)}
          >
            Login
          </SubmitButton>
        </FormGridItem>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
