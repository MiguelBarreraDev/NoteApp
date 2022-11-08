export const addCategoryService = ({ name }) => {
  console.log('Added category name:', { name, items: [] })
}

export const addNoteService = ({ title, body }) => {
  console.log('Added note: ', { title, body })
}

export const removeNoteService = ({ title }) => {
  console.log('Remove note: ', { title })
}

export const removeCategoryService = ({ name }) => {
  console.log('Remove category: ', { name })
}
