import BrandPattern from '../../components/BrandPattern/BrandPattern';
import Logo from '../../components/Logo/Logo';
import Reveal from '../../components/Reveal/Reveal';
import SmartLink from '../../components/SmartLink/SmartLink';
import StoreBadges from '../../components/StoreBadges/StoreBadges';
import { company, contact, socialLinks } from '../../config/site';
import { useLocale } from '../../i18n/LocaleContext';
import { useDownloadHref, useLegalLinks, useNavItems } from '../../i18n/useLinks';
import styles from './Footer.module.css';

function LinkColumn({ title, links }) {
  return (
    <div className={styles.column}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <SmartLink href={link.href} className={styles.link}>
              {link.label}
              {link.value && <span className={`${styles.linkValue} latin`}>{link.value}</span>}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { t, href } = useLocale();
  const navItems = useNavItems();
  const legalLinks = useLegalLinks();
  const downloadHref = useDownloadHref();
  const year = new Date().getFullYear();

  const pick = (...ids) => ids.map((id) => navItems.find((item) => item.id === id));

  const importantLinks = [
    ...pick('top', 'how', 'owners', 'renters'),
    { id: 'download', label: t.common.download, href: downloadHref },
  ];

  const supportLinks = [
    ...pick('contact', 'faq'),
    ...legalLinks,
    contact.whatsappNumber && {
      id: 'whatsapp',
      label: t.footer.whatsapp,
      value: contact.whatsappDisplay,
      href: `https://wa.me/${contact.whatsappNumber}`,
    },
    contact.email && { id: 'email', label: t.footer.email, value: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean);

  return (
    <footer className={styles.footer}>
      <BrandPattern variant="weave" className={styles.texture} />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.columns} amount={0.15}>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>{t.footer.summary}</h2>
            <p className={styles.summaryName}>{t.brand.descriptor}</p>
            <p className={styles.summaryText}>{t.brand.tagline}</p>
            {socialLinks.length > 0 && (
              <ul className={styles.social}>
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <SmartLink href={social.href} className={styles.socialLink}>
                      {social.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <LinkColumn title={t.footer.links} links={importantLinks} />
          <LinkColumn title={t.footer.support} links={supportLinks} />
        </Reveal>

        <div className={styles.middle}>
          <a href={href('home')} className={styles.logoLink} aria-label={t.brand.homeLabel}>
            <Logo className={styles.logo} decorative />
          </a>

          <div className={styles.meta}>
            {company.vatNumber && (
              <p className={styles.vat}>
                {t.footer.vat} <span className="latin">{company.vatNumber}</span>
              </p>
            )}
            <StoreBadges size="sm" />
          </div>
        </div>

        <p className={styles.copyright}>{t.footer.copyright(year)}</p>
      </div>

      <BrandPattern variant="band" className={styles.band} />
    </footer>
  );
}
