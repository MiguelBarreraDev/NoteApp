import Box from '@mui/material/Box'
import AddNoteForm from './AddNoteForm'
import OpenDialog from './OpenDialog'
import Actions from './Actions'
import { useNotes } from '../../hooks'
import { useDispatch } from 'react-redux'
import { updateError } from '@/redux/states'
import { FormDialog } from '@/components'

const initialForm = {
  title: { content: '' },
  body: { content: '' }
}

export default function Footer ({ categoryName }) {
  const { addNote } = useNotes()
  const dispatch = useDispatch()

  const onSubmit = async (values, close) => {
    try {
      addNote({ categoryName, ...values })
      values && close()
    } catch (error) {
      dispatch(updateError({
        active: true,
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
        initialForm={initialForm}
        onSubmit={onSubmit}
      />
    </Box>
  )
}
