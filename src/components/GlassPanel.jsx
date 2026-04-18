import PropTypes from 'prop-types'
import { GlassCard } from './GlassCard'

export function GlassPanel({ title, subtitle, className = '', children }) {
  return (
    <GlassCard className={`glass-float ${className}`.trim()}>
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      ) : null}
      {subtitle ? (
        <p className="mt-2 text-sm text-slate-700/90 dark:text-slate-200/90">{subtitle}</p>
      ) : null}
      <div className={title || subtitle ? 'mt-5' : ''}>{children}</div>
    </GlassCard>
  )
}

GlassPanel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}
