import { createContext, useReducer } from 'react'

const notesContext = createContext()

// Initial state for notes
const initialState = [
  {
    category: 'TODO',
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
  {
    category: 'In Process',
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
  {
    category: 'Stoped',
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
]

// Reducer
const reducer = (state, action) => {
  const payload = action?.payload

  switch (action.type) {
    case 'addCategory':
      return [...state, { category: payload.category, items: [] }]
    case 'resetCategories':
      return []
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
