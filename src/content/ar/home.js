/**
 * Arabic landing page copy (source language).
 * Every claim is taken from, or directly describes, the real T Jar app screens
 * (see implementation_plan.md §0). Nothing here is invented data.
 * Keep src/content/en/home.js structurally identical.
 */

export const hero = {
  eyebrow: 'تأجير بين الأفراد، من تطبيق واحد',
  titleLines: ['عندك شيء ما تستخدمه؟', 'خلّه يجيب لك دخل.'],
  lead: 'تي جار يربطك بالأشخاص اللي يحتاجون أغراضك لفترة، ويخليك تستأجر اللي تحتاجه بسهولة بدل ما تشتريه.',
  chips: {
    owner: { icon: 'inbox', label: 'طلبات الإيجار الواردة' },
    renter: { icon: 'pin', label: 'المنتجات القريبة منك' },
  },
};

export const intro = {
  eyebrow: 'ما هو تي جار؟',
  statement:
    'تي جار منصة تربطك بالأشخاص اللي يملكون أشياء قد تحتاجها، وتخليك تستأجرها بسهولة بدل ما تشتريها.',
  pairs: [
    { id: 'owner', question: 'عندك شيء؟', answer: 'أجّره.', icon: 'plus' },
    { id: 'renter', question: 'تحتاج شيء؟', answer: 'استأجره.', icon: 'search' },
  ],
  closing: 'وتي جار يخلي التأجير بين الأشخاص أسهل.',
};

export const sides = {
  eyebrow: 'تجربتين',
  title: 'تطبيق واحد، لطرفين',
  lead: 'سواء عندك شيء تبي تأجّره، أو تدوّر على شيء تحتاجه لفترة.',
  items: [
    {
      id: 'owners',
      audience: 'owner',
      label: 'للمؤجر',
      icon: 'plus',
      title: 'لديك شيء لا تستخدمه؟',
      text: 'اعرضه للتأجير واستفد منه بدل ما يبقى بدون استخدام.',
      points: [
        'أضف منتجك من زر (+) وتابعه من «إدارة منتجاتي».',
        'استقبل طلباتك في «طلبات الإيجار الواردة».',
        'تواصل مع المستأجر مباشرة من «محادثاتي».',
      ],
      screen: 'account',
      cta: 'كيف أبدأ كمؤجر',
    },
    {
      id: 'renters',
      audience: 'renter',
      label: 'للمستأجر',
      icon: 'search',
      title: 'تحتاج شيئًا لفترة قصيرة؟',
      text: 'ابحث عنه واستأجره بسهولة، بدل ما تشتريه بآلاف.',
      points: [
        'تصفّح الأقسام أو ابحث مباشرة مع الفلترة.',
        'اطّلع على السعر ومبلغ التأمين والتقييمات قبل الحجز.',
        'احجز من صفحة المنتج وتابع طلبك من «حجوزاتي».',
      ],
      screen: 'search',
      cta: 'كيف أبدأ كمستأجر',
    },
  ],
};

export const howItWorks = {
  eyebrow: 'كيف يعمل',
  title: 'طريقة عمل التطبيق بسيطة',
  lead: 'أربع خطوات، سواء كنت تأجّر أو تستأجر.',
  toggleLabel: 'اختر طريقة الاستخدام',
  audiences: [
    { value: 'owner', label: 'للمؤجر' },
    { value: 'renter', label: 'للمستأجر' },
  ],
  steps: {
    owner: [
      {
        id: 'add',
        title: 'أضف غرضك',
        text: 'من زر (+) في الشريط السفلي، تضيف الشيء اللي تبي تأجّره.',
        screen: 'home',
        spot: 'homeAddButton',
      },
      {
        id: 'details',
        title: 'حدّد التفاصيل',
        text: 'سعر الإيجار، مبلغ التأمين، وعدد القطع المتاحة. هذي التفاصيل اللي يشوفها المستأجر في صفحة منتجك.',
        screen: 'product',
        spot: 'productDeposit',
      },
      {
        id: 'requests',
        title: 'استقبل طلبات التأجير',
        text: 'توصلك الطلبات في «طلبات الإيجار الواردة»، وتتواصل مع المستأجر من «محادثاتي».',
        screen: 'account',
        spot: 'accountRequests',
      },
      {
        id: 'earn',
        title: 'استفد منه',
        text: 'بدل ما يبقى بدون استخدام، خلّه يجيب لك دخل. وتابع إعلاناتك ومحفظتك من حسابك.',
        screen: 'account',
        spot: 'accountStats',
      },
    ],
    renter: [
      {
        id: 'search',
        title: 'ابحث',
        text: 'ابحث باسم الشيء أو تصفّح الأقسام، واستخدم الفلترة توصل لطلبك أسرع.',
        screen: 'search',
        spot: 'searchBar',
      },
      {
        id: 'choose',
        title: 'اختر',
        text: 'افتح صفحة المنتج وشوف السعر، مبلغ التأمين، التقييمات، ومعلومات المالك.',
        screen: 'product',
        spot: 'productRating',
      },
      {
        id: 'book',
        title: 'احجز',
        text: 'اضغط «إحجز الآن» من صفحة المنتج، وتابع حجزك من «حجوزاتي».',
        screen: 'product',
        spot: 'productBook',
      },
      {
        id: 'use',
        title: 'استلم واستخدم',
        text: 'تواصل مع المالك من «محادثاتي» واتفقوا على الاستلام، واستخدمه للفترة اللي تحتاجها.',
        screen: 'chats',
        spot: 'chatsFirst',
      },
    ],
  },
};

