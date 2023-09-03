// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '☀️',
  tagline: 'wisdom hub',
  favicon: 'img/gt.png',

  url: 'https://mlibre.github.io/',
  baseUrl: '/Wisdom-Hub/',

  organizationName: 'mlibre',
  projectName: 'Wisdom-Hub',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/rainbow-social-card.jpg',
      navbar: {
        title: 'Home',
        hideOnScroll: true,
        logo: {
          alt: 'good things',
          src: 'img/gt.png',
        },
        items: [
          {
            href: 'https://github.com/mlibre/Wisdom-Hub/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/mlibreT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mlibre/Wisdom-Hub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mlibre Wisdom Hub`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        "additionalLanguages": [
          "rust", "python", "ruby", "go", "toml"
        ]
      },
    }),
};

module.exports = config;
