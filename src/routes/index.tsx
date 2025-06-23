import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import DetailPage from '../pages/detail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default AppRoutes
