import { toList } from '@/utilities'
import { useContext } from 'react'
import { notesContext } from '../../context'
import {
  addCategoryService,
  addNoteService,
  removeCategoryService,
  removeNoteService,
  updateNoteService
} from '../services'

export default function useNotes () {
  const { notesState, notesDispatch } = useContext(notesContext)

  const searchCategory = ({ name }) => {
    return notesState[name] ?? null
  }

  const searchNote = ({ categoryName, title }) => {
    return notesState[categoryName].items.find(note => note.title === title)
  }

  const addCategory = async ({ name }) => {
    if (searchCategory({ name })) throw new Error('Category title must be unique')
    const serviceResponse = await addCategoryService({ name })
    notesDispatch({
      type: 'add category',
      payload: { name }
    })
  }

  const addNote = async ({ categoryName, title, body }) => {
    if (searchNote({ categoryName, title })) throw new Error('Note title must be unique')
    const serviceResponse = await addNoteService({ categoryName, title, body })
    notesDispatch({
      type: 'add note',
      payload: {
        categoryName,
        title,
        body
      }
    })
  }

  const updateNote = async ({ categoryName, title, body }) => {
    const serviceResponse = await updateNoteService({ categoryName, title, body })
    notesDispatch({
      type: 'update note',
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

  const removeNote = async ({ categoryName, title }) => {
    const serviceResponse = await removeNoteService({ categoryName, title })
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
    updateNote,
    addCategory,
    removeNote,
    removeCategory,
    resetCategories,
    searchNote,
    searchCategory
  }
}
