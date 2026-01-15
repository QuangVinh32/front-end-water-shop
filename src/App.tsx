// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, LayoutRouteProps } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'
import GuidePage from './pages/GuidePage'
import RecruitmentPage from './pages/RecruitmentPage'
import AuthPage from './auth/AuthPage'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import AdminDashboard from './admin/AdminDashboard'
// App.jsx
function Layout({ children }:LayoutRouteProps) {
  const location = useLocation()
  // danh sách các route KHÔNG hiển thị navbar/footer
  const noLayoutRoutes = ['/auth', '/admin']  

  const hideLayout = noLayoutRoutes.some(route =>
    location.pathname.startsWith(route) // nếu path bắt đầu bằng route
  )

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
        <ToastContainer position="top-right" autoClose={1000} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<GuidePage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* Admin */}
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}
export default App

