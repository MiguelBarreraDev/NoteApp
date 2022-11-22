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

  const searchCategory = (name) => {
    return notesState[name] ?? null
  }

  const searchNote = (categoryName, title) => {
    return notesState[categoryName].items.find(note => note.title === title)
  }

  const addCategory = ({ name }) => {
    if (searchCategory(name)) throw new Error('Category title must be unique')
    addCategoryService({ name })
    notesDispatch({
      type: 'add category',
      payload: { name }
    })
  }

  const addNote = ({ categoryName, title, body }) => {
    if (searchNote(categoryName, title)) throw new Error('Note title must be unique')
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
