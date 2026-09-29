import { AnimatePresence, m } from 'framer-motion';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import Icon from '../../components/Icon/Icon';
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';
import Logo from '../../components/Logo/Logo';
import StoreBadges from '../../components/StoreBadges/StoreBadges';
import { NAV } from '../../config/site';
import { useLocale } from '../../i18n/LocaleContext';
import { useLegalLinks, useNavItems } from '../../i18n/useLinks';
import useActiveSection from '../../hooks/useActiveSection';
import useDialog from '../../hooks/useDialog';
import useMediaQuery, { DESKTOP_QUERY } from '../../hooks/useMediaQuery';
import useScrolled from '../../hooks/useScrolled';
import { EASE_OUT } from '../../lib/motion';
import styles from './Header.module.css';

const SECTION_IDS = NAV.map((item) => item.id);

const trimSlash = (path) => path.replace(/\/+$/, '') || '/';

/** aria-current value: 'location' for the section in view, 'page' for the current page. */
function currentState(item, activeSection) {
  if (activeSection === item.id) return 'location';
  const isPageLink = !item.href.includes('#');
  if (isPageLink && trimSlash(item.href) === trimSlash(window.location.pathname)) return 'page';
  return undefined;
}

export default function Header() {
  const { t, href, forward } = useLocale();
  const navItems = useNavItems();
  const legalLinks = useLegalLinks();
  const scrolled = useScrolled(12);
  const active = useActiveSection(SECTION_IDS);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const pillId = useId();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeMenuAndRefocus = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  }, []);

  // Scroll lock, Escape and focus containment (the header CTA stays reachable).
  useDialog(menuOpen, headerRef, closeMenuAndRefocus);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  const headerClass = [styles.header, (scrolled || menuOpen) && styles.scrolled, menuOpen && styles.open]
    .filter(Boolean)
    .join(' ');

  return (
    <m.header
      ref={headerRef}
      className={headerClass}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.05 }}
    >
      <div className={styles.bar}>
        <a href={href('home')} className={styles.brand} aria-label={t.brand.homeLabel}>
          <Logo className={styles.logo} decorative />
        </a>

        <nav className={styles.nav} aria-label={t.header.navLabel}>
          <ul className={styles.navList} onMouseLeave={() => setHovered(null)}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  aria-current={currentState(item, active)}
                  onMouseEnter={() => setHovered(item.id)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                >
                  {hovered === item.id && (
                    <m.span
                      layoutId={pillId}
                      className={styles.navPill}
                      transition={{ type: 'spring', stiffness: 520, damping: 42 }}
                    />
                  )}
                  <span className={styles.navText}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch className={styles.language} />
          <DownloadButton size="sm" icon="download" className={styles.cta} onClick={closeMenu} />
          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.burger} aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            key="backdrop"
            className={styles.backdrop}
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {menuOpen && (
          <m.div
            key="menu"
            id="mobile-menu"
            className={styles.menu}
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <nav aria-label={t.header.menuLabel}>
              <ul className={styles.menuList}>
                {navItems.map((item, index) => (
                  <m.li
                    key={item.id}
                    initial={{ opacity: 0, x: -18 * forward }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.045, duration: 0.45, ease: EASE_OUT }}
                  >
                    <a
                      href={item.href}
                      className={styles.menuLink}
                      aria-current={currentState(item, active)}
                      onClick={closeMenu}
                    >
                      {item.label}
                      <Icon name="arrowForward" size={18} />
                    </a>
                  </m.li>
                ))}
              </ul>
            </nav>

            <m.div
              className={styles.menuFooter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45, ease: EASE_OUT }}
            >
              <p className={styles.menuLabel}>{t.header.menuDownload}</p>
              <StoreBadges size="md" adaptive lazy={false} />
              <ul className={styles.menuLegal}>
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className={styles.menuLegalLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
