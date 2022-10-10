import Alert from '@mui/material/Alert'
import { useEffect, useRef } from 'react'

export default function ShowError ({ sx, open = false, handleClose, children }) {
  const ref = useRef()

  useEffect(() => {
    window.addEventListener('click', e => {
      const { current } = ref
      const { target } = e
      if (current && current !== target && !current.contains(target)) {
        handleClose('')
      }
    })
  }, [ref.current])

  return (
    <>
      { open
        ? <Alert
          ref={ref}
          onClose={handleClose}
          severity='error'
          variant='filled'
          sx={{
            position: 'absolute',
            width: '100%',
            maxWidth: '350px',
            margin: 'auto',
            borderRadius: 2,
            left: 0,
            right: 0,
            bottom: -80,
            ...sx
          }}
        >
          { children }
        </Alert>
        : null}
    </>
  )
}
