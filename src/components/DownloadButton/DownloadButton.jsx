'use client';

import { useDownload } from '../../context/DownloadContext';
import { useLocale } from '../../i18n/LocaleContext';
import { useDownloadHref } from '../../i18n/useLinks';
import Button from '../Button/Button';

/**
 * The primary "تحميل التطبيق" CTA. Opens the download sheet; without
 * JavaScript it still links to the download section.
 */
export default function DownloadButton({ children, onClick, ...rest }) {
  const { openDownload } = useDownload();
  const { t } = useLocale();
  const fallbackHref = useDownloadHref();

  const handleClick = (event) => {
    event.preventDefault();
    onClick?.(event);
    openDownload(event.currentTarget);
  };

  return (
    <Button href={fallbackHref} aria-haspopup="dialog" onClick={handleClick} {...rest}>
      {children ?? t.common.download}
    </Button>
  );
}
