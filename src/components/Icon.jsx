function Icon({ name, className = '', filled = false, style }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" : undefined,
        ...style,
      }}
    >
      {name}
    </span>
  )
}

export default Icon
