import { FormDialog } from '@/components'
import { updateError } from '@/redux/states'
import { useDispatch } from 'react-redux'
import { useNotes } from '../../../hooks'
import Actions from './Actions'
import Form from './Form'
import OpendDialog from './OpenDialog'

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

export default function EditNoteDialog ({ title, categoryName, body }) {
  const { updateNote } = useNotes()
  const dispatch = useDispatch()

  const initialValues = { title, body }

  const onSubmit = async (values, close) => {
    try {
      await updateNote({ categoryName, ...values })
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
      initialErrors={customErrors}
    />
  )
}
