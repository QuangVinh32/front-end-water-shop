// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background'
import GuidePage from './pages/GuidePage'
import RecruitmentPage from './pages/RecruitmentPage'
function App() {
  return (
    <Router>
      <main className="relative min-h-screen overflow-x-hidden mt-16">
        <div className="overflow-hidden">
          <Navbar />
          <ThemeToggle />
          {/* <Background /> */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<GuidePage />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  )
}

export default App
