import { FormDialog } from '@/components'
import { updateError } from '@/redux/states'
import { useDispatch } from 'react-redux'
import { useNotes } from '../../../hooks'
import Actions from './Actions'
import Form from './Form'
import OpendDialog from './OpenDialog'

export default function EditNoteDialog ({ title, categoryName, body }) {
  const { updateNote } = useNotes()
  const dispatch = useDispatch()

  const initialValues = { title, body }

  const onSubmit = async (values, close) => {
    try {
      updateNote({ categoryName, ...values })
      close()
    } catch (error) {
      dispatch(updateError({
        active: true,
        message: error.message,
        type: 'error'
      }))
    }
  }

  return (
    <FormDialog
      title='Edit note'
      initialForm={initialValues}
      RenderButton={OpendDialog}
      RenderContent={Form}
      RenderActions={Actions}
      onSubmit={onSubmit}
    />
  )
}
