import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'
import Wordmark from './Wordmark'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/locations', label: 'Locations' },
  { to: '/#ethos', label: 'Ethos', hash: true },
]

function Header({ onMenuOpen }) {
  const location = useLocation()

  const handleEthosClick = (e) => {
    if (location.pathname !== '/') {
      return
    }
    e.preventDefault()
    document.getElementById('ethos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-margin-desktop h-20 bg-surface/90 backdrop-blur-sm border-b border-border-light">
      {/* Mobile: menu button */}
      <div className="flex items-center gap-4 md:hidden">
        <button
          type="button"
          className="p-2 transition-opacity hover:opacity-70"
          onClick={onMenuOpen}
          aria-label="Open menu"
        >
          <Icon name="menu" className="text-on-surface" />
        </button>
      </div>

      {/* Desktop: logo + nav */}
      <div className="hidden md:flex items-center gap-12">
        <Link to="/">
          <Wordmark />
        </Link>
        <nav className="flex gap-8">
          {navItems.map((item) =>
            item.hash ? (
              <a
                key={item.label}
                href="/#ethos"
                onClick={handleEthosClick}
                className="font-label-caps text-on-surface hover:text-gold-ink transition-colors duration-300"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `font-label-caps transition-colors duration-300 ${
                    isActive
                      ? 'text-gold-ink border-b-2 border-gold-ink pb-1'
                      : 'text-on-surface hover:text-gold-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>

      {/* Mobile: centered logo */}
      <Link to="/" className="md:hidden">
        <Wordmark />
      </Link>

      <div className="flex items-center gap-6">
        <button type="button" className="hover:opacity-70 transition-opacity active:scale-95 duration-200" aria-label="Shopping bag">
          <Icon name="shopping_bag" className="text-gold-ink md:text-gold-ink" />
        </button>
        <button
          type="button"
          className="hidden"
          aria-hidden="true"
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  )
}

export default Header
