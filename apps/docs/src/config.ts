export const SITE = {
  title: 'Selleo Design System',
  description: 'Docs for Selleo Design System',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/Selleo/design-system/blob/main/apps/docs/src/assets/logo.png?raw=true',
    alt: 'selleo logo on a dark background',
  },
  twitter: 'selleo',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Selleo/design-system/tree/main/apps/docs`;

export const COMMUNITY_INVITE_URL = `https://selleo.com/contact`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
  en: {
    Brand: [{ text: 'Typography', link: 'brand-typography' }],
    Components: [
      { text: 'Navigation', link: 'navigation' },
      { text: 'Avatar', link: 'avatars' },
      { text: 'Button', link: 'button' },
      { text: 'Checkbox', link: 'checkbox' },
      { text: 'Dashboard', link: 'dashboard' },
      { text: 'Input', link: 'input' },
      { text: 'Select', link: 'select' },
      { text: 'Sidebar', link: 'sidebar' },
      { text: 'Tab', link: 'tabs' },
      { text: 'Testimonial', link: 'testimonials' },
      { text: 'Typography', link: 'typography' },
    ],
    Views: [
      { text: 'Authentication', link: 'authentication' },
      { text: 'Dashboard', link: 'dashboard' },
    ],
  },
};
