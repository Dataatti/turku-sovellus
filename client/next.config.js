/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },

  i18n: {
    locales: ['fi', 'en', 'sv'],
    defaultLocale: 'fi',
    localeDetection: false,
  },
});
