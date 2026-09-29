'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

/** Which side of the marketplace the visitor is exploring: 'owner' | 'renter'. */
const AudienceContext = createContext(null);

export function AudienceProvider({ children }) {
  const [audience, setAudience] = useState('owner');

  /** Select an audience and bring the "How it works" story into view. */
  const exploreAudience = useCallback((next) => {
    setAudience(next);
    document.getElementById('how')?.scrollIntoView({ block: 'start' });
  }, []);

  const value = useMemo(
    () => ({ audience, setAudience, exploreAudience }),
    [audience, exploreAudience],
  );

  return <AudienceContext.Provider value={value}>{children}</AudienceContext.Provider>;
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) throw new Error('useAudience must be used inside <AudienceProvider>');
  return context;
}
