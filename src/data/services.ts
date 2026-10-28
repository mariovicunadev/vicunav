export const services = [
  {
    id: 'theme',
    title: 'Custom theme development',
    outcome: 'A store that looks like your brand and that your team can edit without a developer.',
    includes: [
      'Online Store 2.0 sections and theme blocks, editable in the theme editor',
      'Metafields and metaobjects instead of hard-coded content',
      'Accessible (WCAG 2.2 AA), mobile-first, fast',
    ],
    from: 'Fixed scope',
  },
  {
    id: 'features',
    title: 'Store features and integrations',
    outcome: 'The feature your theme or app stack is missing, built to last.',
    includes: [
      'Subscriptions, bundles, quizzes, calculators, B2B pricing',
      'App integrations (reviews, subscriptions, upsells, analytics)',
      'Shopify Functions and checkout UI extensions (Plus)',
    ],
    from: 'Fixed scope or hourly',
  },
  {
    id: 'performance',
    title: 'Speed and Core Web Vitals audit',
    outcome: 'A faster store and a prioritized list of what is slowing it down.',
    includes: [
      'Lighthouse and field data review, app and script audit',
      'Fixes for LCP, INP and CLS on key templates',
      'Before/after report',
    ],
    from: 'Fixed price',
  },
  {
    id: 'migration',
    title: 'Migration to Shopify',
    outcome: 'Your catalog, customers and SEO moved over with no downtime.',
    includes: [
      'Magento, WooCommerce or custom platforms',
      'Scripted, repeatable data import with verification',
      'Redirects and SEO preservation',
    ],
    from: 'Fixed scope',
  },
  {
    id: 'headless',
    title: 'Headless storefronts',
    outcome: 'A Hydrogen or custom storefront when the theme model is not enough.',
    includes: [
      'Hydrogen (React Router) on Oxygen',
      'Storefront and Customer Account APIs',
      'Same catalog and data model as your theme',
    ],
    from: 'Fixed scope',
  },
  {
    id: 'retainer',
    title: 'Ongoing development',
    outcome: 'A senior Shopify developer on call for your roadmap.',
    includes: ['Monthly block of hours', 'Async updates, weekly summary', 'Code review for your team'],
    from: 'Monthly',
  },
];

export const process = [
  { step: 'Brief', artifact: 'A 20-minute call and a written scope with acceptance criteria' },
  { step: 'Spec', artifact: 'Estimate, approach and risks before any code' },
  { step: 'Build', artifact: 'Work on a preview theme or branch; nothing touches live' },
  { step: 'Review', artifact: 'Pull request with self review and checks; you see every change' },
  { step: 'Ship', artifact: 'Release, handover notes and a short video walkthrough' },
];

export const faq = [
  {
    q: 'Do you work on Shopify Plus?',
    a: 'Yes. Checkout extensibility, Shopify Functions, B2B and Markets are part of my regular work.',
  },
  {
    q: 'Can you work with my existing theme and apps?',
    a: 'Yes. I read the theme first, extend it where it is missing something and avoid rewriting what works.',
  },
  {
    q: 'What time zone are you in?',
    a: 'UTC−4. My working hours overlap with the US East Coast and most of Latin America.',
  },
  {
    q: 'Do you work in Spanish?',
    a: 'Yes. Spanish is my native language and my English is C1 (EF SET).',
  },
];
