import { useMemo, useState, useEffect } from 'react'
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
import { toList } from '@/utilities'

export default function Login () {
  const { login, isLogged, logout, loading } = useAuth()
  const [inputValues, setInputValues] = useState({
    username: '',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    login(inputValues)
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
            disabled={disableSubmit}
          >
            {loading
              ? <CircularProgress color='primary' />
              : 'Login'}
          </SubmitButton>
        </FormGridItem>
      </FormGridContainer>
    </AuthenticateFormContainer>
  )
}
