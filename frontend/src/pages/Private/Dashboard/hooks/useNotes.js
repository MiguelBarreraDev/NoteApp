import { useContext } from 'react'
import { notesContext } from '../../context'

export default function useNotes () {
  const { notesState } = useContext(notesContext)

  return {
    notes: notesState
  }
}
