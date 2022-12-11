import Box from '@mui/material/Box'
import AddNoteForm from './AddNoteForm'
import OpenDialog from './OpenDialog'
import Actions from './Actions'
import { useNotes } from '../../hooks'
import { useDispatch } from 'react-redux'
import { updateError } from '@/redux/states'
import { FormDialog } from '@/components'

const initialState = {
  title: '', body: ''
}

const customErrors = (values) => {
  const newErrors = {}

  // Title errors
  if (values.title === '') newErrors.title = 'Please complete this field'
  else newErrors.title = ''

  // Bidy errors
  if (values.body === '') newErrors.body = 'Please complete this field'
  else newErrors.body = ''

  return newErrors
}

export default function Footer ({ categoryName }) {
  const { addNote } = useNotes()
  const dispatch = useDispatch()

  const onSubmit = async (values, close) => {
    try {
      await addNote({ categoryName, ...values })
      close()
    } catch (error) {
      dispatch(updateError({
        active: true,
        id: `${categoryName}.${values.title}`,
        message: error.message,
        type: 'error'
      }))
    }
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{ py: 1 }}
    >
      <FormDialog
        title='Add New Note'
        RenderButton={OpenDialog}
        RenderActions={Actions}
        RenderContent={AddNoteForm}
        onSubmit={onSubmit}
        initialForm={initialState}
        initialErrors={customErrors}
      />
    </Box>
  )
}
