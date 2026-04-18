import PropTypes from 'prop-types'

const variants = {
  primary:
    'bg-white/65 text-slate-900 hover:bg-white/80 dark:bg-white/25 dark:text-white dark:hover:bg-white/35',
  secondary:
    'bg-white/45 text-slate-900 hover:bg-white/65 dark:bg-white/12 dark:text-white dark:hover:bg-white/22',
}

export function GlassButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}) {
  const style = variants[variant] ?? variants.primary
  const rel = external ? 'noopener noreferrer' : undefined
  const target = external ? '_blank' : undefined

  return (
    <a
      className={`glass-button inline-flex items-center justify-center rounded-2xl border border-white/40 px-4 py-2.5 text-sm font-medium tracking-tight ${style} ${className}`.trim()}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  )
}

GlassButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  external: PropTypes.bool,
  className: PropTypes.string,
}
