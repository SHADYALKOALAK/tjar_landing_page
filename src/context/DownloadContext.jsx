'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import DownloadSheet from '../components/DownloadSheet/DownloadSheet';

/** Opens the app-download sheet from any "تحميل التطبيق" button. */
const DownloadContext = createContext(null);

export function DownloadProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef(null);

  const openDownload = useCallback((opener) => {
    openerRef.current = opener ?? document.activeElement;
    setOpen(true);
  }, []);

  const closeDownload = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus?.({ preventScroll: true });
  }, []);

  const value = useMemo(() => ({ openDownload, closeDownload }), [openDownload, closeDownload]);

  return (
    <DownloadContext.Provider value={value}>
      {children}
      <DownloadSheet open={open} onClose={closeDownload} />
    </DownloadContext.Provider>
  );
}

export function useDownload() {
  const context = useContext(DownloadContext);
  if (!context) throw new Error('useDownload must be used inside <DownloadProvider>');
  return context;
}
