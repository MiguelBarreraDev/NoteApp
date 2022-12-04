import { ls } from '@/utilities'

export const addCategoryService = async ({ name }) => {
  try {
    const notes = JSON.parse(ls.getItem('notes')) ?? {}
    ls.setItem('notes', JSON.stringify({ ...notes, [name]: { name, items: [] } }))
    return Promise.resolve({ code: 200 })
  } catch (error) {
    return Promise.reject(new Error({ code: 400 }))
  }
}

export const addNoteService = ({ categoryName, title, body }) => {
  try {
    const notes = JSON.parse(ls.getItem('notes')) ?? {}
    ls.setItem(
      'notes',
      JSON.stringify({
        ...notes,
        [categoryName]: {
          ...notes[categoryName],
          items: [...notes[categoryName].items, { title, body }]
        }
      })
    )
    return Promise.resolve({ code: 200 })
  } catch (error) {
    return Promise.reject(new Error({ code: 400 }))
  }
}

export const updateNoteService = ({ title, body }) => {
}

export const removeNoteService = ({ title }) => {
}

export const removeCategoryService = ({ name }) => {
}
