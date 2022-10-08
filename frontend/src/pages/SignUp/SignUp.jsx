import { useState, useEffect, useMemo } from 'react'
import { signupService } from '@/services'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
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
import { ls, toList } from '@/utilities'

export default function SignUp () {
  const { logout, isLogged, loading } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { callEndpoint } = useFetchAndLoad()
  const [inputValues, setInputValues] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    isLogged && logout({ redirect: false })
  }, [])

  const changeInputValue = inputKey => e => {
    setInputValues(cs => ({ ...cs, [inputKey]: e.target.value }))
  }

  const disableSubmit = useMemo(
    () => toList(inputValues).some(value => value === '') || loading,
    [inputValues, loading]
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await callEndpoint(signupService(inputValues))

    if (data) {
      ls.setItem('jwt', data.jwt)
      dispatch(createUser({ id: data.id, username: data.username, jwt: data.jwt }))
      navigate(PrivateRoutes.PRIVATE.route)
    }
  }

  return (
    <AuthenticateFormContainer>
      <FormGridContainer sx={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
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
            type='text'
            value={inputValues?.name}
            onChange={changeInputValue('name')}
          />
        </FormGridItem>
        <FormGridItem sm={5.8}>
          <CustomTextField
            required
            color='secondary'
            label='Lastname'
            type='text'
            value={inputValues?.lastname}
            onChange={changeInputValue('lastname')}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='Username'
            type='text'
            value={inputValues?.username}
            onChange={changeInputValue('username')}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='E-mail'
            type='email'
            value={inputValues?.email}
            onChange={changeInputValue('email')}
          />
        </FormGridItem>
        <FormGridItem>
          <CustomTextField
            required
            color='secondary'
            label='Password'
            type='password'
            value={inputValues?.password}
            onChange={changeInputValue('password')}
          />
        </FormGridItem>
        <SubmitButton
          color='secondary'
          variant='contained'
          disabled={disableSubmit}
        >
          {loading
            ? <CircularProgress color='secondary'/>
            : 'Sign up'}
        </SubmitButton>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
