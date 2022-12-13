import { removeError } from '@/redux/states'
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useState, forwardRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

Alert.displayName = 'Alert'

const BuiltSnackbar = ({ error, index }) => {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()

  const handleClose = (errorId) => {
    dispatch(removeError({ errorId }))
    setActive(false)
  }

  return (
    <Snackbar
      sx={{
        width: '100%'
      }}
      open={active}
      autoHideDuration={6000}
      onClose={() => handleClose(error.id)}
    >
      <Alert
        variant="filled"
        onClose={() => handleClose(error.id)}
        severity={error.type}
      >
        {error.message}
      </Alert>
    </Snackbar>
  )
}

export default function ShowError () {
  const errorState = useSelector((state) => state.error)

  return (
    <>
      {errorState.map((error, index) => (
        <BuiltSnackbar key={error.id} error={error} index={index} />
      ))}
    </>
  )
}
