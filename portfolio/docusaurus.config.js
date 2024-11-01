// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hasitha',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to:'/docs/intro',label:'Academics',position:'left'
            // type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            // position: 'left',
            // label: 'Academics',
          },
          {to: '/#projects', label: 'Projects', position: 'left'},
          {
            to: '/docs/intro', label: 'Blog', position: 'left'
          },
          {
            href: 'https://github.com/hasitha2442',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'About me',
                to: '/docs/intro',
              },
              {
                label: 'Resume',
                href:'https://drive.google.com/file/d/1UdFT9aJYmdMnnpOiHAgoRfk56lxk2K4B/view?usp=sharing',
              },
              {
                label: 'Projects',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Reach me@',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/madhu-hasitha-manne-b89227251/',
              },
              {
                label: 'Mail',
                href: 'mailto:madhuhasithamanne@gmail.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Leetcode',
                href: 'https://leetcode.com/u/madhuhasithamanne/',
              },
              {
                label: 'Geeks for Geeks',
                href: 'https://www.geeksforgeeks.org/user/madhuhasiwmqb/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hasitha2442',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Madhu Hasitha, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
