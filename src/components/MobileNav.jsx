import { Link } from 'react-router-dom'
import Icon from './Icon'

const menuLinks = [
  { to: '/locations', label: 'Locations', active: true },
  { to: '/#ethos', label: 'Ethos' },
  { to: '/', label: 'Our Story' },
  { to: '/', label: 'The Brew Guide' },
  { to: '/', label: 'Journal' },
]

function MobileNav({ isOpen, onClose }) {
  return (
    <div
      className={`mobile-nav-overlay fixed inset-0 z-[60] bg-wolf-black flex flex-col justify-center items-center px-10 text-white md:hidden ${isOpen ? 'active' : ''}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="absolute top-6 right-6 p-2"
        onClick={onClose}
        aria-label="Close menu"
      >
        <Icon name="close" className="text-3xl text-white" />
      </button>

      <div className="flex flex-col gap-10 items-center text-center">
        {menuLinks.map((link, i) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={onClose}
            className={`font-label-caps ${
              i === 0
                ? 'text-gold-ink border-b-2 border-gold-ink pb-1'
                : 'text-surface-bright hover:text-gold-ink transition-colors duration-300'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-white/10 w-full flex justify-center gap-6">
        <a href="https://instagram.com/velvetwolf.cafe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Icon name="camera" className="text-white/50 hover:text-gold-ink transition-colors" />
        </a>
        <a href="https://youtube.com/@VelvetWolfCafe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Icon name="play_circle" className="text-white/50 hover:text-gold-ink transition-colors" />
        </a>
        <a href="/" aria-label="Website">
          <Icon name="public" className="text-white/50 hover:text-gold-ink transition-colors" />
        </a>
      </div>
    </div>
  )
}

export default MobileNav
