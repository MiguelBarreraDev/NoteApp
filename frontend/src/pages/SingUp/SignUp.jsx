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

export default function SignUp () {
  const dispatch = useDispatch()
  const { callEndpoint } = useFetchAndLoad()
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
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
      <FormGridContainer sx={{ maxWidth: '500px' }}onSubmit={handleSubmit}>
        <Typography
          align='center'
          variant='h5'
          sx={{width: '100%', color: 'Text.main', fontWeight: 'bold' }}
        >
          Welcome
        </Typography>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            label='Name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            label='Lastname'
            type='text'
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
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
            label='E-mail'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <SubmitButton
          variant='contained'
          disabled={!(username && password)}
        >
          Sign up
        </SubmitButton>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
