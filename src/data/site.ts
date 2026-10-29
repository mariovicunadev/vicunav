export const site = {
  name: 'Mario Vicuña',
  role: 'Senior Shopify Developer',
  title: 'Mario Vicuña — Senior Shopify Developer',
  description:
    'Senior Shopify developer with 9+ years shipping themes, apps, checkout extensions and Hydrogen storefronts for international brands.',
  email: 'mariovicunaula@gmail.com',
  location: 'Venezuela · UTC−4',
  availability: 'Open to full-time remote roles and select freelance projects',
  available: true,
  cv: '/mario-vicuna-cv.pdf',
  // Public on purpose: every concept store shares it so visitors can preview without asking.
  storePassword: 'mariovic',
  socials: {
    linkedin: 'https://www.linkedin.com/in/mario-vicuna/',
    github: 'https://github.com/mariovicunadev',
    upwork: 'https://www.upwork.com/freelancers/~010b99f5b5e537cd1c',
  },
};

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'About' },
];

// Every figure here comes from the CV (spec 001: no invented numbers).
export const proof = [
  { value: '9+', label: 'years in ecommerce' },
  { value: '50+', label: 'Shopify and WordPress stores shipped' },
  { value: '−35%', label: 'average load time after Core Web Vitals work' },
  { value: '+15%', label: 'ad ROAS from mobile-first A/B tests' },
];

export const surfaces = {
  theme: 'Theme',
  app: 'App',
  checkout: 'Checkout',
  functions: 'Functions',
  headless: 'Headless',
  data: 'Data',
  performance: 'Performance',
} as const;

export type Surface = keyof typeof surfaces;
