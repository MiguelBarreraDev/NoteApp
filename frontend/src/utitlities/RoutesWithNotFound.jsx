import { Routes, Route } from 'react-router-dom'

export default function RoutesWithNotFound ({ children }) {
  return (
    <Routes>
      {children}
      <Route path='/*' element={<>Not Found</>} />
    </Routes>
  )
}