export const categories = {
  eyebrow: 'الأقسام',
  title: 'من عدّة التخييم، إلى جهاز الألعاب',
  lead: 'تصفّح الأقسام في التطبيق، أو ابحث عن اللي تحتاجه مباشرة.',
  items: [
    { id: 'electronics', label: 'إلكترونيات', icon: 'monitor' },
    { id: 'games', label: 'ألعاب', icon: 'gamepad' },
    { id: 'home', label: 'المنزل', icon: 'home' },
    { id: 'books', label: 'كتب', icon: 'book' },
    { id: 'camping', label: 'تخييم', icon: 'tent' },
  ],
  listLabel: 'أقسام التطبيق',
  searchesLabel: 'من عمليات البحث داخل التطبيق',
  searches: ['أغراض تخييم', 'أغراض البحر والبر', 'أجهزة كهربائية', 'جهاز بلاي ستيشن 5', 'عزبة للإيجار اليومي'],
};

export const showcase = {
  eyebrow: 'تفاصيل واضحة',
  title: 'كل ما تحتاجه، في مكان واحد',
  lead: 'التقييمات، ومعلومات المالك، ومبلغ التأمين… كلها واضحة في صفحة المنتج قبل ما تحجز.',
  callouts: [
    {
      id: 'status',
      title: 'الحالة والقسم',
      text: 'تعرف من البداية إذا كان المنتج «متاح»، ولأي قسم يتبع.',
      spot: 'productTags',
    },
    {
      id: 'rating',
      title: 'الموقع والتقييمات',
      text: 'مكان المنتج وتقييماته، قبل ما تتخذ قرارك.',
      spot: 'productRating',
    },
    {
      id: 'deposit',
      title: 'التأمين والكمية',
      text: 'مبلغ التأمين وعدد القطع المتاحة، معروضة بوضوح.',
      spot: 'productDeposit',
    },
    {
      id: 'price',
      title: 'سعر الإيجار',
      text: 'السعر واضح في صفحة المنتج، بدون تعقيد.',
      spot: 'productPrice',
    },
    {
      id: 'owner',
      title: 'معلومات المالك',
      text: 'تبويبات لمعلومات الإيجار، ومعلومات المالك، والتقييمات.',
      spot: 'productTabs',
    },
    {
      id: 'book',
      title: 'إحجز الآن',
      text: 'تحجز مباشرة من صفحة المنتج.',
      spot: 'productBook',
    },
  ],
};

export const faq = {
  eyebrow: 'الأسئلة الشائعة',
  title: 'عندك سؤال؟',
  lead: 'أجوبة سريعة عن طريقة استخدام تي جار.',
  items: [
    {
      id: 'what',
      question: 'وش هو تي جار؟',
      answer:
        'منصة تربطك بالأشخاص اللي يملكون أشياء قد تحتاجها، وتخليك تستأجرها بسهولة بدل ما تشتريها. وإذا عندك شيء ما تستخدمه، تقدر تعرضه للتأجير وتستفيد منه.',
    },
    {
      id: 'list',
      question: 'كيف أعرض شيء للتأجير؟',
      answer:
        'من زر (+) في التطبيق تضيف منتجك، وتتابع منتجاتك من «إدارة منتجاتي»، وتوصلك الطلبات في «طلبات الإيجار الواردة».',
    },
    {
      id: 'rent',
      question: 'كيف أستأجر من تي جار؟',
      answer:
        'ابحث عن اللي تحتاجه أو تصفّح الأقسام، افتح صفحة المنتج، ثم اضغط «إحجز الآن». وتقدر تتابع حجوزاتك من «حجوزاتي».',
    },
    {
      id: 'chat',
      question: 'أقدر أتواصل مع صاحب المنتج؟',
      answer: 'نعم، من «محادثاتي» تتواصل مباشرة مع صاحب المنتج وتتفقون على تفاصيل الاستلام.',
    },
    {
      id: 'details',
      question: 'وش التفاصيل اللي تظهر لي قبل ما أحجز؟',
      answer:
        'صفحة المنتج تعرض سعر الإيجار، ومبلغ التأمين، وعدد القطع المتاحة، والموقع، والتقييمات، ومعلومات المالك.',
    },
  ],
};

export const download = {
  title: 'ليه تشتريها بآلاف؟',
  text: 'حمّل تي جار، واستأجر اللي تحتاجه، أو أجّر اللي ما تستخدمه واستفد منه.',
};
