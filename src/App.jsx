import { Routes, Route, BrowserRouter } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { FeaturesPage } from './pages/FeaturesPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
