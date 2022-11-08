import { toList } from '@/utilities'
import { createContext, useReducer } from 'react'

const notesContext = createContext()

// Initial state for notes
const initialState = {
  todo: {
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
  'in process': {
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
  stoped: {
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
        [payload.name.toLowerCase()]: {
          name: payload.name,
          items: []
        }
      }
    case 'add note':
      return {
        ...state,
        [payload.categoryName.toLowerCase()]: {
          ...state[payload.categoryName.toLowerCase()],
          items: [
            ...state[payload.categoryName.toLowerCase()].items,
            { title: payload.title, body: payload.body }
          ]
        }
      }
    case 'remove category':
      return toList(state).reduce((obj, category) => {
        const { name } = category
        const categoryKey = name.toLowerCase()

        if (categoryKey !== payload.name.toLowerCase()) {
          obj[categoryKey] = state[categoryKey]
        }

        return obj
      }, {})
    case 'remove note':
      return {
        ...state,
        [payload.categoryName.toLowerCase()]: {
          ...state[payload.categoryName.toLowerCase()],
          items: state[payload.categoryName.toLowerCase()].items
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
