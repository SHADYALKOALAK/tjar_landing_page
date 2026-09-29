/**
 * English interface text, page metadata (SEO) and image descriptions.
 * Keep keys in sync with src/content/ar/ui.js.
 */
export default {
  meta: {
    siteName: 'TJAR',
    ogImage: '/og-image-en.jpg',
    ogImageAlt: 'The TJAR logo with real screens from the TJAR app',
    pages: {
      home: {
        title: 'TJAR | Rent out what you own, rent what you need',
        description:
          'TJAR connects you with people who own things you might need, so you can rent them easily instead of buying. Have something you don’t use? List it for rent and earn from it.',
      },
      contact: {
        title: 'Contact us | TJAR',
        description: 'Reach TJAR on WhatsApp or by email at info@tjar.com, or send your message through the form.',
      },
      privacy: {
        title: 'Privacy Policy | TJAR',
        description: 'How the TJAR website handles the information you share through the contact form.',
      },
      terms: {
        title: 'Terms of Use | TJAR',
        description: 'Terms of use for the TJAR website.',
      },
    },
  },

  brand: {
    name: 'TJAR',
    logoTitle: 'TJAR — تي جار',
    homeLabel: 'TJAR — Home',
    descriptor: 'TJAR, peer-to-peer rentals',
    tagline: 'A platform that connects you with people who own things you might need, so you can rent them easily instead of buying them.',
  },

  common: {
    skipToContent: 'Skip to content',
    download: 'Download the app',
    close: 'Close',
    placeholderLink: 'Link will be added soon',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
  },

  nav: {
    top: 'Home',
    how: 'How it works',
    owners: 'For owners',
    renters: 'For renters',
    faq: 'FAQ',
    contact: 'Contact us',
  },

  legalLinks: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },

  header: {
    navLabel: 'Main navigation',
    menuLabel: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuDownload: 'Get the app',
    switchLanguage: 'View this page in Arabic',
  },

  stores: {
    appStore: 'Download TJAR on the App Store',
    googlePlay: 'Get TJAR on Google Play',
  },

  downloadSheet: {
    title: 'Get the TJAR app',
    text: 'Choose the store for your device and start renting, or renting out, with ease.',
    howLink: 'See how the app works',
  },

  whatsappFab: {
    label: 'Chat with us on WhatsApp',
    greeting: 'Hello TJAR, I’m reaching out through your website.',
  },

  footer: {
    summary: 'Summary',
    links: 'Useful links',
    support: 'Contact & support',
    whatsapp: 'WhatsApp:',
    email: 'Email:',
    vat: 'VAT number:',
    copyright: (year) => `© ${year} TJAR. All rights reserved.`,
  },

  legalPage: {
    updated: 'Last updated:',
    contents: 'Contents',
    helpTitle: 'Have a question about this page?',
    helpText: 'Message us through the contact form and we’ll reply on WhatsApp.',
    helpButton: 'Contact us',
  },

  contactPage: {
    title: 'Contact us',
    lead: 'Fill in the form and we’ll prepare a WhatsApp message with your details, ready to send in one tap.',
    steps: ['Fill in the form', 'We prepare your message', 'Send it on WhatsApp'],
    channelsTitle: 'Direct contact',
    channels: { whatsapp: 'WhatsApp', email: 'Email' },
    form: {
      title: 'Send us a message',
      name: 'Name',
      namePlaceholder: 'Your full name',
      phone: 'Mobile number',
      phonePlaceholder: '05XXXXXXXX',
      email: 'Email',
      emailPlaceholder: 'name@example.com',
      message: 'Message',
      messagePlaceholder: 'How can we help?',
      optional: '(optional)',
      submit: 'Send via WhatsApp',
      sent: 'Your message is ready in WhatsApp; tap “Send” there. WhatsApp didn’t open?',
      sentRetry: 'Open it here',
      unconfigured: 'Your message is ready, but TJAR’s WhatsApp number hasn’t been added yet. Sorry, please try again later.',
      privacy: 'Your details aren’t stored on this website; they’re only sent through WhatsApp when you tap “Send”.',
      privacyLink: 'Privacy Policy',
    },
    errors: {
      name: 'Please enter your name.',
      phoneRequired: 'Please enter your mobile number.',
      phoneInvalid: 'Please enter a valid mobile number, e.g. 05XXXXXXXX.',
      email: 'Please enter a valid email address.',
      message: 'Please write your message.',
    },
    preview: {
      label: 'Message preview',
      time: 'Now',
      placeholders: { name: 'Your name', phone: '05XXXXXXXX', message: 'Your message appears here…' },
    },
    message: {
      greeting: 'Hello TJAR,',
      intro: 'I’m reaching out through your website.',
      name: 'Name',
      phone: 'Mobile',
      email: 'Email',
      message: 'Message',
    },
  },

  screens: {
    splash: 'TJAR app splash screen with the TJAR logo',
    home: 'TJAR app home screen (Arabic): search, categories and products near you',
    search: 'TJAR app search screen (Arabic) with filters and most-searched items',
    product: 'TJAR product details screen (Arabic): price, insurance deposit, ratings and the Book now button',
    chats: 'TJAR “My chats” screen (Arabic) with conversations between renters and owners',
    account: 'TJAR account screen (Arabic): listings, incoming rental requests, product management and wallet',
    onboardingWelcome: 'TJAR welcome screen (Arabic): Welcome to TJAR',
    onboardingHow: 'TJAR intro screen (Arabic): using the app is simple',
  },
};
