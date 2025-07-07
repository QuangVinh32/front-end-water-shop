// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <main className="relative min-h-screen overflow-x-hidden mt-18">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
        <div className="overflow-hidden">
          <Navbar />
          <ThemeToggle />
          <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/testimonials" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  )
}

export default App
