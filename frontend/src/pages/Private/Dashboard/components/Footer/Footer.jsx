import Box from '@mui/material/Box'
import FormDialog from './FormDialog'
import AddNoteForm from './AddNoteForm'
import OpenDialog from './OpenDialog'
import Actions from './Actions'
import { useNotes } from '../../hooks'

const initialForm = {
  title: { content: '' },
  body: { content: '' }
}

export default function Footer ({ categoryName }) {
  const { addNote } = useNotes()

  const onSubmit = async (values, close) => {
    addNote({ categoryName, ...values })
    values && close()
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
