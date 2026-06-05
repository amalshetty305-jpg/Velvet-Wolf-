import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'

const items = [
  { to: '/', icon: 'home', label: 'Home', filled: true },
  { to: '/locations', icon: 'explore', label: 'Locations' },
  { to: '/', icon: 'shopping_cart', label: 'Shop' },
  { to: '/#ethos', icon: 'person', label: 'Ethos' },
]

function MobileBottomNav() {
  const location = useLocation()

  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 h-16 bg-wolf-black/90 backdrop-blur-md rounded-full z-40 flex justify-around items-center px-4 shadow-2xl">
      {items.map((item) => {
        const isActive = item.to === '/'
          ? location.pathname === '/'
          : location.pathname === item.to

        return (
          <Link
            key={item.label}
            to={item.to}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-gold-ink' : 'text-surface-bright/50'}`}
            aria-label={item.label}
          >
            <Icon name={item.icon} filled={isActive && item.filled} />
          </Link>
        )
      })}
    </div>
  )
}

export default MobileBottomNav
