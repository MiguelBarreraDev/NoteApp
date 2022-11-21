import { updateError } from '@/redux/states'
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

Alert.displayName = 'Alert'

export default function ShowError () {
  const errorState = useSelector(state => state.error)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(updateError({ active: false }))
  }

  return (
    <Snackbar open={errorState.active} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        variant='filled'
        onClose={handleClose}
        severity={errorState.type}
        sx={{ width: '100%' }}
      >
        {errorState.message}
      </Alert>
    </Snackbar>
  )
}
