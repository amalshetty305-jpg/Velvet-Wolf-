import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import Icon from './Icon'

function Footer({ variant = 'default' }) {
  if (variant === 'mobile') {
    return (
      <footer className="w-full py-20 px-6 bg-surface border-t border-border-light pb-32 md:pb-20">
        <div className="flex flex-col gap-12">
          <div>
            <Link to="/">
              <Wordmark className="block mb-4" />
            </Link>
            <p className="font-body-md text-secondary">Architectural Coffee Roasters</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-4">
              <p className="font-label-caps text-on-surface">Locations</p>
              <Link to="/locations" className="font-body-md text-secondary hover:text-gold-ink transition-colors">London</Link>
              <Link to="/locations" className="font-body-md text-secondary hover:text-gold-ink transition-colors">Kuwait</Link>
              <Link to="/locations" className="font-body-md text-secondary hover:text-gold-ink transition-colors">Dubai</Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-label-caps text-on-surface">Legal</p>
              <a href="#" className="font-body-md text-secondary hover:text-gold-ink transition-colors">Privacy Policy</a>
              <a href="#" className="font-body-md text-secondary hover:text-gold-ink transition-colors">Terms</a>
              <a href="#" className="font-body-md text-secondary hover:text-gold-ink transition-colors">Shipping</a>
            </div>
          </div>
          <div className="pt-12 border-t border-border-light flex flex-col gap-6">
            <div className="flex gap-6">
              <a href="https://instagram.com/velvetwolf.cafe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="camera" className="text-secondary hover:text-gold-ink transition-colors" />
              </a>
              <a href="https://youtube.com/@VelvetWolfCafe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Icon name="play_circle" className="text-secondary hover:text-gold-ink transition-colors" />
              </a>
              <a href="mailto:hello@velvetwolf.cafe" aria-label="Email">
                <Icon name="alternate_email" className="text-secondary hover:text-gold-ink transition-colors" />
              </a>
            </div>
            <p className="font-label-caps text-[10px] text-secondary tracking-widest">
              © {new Date().getFullYear()} Velvet Wolf. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="w-full py-20 px-5 md:px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter border-t border-border-light">
      <div className="flex flex-col gap-6 md:gap-8">
        <Link to="/">
          <Wordmark />
        </Link>
        <p className="font-label-caps text-secondary max-w-xs leading-relaxed">
          Crafting quiet luxury through the medium of exceptional coffee and intentional spaces.
        </p>
        <p className="font-body-md text-secondary hidden md:block">
          © {new Date().getFullYear()} Velvet Wolf. All Rights Reserved.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mt-8 md:mt-0 w-full md:w-auto">
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-gold-ink">Pages</span>
          <Link to="/locations" className="font-body-md text-secondary hover:text-on-surface transition-colors">Locations</Link>
          <a href="/#ethos" className="font-body-md text-secondary hover:text-on-surface transition-colors">Ethos</a>
          <a href="#" className="font-body-md text-secondary hover:text-on-surface transition-colors">Journal</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-gold-ink">Legal</span>
          <a href="#" className="font-body-md text-secondary hover:text-on-surface transition-colors">Privacy Policy</a>
          <a href="#" className="font-body-md text-secondary hover:text-on-surface transition-colors">Terms of Service</a>
          <a href="#" className="font-body-md text-secondary hover:text-on-surface transition-colors">Contact Us</a>
        </div>
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
          <span className="font-label-caps text-gold-ink">Destinations</span>
          <Link to="/locations" className="font-body-md text-secondary hover:text-on-surface transition-colors">UK Locations</Link>
          <Link to="/locations" className="font-body-md text-secondary hover:text-on-surface transition-colors">Kuwait Locations</Link>
        </div>
      </div>

      <div className="w-full mt-8 pt-8 border-t border-border-light flex justify-between items-center md:hidden">
        <span className="font-label-caps text-[10px] text-secondary tracking-widest">
          © {new Date().getFullYear()} Velvet Wolf
        </span>
        <div className="flex gap-4">
          <a href="https://instagram.com/velvetwolf.cafe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Icon name="camera" className="text-secondary hover:text-gold-ink transition-colors" />
          </a>
          <a href="https://youtube.com/@VelvetWolfCafe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Icon name="play_circle" className="text-secondary hover:text-gold-ink transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
