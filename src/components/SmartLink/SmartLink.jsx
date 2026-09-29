'use client';

import { useLocale } from '../../i18n/LocaleContext';

/**
 * A link that degrades to a visible placeholder when no URL is configured,
 * so missing brand links are never invented and never lead to a dead "#".
 */
export default function SmartLink({ href, className, children, external = true, ...rest }) {
  const { t } = useLocale();

  if (!href) {
    return (
      <span
        className={className}
        aria-disabled="true"
        title={t.common.placeholderLink}
        data-placeholder=""
        {...rest}
      >
        {children}
      </span>
    );
  }

  const externalProps = external && /^https?:/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={className} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
