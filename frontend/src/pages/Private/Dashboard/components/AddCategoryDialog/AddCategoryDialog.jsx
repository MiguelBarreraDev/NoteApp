import { FormDialog } from '@/components'
import { updateError } from '@/redux/states'
import { useDispatch } from 'react-redux'
import { useNotes } from '../../hooks'
import Actions from './Actions'
import Form from './Form'
import OpendDialog from './OpenDialog'

export default function AddCategoryDialog () {
  const { addCategory } = useNotes()
  const dispatch = useDispatch()

  const onSubmit = async (values, close) => {
    try {
      await addCategory({ name: values?.name })
      dispatch(updateError({
        id: values?.name,
        message: 'Category added successfully',
        type: 'success'
      }))
      close()
    } catch (error) {
      dispatch(updateError({
        id: values?.name,
        message: error.message,
        type: 'error'
      }))
    }
  }

  return (
    <FormDialog
      title='Add New Category'
      RenderButton={OpendDialog}
      RenderContent={Form}
      RenderActions={Actions}
      onSubmit={onSubmit}
    />
  )
}
