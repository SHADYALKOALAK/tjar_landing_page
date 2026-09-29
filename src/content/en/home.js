/**
 * English landing page copy — a faithful translation of src/content/ar/home.js.
 * Every claim describes the real TJAR app screens. Keep ids, icons, screens
 * and spots identical to the Arabic file; only text is translated.
 */

export const hero = {
  eyebrow: 'Peer-to-peer rentals, in one app',
  titleLines: ['Not using it?', 'Let it earn for you.'],
  lead: 'TJAR connects you with people who need your things for a while, and lets you rent what you need instead of buying it.',
  chips: {
    owner: { icon: 'inbox', label: 'Incoming rental requests' },
    renter: { icon: 'pin', label: 'Products near you' },
  },
};

export const intro = {
  eyebrow: 'What is TJAR?',
  statement:
    'TJAR is a platform that connects you with people who own things you might need, so you can rent them easily instead of buying them.',
  pairs: [
    { id: 'owner', question: 'Have something?', answer: 'Rent it out.', icon: 'plus' },
    { id: 'renter', question: 'Need something?', answer: 'Rent it.', icon: 'search' },
  ],
  closing: 'TJAR makes renting between people easier.',
};

export const sides = {
  eyebrow: 'Two experiences',
  title: 'One app, two sides',
  lead: 'Whether you have something to rent out, or you’re looking for something you need for a while.',
  items: [
    {
      id: 'owners',
      audience: 'owner',
      label: 'For owners',
      icon: 'plus',
      title: 'Have something you don’t use?',
      text: 'List it for rent and earn from it, instead of leaving it unused.',
      points: [
        'Add your item with the (+) button and track it in “Manage my products”.',
        'Receive requests in “Incoming rental requests”.',
        'Talk to renters directly in “My chats”.',
      ],
      screen: 'account',
      cta: 'How to start as an owner',
    },
    {
      id: 'renters',
      audience: 'renter',
      label: 'For renters',
      icon: 'search',
      title: 'Need something for a short time?',
      text: 'Find it and rent it easily, instead of paying thousands to buy it.',
      points: [
        'Browse categories, or search directly with filters.',
        'Check the price, insurance deposit and ratings before you book.',
        'Book from the product page and follow it in “My bookings”.',
      ],
      screen: 'search',
      cta: 'How to start as a renter',
    },
  ],
};

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Using the app is simple',
  lead: 'Four steps, whether you’re renting out or renting.',
  toggleLabel: 'Choose how you use TJAR',
  audiences: [
    { value: 'owner', label: 'For owners' },
    { value: 'renter', label: 'For renters' },
  ],
  steps: {
    owner: [
      {
        id: 'add',
        title: 'Add your item',
        text: 'Use the (+) button in the bottom bar to add the item you want to rent out.',
        screen: 'home',
        spot: 'homeAddButton',
      },
      {
        id: 'details',
        title: 'Set the details',
        text: 'Rental price, insurance deposit and available quantity: the details renters see on your product page.',
        screen: 'product',
        spot: 'productDeposit',
      },
      {
        id: 'requests',
        title: 'Receive rental requests',
        text: 'Requests arrive in “Incoming rental requests”, and you talk to the renter in “My chats”.',
        screen: 'account',
        spot: 'accountRequests',
      },
      {
        id: 'earn',
        title: 'Earn from it',
        text: 'Instead of sitting unused, let it earn for you. Track your listings and wallet from your account.',
        screen: 'account',
        spot: 'accountStats',
      },
    ],
    renter: [
      {
        id: 'search',
        title: 'Search',
        text: 'Search by name or browse categories, and use filters to find it faster.',
        screen: 'search',
        spot: 'searchBar',
      },
      {
        id: 'choose',
        title: 'Choose',
        text: 'Open the product page to see the price, insurance deposit, ratings and owner information.',
        screen: 'product',
        spot: 'productRating',
      },
      {
        id: 'book',
        title: 'Book',
        text: 'Tap “Book now” on the product page, then follow your booking in “My bookings”.',
        screen: 'product',
        spot: 'productBook',
      },
      {
        id: 'use',
        title: 'Pick up and use',
        text: 'Agree on pickup with the owner in “My chats”, then use it for as long as you need.',
        screen: 'chats',
        spot: 'chatsFirst',
      },
    ],
  },
};

export const categories = {
  eyebrow: 'Categories',
  title: 'From camping gear to game consoles',
  lead: 'Browse categories in the app, or search for what you need directly.',
  items: [
    { id: 'electronics', label: 'Electronics', icon: 'monitor' },
    { id: 'games', label: 'Games', icon: 'gamepad' },
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'books', label: 'Books', icon: 'book' },
    { id: 'camping', label: 'Camping', icon: 'tent' },
  ],
  listLabel: 'App categories',
  searchesLabel: 'Searches inside the app',
  searches: ['Camping gear', 'Beach & desert gear', 'Electrical appliances', 'PlayStation 5', 'Camping kit for daily rent'],
};

export const showcase = {
  eyebrow: 'Clear details',
  title: 'Everything you need, in one place',
  lead: 'Ratings, owner information and the insurance deposit, all clear on the product page before you book.',
  callouts: [
    {
      id: 'status',
      title: 'Status & category',
      text: 'Know right away whether the product is “Available” and which category it belongs to.',
      spot: 'productTags',
    },
    {
      id: 'rating',
      title: 'Location & ratings',
      text: 'Where the product is and how it’s rated, before you decide.',
      spot: 'productRating',
    },
    {
      id: 'deposit',
      title: 'Deposit & quantity',
      text: 'The insurance deposit and available quantity, shown clearly.',
      spot: 'productDeposit',
    },
    {
      id: 'price',
      title: 'Rental price',
      text: 'The price is clear on the product page, no guesswork.',
      spot: 'productPrice',
    },
    {
      id: 'owner',
      title: 'Owner information',
      text: 'Tabs for rental information, owner information and ratings.',
      spot: 'productTabs',
    },
    {
      id: 'book',
      title: 'Book now',
      text: 'Book directly from the product page.',
      spot: 'productBook',
    },
  ],
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Got a question?',
  lead: 'Quick answers about using TJAR.',
  items: [
    {
      id: 'what',
      question: 'What is TJAR?',
      answer:
        'A platform that connects you with people who own things you might need, so you can rent them easily instead of buying them. And if you have something you don’t use, you can list it for rent and earn from it.',
    },
    {
      id: 'list',
      question: 'How do I list something for rent?',
      answer:
        'Add your product with the (+) button in the app, track your products in “Manage my products”, and receive requests in “Incoming rental requests”.',
    },
    {
      id: 'rent',
      question: 'How do I rent on TJAR?',
      answer:
        'Search for what you need or browse categories, open the product page, then tap “Book now”. You can follow your bookings in “My bookings”.',
    },
    {
      id: 'chat',
      question: 'Can I talk to the product owner?',
      answer: 'Yes. In “My chats” you talk directly with the product owner and agree on the pickup details.',
    },
    {
      id: 'details',
      question: 'What details do I see before booking?',
      answer:
        'The product page shows the rental price, insurance deposit, available quantity, location, ratings and owner information.',
    },
  ],
};

export const download = {
  title: 'Why buy it for thousands?',
  text: 'Get TJAR: rent what you need, or rent out what you don’t use and earn from it.',
};
