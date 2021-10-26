const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  [withBundleAnalyzer],
  {
    // env: {
    //   NEXT_PUBLIC_ASSETS_URL: process.env.NEXT_PUBLIC_ASSETS_URL,
    // },
    // assetPrefix: process.env.NEXT_PUBLIC_ASSETS_URL,
    images: {
      // path: process.env.NEXT_PUBLIC_ASSETS_URL,
      // disableStaticImages: true,
      domains: ['placehold.it', 'source.unsplash.com'],
    },
  },
]);
