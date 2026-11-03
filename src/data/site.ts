export const site = {
  name: 'Mario Vicuña',
  role: 'Senior Shopify & WordPress Developer',
  title: 'Mario Vicuña — Senior Shopify & WordPress Developer',
  description:
    'Senior Shopify and WordPress developer with 9+ years shipping themes, apps, checkout extensions, Hydrogen storefronts, custom WordPress plugins and hosting.',
  email: 'mariovicunaula@gmail.com',
  location: 'Venezuela · UTC−4',
  availability: 'Open to full-time and part-time remote roles, and freelance projects',
  available: true,
  // Dual CV at the original URL; each profile page links its own version (spec 012).
  cv: '/mario-vicuna-cv.pdf',
  cvShopify: '/mario-vicuna-cv-shopify.pdf',
  cvWordpress: '/mario-vicuna-cv-wordpress.pdf',
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
  { value: '9+', label: 'years building ecommerce' },
  { value: '50+', label: 'Shopify and WordPress stores built' },
  { value: '−35%', label: 'average load time, Core Web Vitals work at Trafilea' },
  { value: '+15%', label: 'Facebook ad ROAS from mobile-first A/B tests at Trafilea' },
];

// WordPress profile (spec 012): CV figures plus facts anyone can check on the live sites.
export const wordpressProof = [
  { value: '9+', label: 'years building ecommerce and websites' },
  { value: '50+', label: 'Shopify and WordPress stores built' },
  { value: '3', label: 'live client sites I design, build and maintain' },
  { value: '2', label: 'of them on a server I set up and run on AWS' },
];

export const surfaces = {
  theme: 'Theme',
  app: 'App',
  checkout: 'Checkout',
  functions: 'Functions',
  headless: 'Headless',
  data: 'Data',
  performance: 'Performance',
  builder: 'Page builder',
  plugin: 'Custom plugin',
  seo: 'SEO',
  hosting: 'Hosting',
} as const;

export type Surface = keyof typeof surfaces;
