import { ls, toList } from '@/utilities'

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
    return Promise.resolve({ code: 201 })
  } catch (error) {
    return Promise.reject(new Error({ code: 400 }))
  }
}

export const updateNoteService = ({ categoryName, title, body }) => {
  try {
    const notes = JSON.parse(ls.getItem('notes')) ?? {}
    ls.setItem(
      'notes',
      JSON.stringify({
        ...notes,
        [categoryName]: {
          ...notes[categoryName],
          items: notes[categoryName].items.map(item => (
            item.title === title ? { ...item, body } : item
          ))
        }
      })
    )
    return Promise.resolve({ code: 200 })
  } catch (error) {
    return Promise.reject(new Error({ code: 400 }))
  }
}

export const removeNoteService = ({ categoryName, title }) => {
  try {
    const notes = JSON.parse(ls.getItem('notes')) ?? {}
    ls.setItem(
      'notes',
      JSON.stringify({
        ...notes,
        [categoryName]: {
          ...notes[categoryName],
          items: notes[categoryName].items
            .filter(note => note.title !== title)
        }
      })
    )
    return Promise.resolve({ code: 204 })
  } catch (error) {
    return Promise.reject(new Error({ code: 404 }))
  }
}

export const removeCategoryService = ({ name }) => {
  try {
    const notes = JSON.parse(ls.getItem('notes')) ?? {}
    ls.setItem(
      'notes',
      JSON.stringify(toList(notes).reduce((obj, category) => {
        const categoryKey = category?.name

        if (categoryKey !== name) obj[categoryKey] = notes[categoryKey]

        return obj
      }, {}))
    )
    return Promise.resolve({ code: 204 })
  } catch (error) {
    return Promise.reject(new Error({ code: 404 }))
  }
}
