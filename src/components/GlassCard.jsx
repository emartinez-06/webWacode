import PropTypes from 'prop-types'

export function GlassCard({ className = '', children }) {
  return (
    <div className={`glass-surface rounded-3xl p-6 ${className}`.trim()}>{children}</div>
  )
}

GlassCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
