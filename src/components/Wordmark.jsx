function Wordmark({ className = '', inverted = false }) {
  return (
    <span
      className={`font-headline-md font-bold tracking-widest uppercase ${inverted ? 'text-white' : 'text-on-surface'} ${className}`}
    >
      Velvet Wolf
    </span>
  )
}

export default Wordmark
