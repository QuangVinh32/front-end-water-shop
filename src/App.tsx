// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'
import GuidePage from './pages/GuidePage'
import RecruitmentPage from './pages/RecruitmentPage'
import AuthPage from './auth/AuthPage'

function Layout({ children }) {
  const location = useLocation()

  // danh sách các route KHÔNG hiển thị navbar/footer
  const noLayoutRoutes = ['/auth']

  const hideLayout = noLayoutRoutes.includes(location.pathname)

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <div className="overflow-hidden">
        {!hideLayout && <Navbar />}
        <ScrollToTop />
        {children}
        {!hideLayout && <Footer />}
      </div>
    </main>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<GuidePage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
