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
function App() {
  return (
    <Router>
      <main className="relative min-h-screen overflow-x-hidden mt-18">
        <div className="overflow-hidden">
          <Navbar />
          <ThemeToggle />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/testimonials" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetail />} /> 

          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  )
}

export default App
