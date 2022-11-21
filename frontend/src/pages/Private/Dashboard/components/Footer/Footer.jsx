import Box from '@mui/material/Box'
import FormDialog from './FormDialog'
import AddNoteForm from './AddNoteForm'
import OpenDialog from './OpenDialog'
import Actions from './Actions'

const initialForm = {
  title: { content: '' },
  body: { content: '' }
}

export default function Footer ({ category }) {
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
        categoryName={category}
      />
    </Box>
  )
}
