import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Wordmark from '../components/Wordmark'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { images, products, curatedSpaces, socialLinks } from '../data/content'

function HomePage() {
  const craftRef = useScrollReveal()
  const productRef = useScrollReveal()
  const locationsRef = useScrollReveal()
  const ethosRef = useScrollReveal()
  const newsletterRef = useScrollReveal()
  const mobileBentoRef = useScrollReveal()
  const philosophyRef = useScrollReveal()

  return (
    <>
      {/* Hero — desktop full-screen */}
      <header className="relative hidden md:block h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={images.heroDesktop}
            alt="Cinematic coffee pour"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-wolf-black/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-margin-mobile">
          <div className="mb-8 animate-fade-in-up">
            <Wordmark inverted className="text-2xl" />
          </div>
          <h1 className="font-display-lg text-surface-bright mb-6 max-w-4xl animate-fade-in-up delay-100">
            The Architecture of Coffee
          </h1>
          <p className="font-body-lg text-surface-bright/90 mb-10 tracking-wide max-w-xl animate-fade-in-up delay-100">
            Experience quiet luxury through curated roasts and minimalist craft.
          </p>
          <div className="flex gap-4 animate-fade-in-up delay-200">
            <Link
              to="/locations"
              className="bg-gold-ink text-on-primary font-label-caps px-10 py-5 transition-transform hover:scale-[1.02] active:scale-95"
            >
              View Locations
            </Link>
            <a
              href="#ethos"
              className="border border-surface-bright text-surface-bright font-label-caps px-10 py-5 backdrop-blur-sm transition-all hover:bg-surface-bright/10 active:scale-95"
            >
              Our Ethos
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-surface-bright/50">
          <span className="font-label-caps text-[10px] tracking-[0.4em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-surface-bright/50 to-transparent" />
        </div>
      </header>

      {/* Hero — mobile */}
      <section className="relative md:hidden h-[85vh] w-full overflow-hidden flex flex-col justify-end p-6 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={images.heroMobile} alt="Velvet Wolf cafe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 space-y-6">
          <span className="font-label-caps text-gold-ink tracking-[0.3em]">Crafted in Silence</span>
          <h1 className="font-headline-lg-mobile text-white max-w-[280px]">
            Architectural Precision In Every Pour.
          </h1>
          <div className="pt-4">
            <a
              href="#ethos"
              className="bg-gold-ink text-white font-label-caps px-8 py-5 tracking-widest active:scale-95 transition-transform duration-200 inline-block"
            >
              Explore the Ethos
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy intro — mobile-first, visible on all */}
      <section ref={philosophyRef} className="reveal py-16 md:py-24 px-6 bg-surface">
        <div className="max-w-max-width mx-auto">
          <p className="font-label-caps text-gold-ink mb-8">The Philosophy</p>
          <h2 className="font-headline-lg md:font-headline-lg text-on-surface mb-8 leading-snug max-w-2xl">
            We believe coffee is an intentional act of design. A balance of tension, warmth, and the geometry of taste.
          </h2>
          <p className="font-body-md text-secondary leading-relaxed max-w-2xl">
            Velvet Wolf isn&apos;t just a cafe. It is an exploration of quiet luxury. We curate spaces that breathe and
            flavors that resonate long after the final sip. Each location is a study in Modernist aesthetics and sensory
            purity.
          </p>
        </div>
      </section>

      {/* Craft bento — desktop */}
      <section ref={craftRef} className="reveal hidden md:block py-40 px-margin-desktop max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-label-caps text-gold-ink block mb-6">Established 2024</span>
            <h2 className="font-headline-lg text-on-surface leading-tight">
              A meticulous pursuit of sensory perfection. Every bean is an intentional choice.
            </h2>
          </div>
          <div className="w-24 h-px bg-gold-ink mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 border border-border-light p-12 flex flex-col justify-between group hover:bg-soft-gray transition-colors duration-500 min-h-[500px]">
            <div className="flex justify-between items-start">
              <span className="font-label-caps text-[10px] text-secondary">01 / Bean Selection</span>
              <Icon name="north_east" className="text-gold-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h3 className="font-headline-md mb-4 uppercase tracking-widest">Single-Origin Narrative</h3>
              <p className="font-body-md text-secondary max-w-md">
                We partner exclusively with micro-lots that demonstrate exceptional soil health and ethical labor
                practices. Each cup tells the story of its landscape.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-gutter">
            <div className="border border-border-light p-10 flex flex-col gap-6 hover:bg-soft-gray transition-colors duration-500">
              <span className="font-label-caps text-[10px] text-secondary text-right">02 / Roasting</span>
              <h3 className="font-headline-md uppercase tracking-widest text-gold-ink">Precision Profile</h3>
              <p className="font-body-md text-secondary">
                Light to medium roasts that preserve the volatile aromatics and natural sweetness inherent to the
                wolf-picked harvest.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-video">
              <img
                src={images.cafeInterior}
                alt="Minimalist cafe interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="md:col-span-12 border border-border-light p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 mt-gutter">
            <div className="md:w-1/2">
              <img
                src={images.handPour}
                alt="Hand-poured coffee preparation"
                className="w-full h-[400px] object-cover grayscale"
              />
            </div>
            <div className="md:w-1/2">
              <span className="font-label-caps text-gold-ink block mb-6">03 / The Atmosphere</span>
              <h3 className="font-headline-lg mb-8">Quiet Luxury in Every Square Foot.</h3>
              <p className="font-body-lg text-secondary mb-10 italic">
                &ldquo;We didn&apos;t just build a cafe; we designed a sanctuary for the intentional soul. Silence is the
                ultimate luxury, paired only with the perfect pour.&rdquo;
              </p>
              <a
                href="#ethos"
                className="border-b border-on-surface pb-1 font-label-caps hover:text-gold-ink hover:border-gold-ink transition-all"
              >
                Discover the Ethos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product bento — mobile */}
      <section ref={mobileBentoRef} className="reveal md:hidden px-6 py-12 flex flex-col gap-6">
        <div className="w-full aspect-[4/5] bg-surface-container overflow-hidden border border-border-light relative group">
          <img
            src={images.signatureMug}
            alt="Velvet Wolf signature mug with gold logo"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-8 w-full bg-white/10 backdrop-blur-md">
            <h3 className="font-headline-md text-white">The Signature Blend</h3>
            <p className="font-label-caps text-white/80 mt-2">Notes of Dark Cacao &amp; Smoke</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="p-10 bg-wolf-black text-white border border-wolf-black flex flex-col justify-between aspect-square">
            <Icon name="workspace_premium" className="text-gold-ink text-4xl" filled />
            <div>
              <h3 className="font-headline-md mb-2">Award Winning Roast</h3>
              <p className="font-body-md text-white/60">
                Voted best minimalist brew experience for three consecutive years.
              </p>
            </div>
            <a href="#ethos" className="font-label-caps text-gold-ink inline-flex items-center gap-2">
              Read More <Icon name="arrow_forward" />
            </a>
          </div>
          <div className="w-full aspect-[4/3] border border-border-light overflow-hidden">
            <img src={images.mobileCafe} alt="Minimalist cafe interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Products — desktop dark section */}
      <section ref={productRef} className="reveal hidden md:block bg-wolf-black py-40">
        <div className="px-margin-desktop max-w-max-width mx-auto text-center mb-24">
          <span className="font-label-caps text-gold-ink block mb-6">The Velvet Reserve</span>
          <h2 className="font-headline-lg text-surface-bright">Exceptional Tools for Exceptional Brews.</h2>
        </div>
        <div className="px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-variant overflow-hidden mb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="font-headline-md text-surface-bright mb-2 uppercase tracking-tighter">{product.name}</h4>
              <span className="font-label-caps text-gold-ink">{product.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Curated spaces — mobile list */}
      <section className="md:hidden py-24 px-6 border-t border-border-light">
        <h2 className="font-label-caps text-on-surface mb-12 tracking-widest">Curated Spaces</h2>
        <div className="divide-y divide-border-light">
          {curatedSpaces.map((space) => (
            <Link
              key={space.city}
              to="/locations"
              className="py-8 flex justify-between items-center group"
            >
              <div>
                <p className="font-headline-md">{space.city}</p>
                <p className="font-label-caps text-secondary mt-1">{space.detail}</p>
              </div>
              <Icon name="north_east" className="text-gold-ink opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      {/* Locations teaser — desktop */}
      <section ref={locationsRef} className="reveal hidden md:block py-40">
        <div className="px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row gap-gutter">
          <div className="md:w-1/3 flex flex-col justify-center border-l-4 border-gold-ink pl-12 py-8">
            <h2 className="font-headline-lg mb-8">Global Footprint. Minimal Impact.</h2>
            <p className="font-body-md text-secondary mb-12">
              From the concrete landscapes of London to the serene dunes of Kuwait, find your local sanctuary.
            </p>
            <div className="space-y-6">
              {['London, UK', 'Kuwait City', 'Manchester, UK'].map((loc) => (
                <Link
                  key={loc}
                  to="/locations"
                  className="flex items-center justify-between border-b border-border-light pb-4 group cursor-pointer"
                >
                  <span className="font-headline-md uppercase tracking-widest group-hover:text-gold-ink transition-colors">
                    {loc}
                  </span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-2/3 h-[600px]">
            <img src={images.locationExterior} alt="Modern cafe exterior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Ethos */}
      <section
        id="ethos"
        ref={ethosRef}
        className="reveal relative bg-white py-24 md:py-32 px-6 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-ink/5 rounded-full -mr-32 -mt-32" />
        <div className="max-w-max-width mx-auto text-center space-y-10">
          <p className="font-label-caps text-gold-ink">Beyond the Bean</p>
          <h2 className="font-headline-lg md:font-headline-lg-mobile italic max-w-2xl mx-auto">
            &ldquo;Simplicity is the ultimate sophistication.&rdquo;
          </h2>
          <p className="font-body-md text-secondary max-w-sm mx-auto">
            Every element of Velvet Wolf is intentional. From the weight of our ceramic to the hertz of our background
            ambiance.
          </p>
          <div className="pt-10">
            <a
              href="#ethos"
              className="border border-gold-ink text-gold-ink font-label-caps px-10 py-4 hover:bg-gold-ink hover:text-white transition-colors duration-300 inline-block"
            >
              The Velvet Ethos
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter / Socials */}
      <section ref={newsletterRef} className="reveal border-t border-border-light py-16 md:py-24 bg-soft-gray">
        <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="font-headline-md mb-6 uppercase tracking-[0.3em]">Join the Wolfpack</h3>
            <p className="font-body-md text-secondary mb-10 max-w-md">
              Weekly dispatches on new origin stories, brewing science, and exclusive reserve drops.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-grow bg-transparent border-b border-on-surface py-4 px-2 font-label-caps focus:outline-none focus:border-gold-ink transition-colors uppercase"
                placeholder="Your Email"
                type="email"
              />
              <button
                type="submit"
                className="bg-on-surface text-surface py-4 px-10 font-label-caps hover:bg-gold-ink transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="font-label-caps mb-8 text-gold-ink">Follow the Craft</span>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline-md hover:text-gold-ink transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
