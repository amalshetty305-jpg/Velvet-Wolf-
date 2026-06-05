import Icon from '../components/Icon'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { images, expansionLocations } from '../data/content'

function LocationCard({ country, city, hours, description, address, phone, image, reverse = false }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal md:col-span-7 group relative overflow-hidden bg-white border border-border-light location-card-hover transition-all duration-500 ${reverse ? 'md:order-2' : ''}`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={image}
          alt={`${city} cafe interior`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />
      </div>
      <div className="p-8 md:p-12">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
          <div>
            <span className="font-label-caps text-gold-ink block mb-2">{country}</span>
            <h2 className="font-headline-lg text-on-surface">{city}</h2>
          </div>
          <div className="sm:text-right">
            <span className="font-label-caps text-secondary block">Opening Hours</span>
            <p className="font-body-md text-on-surface">{hours}</p>
          </div>
        </div>
        <p className="font-body-md text-secondary mb-8 max-w-md">{description}</p>
        <div className="flex flex-col gap-4 border-t border-border-light pt-8">
          <div className="flex items-center gap-3">
            <Icon name="location_on" className="text-gold-ink text-[20px]" />
            <address className="font-body-md text-on-surface not-italic">{address}</address>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="call" className="text-gold-ink text-[20px]" />
            <span className="font-body-md text-on-surface">{phone}</span>
          </div>
        </div>
        <div className="mt-10 h-px bg-border-light w-12 location-line group-hover:bg-gold-ink" />
      </div>
    </div>
  )
}

function MapPanel({ image, icon, coordinates }) {
  return (
    <div className="hidden md:block md:col-span-5 bg-surface-container-low border border-border-light relative overflow-hidden min-h-[400px]">
      <div className="absolute inset-0 opacity-40 grayscale pointer-events-none">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="text-center">
          <Icon name={icon} className="text-gold-ink text-5xl mb-4" />
          <p className="font-label-caps text-on-surface tracking-[0.3em]">{coordinates}</p>
        </div>
      </div>
    </div>
  )
}

function LocationsPage() {
  const heroRef = useScrollReveal()
  const expansionRef = useScrollReveal()
  const journalRef = useScrollReveal()

  return (
    <div className="pb-20 md:pb-32">
      {/* Hero */}
      <section ref={heroRef} className="reveal max-w-max-width mx-auto px-6 md:px-margin-desktop mb-16 md:mb-32 pt-12">
        <div className="max-w-2xl">
          <span className="font-label-caps text-gold-ink mb-4 block">The Global Reach</span>
          <h1 className="font-display-lg text-on-surface mb-8">Our Presence</h1>
          <p className="font-body-lg text-secondary leading-relaxed">
            Designed with architectural precision, every Velvet Wolf location is an intentional sanctuary. We bridge the
            distance between London&apos;s urban edge and the serene horizons of Kuwait City.
          </p>
        </div>
      </section>

      {/* Bento grid */}
      <section className="max-w-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <LocationCard
          country="United Kingdom"
          city="London, Mayfair"
          hours="07:00 — 20:00"
          description="Situated in the heart of Mayfair, our London flagship serves as a minimalist retreat from the city's pace. Defined by cool tones and brushed brass."
          address="12 Bruton St, London W1J 6QA"
          phone="+44 20 7123 4567"
          image={images.londonInterior}
        />
        <MapPanel
          image={images.londonMap}
          icon="explore"
          coordinates="Coordinates: 51.5074° N, 0.1278° W"
        />
        <MapPanel
          image={images.kuwaitMap}
          icon="hourglass_empty"
          coordinates="Coordinates: 29.3759° N, 47.9774° E"
        />
        <LocationCard
          country="Kuwait"
          city="Kuwait City, Al Hamra"
          hours="06:00 — 23:00"
          description="Reflecting the luminosity of the Arabian Gulf, our Kuwait City branch utilizes white stone and high-clarity glass to create a space of absolute transparency and peace."
          address="Al Shuhada St, Kuwait City"
          phone="+965 2221 1234"
          image={images.kuwaitInterior}
          reverse
        />
      </section>

      {/* Global expansion */}
      <section ref={expansionRef} className="reveal max-w-max-width mx-auto px-6 md:px-margin-desktop mt-16 md:mt-32">
        <div className="border-t border-border-light pt-12 md:pt-20">
          <h3 className="font-label-caps text-on-surface mb-12 tracking-[0.2em]">Global Expansion</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
            {expansionLocations.map((loc, i) => (
              <div
                key={loc.city}
                className={`py-8 ${i < expansionLocations.length - 1 ? 'md:border-r md:border-border-light md:pr-8' : ''}`}
              >
                <span className="font-label-caps text-[10px] text-secondary block mb-2">{loc.region}</span>
                <h4 className="font-headline-md text-on-surface mb-1">{loc.city}</h4>
                <p className="font-label-caps text-[10px] text-gold-ink">{loc.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section ref={journalRef} className="reveal max-w-max-width mx-auto px-6 md:px-margin-desktop mt-20 md:mt-40">
        <div className="bg-wolf-black text-white p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-md">
            <h3 className="font-headline-lg text-white mb-4">The Journal</h3>
            <p className="font-body-md text-secondary-fixed-dim">
              Receive curated updates on new locations, seasonal beans, and architectural highlights.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row w-full md:w-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-transparent border-b border-secondary-fixed-dim focus:border-gold-ink outline-none px-0 py-2 w-full md:w-80 font-label-caps uppercase placeholder:text-secondary"
              placeholder="Email Address"
              type="email"
            />
            <button
              type="submit"
              className="bg-gold-ink text-white px-8 py-4 font-label-caps hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LocationsPage
