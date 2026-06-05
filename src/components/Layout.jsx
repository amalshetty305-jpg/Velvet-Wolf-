import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import MobileNav from './MobileNav'
import MobileBottomNav from './MobileBottomNav'
import Footer from './Footer'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (location.hash === '#ethos') {
      const timer = setTimeout(() => {
        document.getElementById('ethos')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}

export default Layout
