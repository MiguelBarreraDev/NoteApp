import Button from '@mui/material/Button'
import { useNotes } from '../../hooks'

export default function Actions ({ close, values, categoryName }) {
  const { addNote } = useNotes()
  const handleCancel = () => {
    close()
  }

  const handleAdd = () => {
    console.log(categoryName, values)
    addNote({ categoryName, ...values })
    close()
  }

  return (
    <>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleAdd}>Add</Button>
    </>
  )
}
