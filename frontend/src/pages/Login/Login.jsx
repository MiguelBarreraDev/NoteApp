import Typography from '@mui/material/Typography'
import {useState} from 'react'

import {
  AuthenticateFormContainer,
  FormGridItem,
  FormGridContainer,
  SubmitButton,
  CustomTextField
} from './styledComponents'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    console.log({username, password})
    e.preventDefault()
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer onSubmit={handleSubmit}>
        <FormGridItem>
          <Typography variant='h5' sx={{ color: '#FFFFFF' }}>
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
          <SubmitButton variant='contained' disabled>
            Login
          </SubmitButton>
        </FormGridItem>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
