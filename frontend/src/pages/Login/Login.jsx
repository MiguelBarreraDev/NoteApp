import { useState } from 'react'
import {loginService} from '@/services'
import Typography from '@mui/material/Typography'
import {
  AuthenticateFormContainer,
  FormGridItem,
  FormGridContainer,
  SubmitButton,
  CustomTextField
} from '@/styledComponents'
import {useFetchAndLoad} from '@/hooks'
import {createUser} from '@/redux/states'
import { useDispatch } from 'react-redux'

export default function Login () {
  const dispatch = useDispatch()
  const { callEndpoint } = useFetchAndLoad()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = null
    try {
      result = await callEndpoint(loginService({ username, password }))
      dispatch(createUser(result.data))
    } catch (error) {
      console.log(error)
    }
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
