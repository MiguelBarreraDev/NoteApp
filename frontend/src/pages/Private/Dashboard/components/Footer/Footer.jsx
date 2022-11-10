import Box from '@mui/material/Box'
import FormDialog from './FormDialog'
import AddNoteForm from './AddNoteForm'
import OpenDialog from './OpenDialog'
import Actions from './Actions'

export default function Footer ({ category }) {
  const initialForm = {
    title: { content: '' },
    body: { content: '' }
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{ py: 1 }}
    >
      <FormDialog
        title='New Note'
        RenderButton={OpenDialog}
        RenderActions={Actions}
        RenderContent={AddNoteForm}
        initialForm={initialForm}
        categoryName={category}
      />
    </Box>
  )
}
