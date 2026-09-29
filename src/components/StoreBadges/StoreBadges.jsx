import appStoreBadge from '../../assets/badges/app-store-badge.svg';
import googlePlayBadge from '../../assets/badges/google-play-badge.png';
import { storeLinks } from '../../config/site';
import { useLocale } from '../../i18n/LocaleContext';
import usePlatform from '../../hooks/usePlatform';
import SmartLink from '../SmartLink/SmartLink';
import styles from './StoreBadges.module.css';

/**
 * Official, unmodified store badges (Apple: developer.apple.com,
 * Google Play: play.google.com — transparent padding trimmed only).
 * Heights are normalised so both badges line up.
 */
const BADGES = {
  appStore: {
    src: appStoreBadge,
    width: 120,
    height: 40,
    alt: 'Download on the App Store',
  },
  googlePlay: {
    src: googlePlayBadge,
    width: 564,
    height: 168,
    alt: 'Get it on Google Play',
  },
};

const ORDER = {
  ios: ['appStore', 'googlePlay'],
  android: ['googlePlay', 'appStore'],
  other: ['appStore', 'googlePlay'],
};

/**
 * size: 'sm' | 'md' | 'lg'   layout: 'row' | 'stack'
 * adaptive: put the visitor's own platform first
 */
export default function StoreBadges({ size = 'md', layout = 'row', adaptive = false, lazy = true, className }) {
  const platform = usePlatform();
  const { t } = useLocale();
  const order = ORDER[adaptive ? platform : 'other'];
  const classes = [styles.badges, styles[size], styles[layout], className].filter(Boolean).join(' ');

  return (
    <ul className={classes}>
      {order.map((id) => {
        const badge = BADGES[id];
        return (
          <li key={id} className={styles.item}>
            <SmartLink href={storeLinks[id]} className={styles.badge} aria-label={t.stores[id]}>
              <img
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                loading={lazy ? 'lazy' : 'eager'}
                decoding="async"
                draggable="false"
                className={styles.image}
              />
            </SmartLink>
          </li>
        );
      })}
    </ul>
  );
}
