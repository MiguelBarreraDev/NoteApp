import { toList } from '@/utilities'
import { createContext, useReducer } from 'react'

const notesContext = createContext()

// Initial state for notes
const initialState = {
  TODO: {
    name: 'TODO',
    items: [
      {
        title: 'Item 1',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      }
    ]
  },
  'In Process': {
    name: 'In Process',
    items: [
      {
        title: 'Item 1',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      }
    ]
  },
  Stoped: {
    name: 'Stoped',
    items: [
      {
        title: 'Item 1',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 2',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      },
      {
        title: 'Item 3',
        body: 'Lorem repellat ducimus ab molestiae earum Exercitationem pariatur laborum in voluptatibus distinctio iste pariatur.'
      }
    ]
  }
}

// Reducer
const reducer = (state, action) => {
  const payload = action?.payload

  switch (action.type) {
    case 'add category':
      return {
        ...state,
        [payload.name]: {
          name: payload.name,
          items: []
        }
      }
    case 'add note':
      return {
        ...state,
        [payload.categoryName]: {
          ...state[payload.categoryName],
          items: [
            ...state[payload.categoryName].items,
            { title: payload.title, body: payload.body }
          ]
        }
      }
    case 'update note':
      return {
        ...state,
        [payload.categoryName]: {
          ...state[payload.categoryName],
          items: state[payload.categoryName].items.map(item => (
            item.title === payload.title ? { ...item, body: payload.body } : item
          ))
        }
      }
    case 'remove category':
      return toList(state).reduce((obj, category) => {
        const { name } = category
        const categoryKey = name

        if (categoryKey !== payload.name) obj[categoryKey] = state[categoryKey]

        return obj
      }, {})
    case 'remove note':
      return {
        ...state,
        [payload.categoryName]: {
          ...state[payload.categoryName],
          items: state[payload.categoryName].items
          .filter(note => note.title !== payload.title)
        }
      }
    case 'reset categories':
      return initialState
    default:
      throw new Error()
  }
}

export function NotesContextProvider ({ children }) {
  const [notesState, notesDispatch] = useReducer(reducer, initialState)

  return (
    <notesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </notesContext.Provider>
  )
}

export default notesContext
