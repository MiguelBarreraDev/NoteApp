import { toList } from '@/utilities'
import { useContext } from 'react'
import { notesContext } from '../../context'
import {
  addCategoryService,
  addNoteService,
  removeCategoryService,
  removeNoteService
} from '../services'

export default function useNotes () {
  const { notesState, notesDispatch } = useContext(notesContext)

  const addCategory = ({ name }) => {
    addCategoryService({ name })
    notesDispatch({
      type: 'add category',
      payload: { name }
    })
  }

  const addNote = ({ categoryName, title, body }) => {
    addNoteService({ title, body })
    notesDispatch({
      type: 'add note',
      payload: {
        categoryName,
        title,
        body
      }
    })
  }

  const removeCategory = ({ name }) => {
    removeCategoryService({ name })
    notesDispatch({
      type: 'remove category',
      payload: { name }
    })
  }

  const removeNote = ({ categoryName, title }) => {
    removeNoteService({ title })
    notesDispatch({
      type: 'remove note',
      payload: { categoryName, title }
    })
  }

  const resetCategories = () => {
    notesDispatch({
      type: 'reset categories'
    })
  }

  return {
    notes: toList(notesState),
    addNote,
    addCategory,
    removeNote,
    removeCategory,
    resetCategories
  }
}
