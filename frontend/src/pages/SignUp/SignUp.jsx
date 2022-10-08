import { useState, useEffect } from 'react'
import { signupService } from '@/services'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  AuthenticateFormContainer,
  FormGridItem,
  FormGridContainer,
  SubmitButton,
  CustomTextField
} from '@/styledComponents'
import { useAuth, useFetchAndLoad } from '@/hooks'
import { createUser } from '@/redux/states'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '@/config'
import { ls } from '@/utitlities'

export default function SignUp () {
  const { logout, isLogged, loading } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { callEndpoint } = useFetchAndLoad()
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await callEndpoint(signupService({
      name,
      lastname,
      username,
      email,
      password
    }))

    ls.setItem('jwt', data.jwt)
    dispatch(createUser({ id: data.id, username: data.username, jwt: data.jwt }))
    navigate(PrivateRoutes.PRIVATE.route)
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer sx={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <Typography
          align='center'
          variant='h5'
          sx={{ width: '100%', color: 'Text.main', fontWeight: 'bold' }}
        >
          Welcome
        </Typography>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            color='secondary'
            label='Name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            color='secondary'
            label='Lastname'
            type='text'
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='Username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='E-mail'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' sx={{ margin: 0 }}>
                  <IconButton
                    onClick={() => setShowPassword(cs => !cs)}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </FormGridItem>
        <SubmitButton
          color='secondary'
          variant='contained'
          disabled={!(name && lastname && username && email && password) || loading}
        >
          {loading
            ? <CircularProgress color='secondary'/>
            : 'Sign up'}
        </SubmitButton>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
