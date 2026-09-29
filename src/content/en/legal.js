/**
 * English legal drafts — a faithful translation of src/content/ar/legal.js.
 * Same caveat: these describe the website only, are shown as drafts and must
 * be replaced or approved by T Jar's legal team (then set `draft: false`).
 */
const UPDATED = '29 September 2026';

export const DRAFT_NOTICE = 'Draft covering this website only; it will be updated with TJAR’s approved text.';

export const privacyPolicy = {
  id: 'privacy',
  title: 'Privacy Policy',
  lead: 'This page explains how the TJAR website handles the information you share with us.',
  updated: UPDATED,
  draft: true,
  sections: [
    {
      id: 'scope',
      title: 'Scope of this page',
      body: [
        'This page applies to the TJAR website only, which introduces the app.',
        'Using the TJAR app itself, such as your account, listings, bookings and chats, is covered by the privacy policy TJAR adopts for the app.',
      ],
    },
    {
      id: 'data',
      title: 'Information you share with us',
      body: ['When you use the form on the “Contact us” page, you enter the following yourself:'],
      list: ['Your name.', 'Your mobile number.', 'Your email address (optional).', 'Your message.'],
    },
    {
      id: 'use',
      title: 'How this information is used',
      body: [
        'The website does not store the form data or send it to any server. When you tap “Send via WhatsApp”, the website prepares a message with your details inside WhatsApp, and it is only sent when you tap send there yourself.',
        'Once sent, the message reaches TJAR through WhatsApp so we can reply to your enquiry.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      body: ['The website does not currently use tracking cookies or visitor analytics tools.'],
    },
    {
      id: 'third-parties',
      title: 'External services and links',
      body: ['The website links to external services, each with its own privacy policy:'],
      list: ['WhatsApp: when you send your contact message.', 'App Store and Google Play: when you download the app.'],
    },
    {
      id: 'changes',
      title: 'Updates to this page',
      body: ['We may update this page when the way the website works changes; the last updated date appears at the top.'],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: ['For any question about this page, reach us through the “Contact us” page or by email at info@tjar.com.'],
    },
  ],
};

export const termsOfUse = {
  id: 'terms',
  title: 'Terms of Use',
  lead: 'These terms govern your use of the TJAR website.',
  updated: UPDATED,
  draft: true,
  sections: [
    {
      id: 'about',
      title: 'About the website',
      body: [
        'The TJAR website introduces the TJAR app: it explains the idea and how to use it, and provides download links and a contact form.',
      ],
    },
    {
      id: 'app',
      title: 'Using the app',
      body: [
        'Renting out and renting, bookings, insurance deposits and dealings between owners and renters take place inside the TJAR app, and are governed by the terms and policies TJAR adopts for the app.',
        'Information on this website is for introduction only, and its screenshots are taken from the app to show how it is used.',
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Using the website',
      body: ['When you use the website and the contact form, please:'],
      list: [
        'Enter accurate details that belong to you.',
        'Use the contact form for enquiries related to TJAR.',
        'Avoid any use that disrupts or harms the website.',
      ],
    },
    {
      id: 'brand',
      title: 'Brand and content',
      body: ['The TJAR name, the TJAR™ logo, and the website’s design and content belong to TJAR and may not be used without permission.'],
    },
    {
      id: 'links',
      title: 'External links',
      body: ['The website links to external services such as the App Store, Google Play and WhatsApp, whose use is governed by their own terms.'],
    },
    {
      id: 'changes',
      title: 'Changes',
      body: ['We may update these terms from time to time; the last updated date appears at the top.'],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: ['For any question about these terms, reach us through the “Contact us” page or by email at info@tjar.com.'],
    },
  ],
};
