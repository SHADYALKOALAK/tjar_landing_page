import Icon from '../Icon/Icon';
import styles from './Button.module.css';

/**
 * Brand button. Renders an <a> when `href` is given, otherwise a <button>.
 * Variants: primary | soft | ghost | light.  Sizes: sm | md | lg.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  className,
  children,
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon && <Icon name={icon} size={size === 'lg' ? 22 : 18} className={styles.icon} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
