const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

module.exports = withPlugins([[withBundleAnalyzer], nextTranslate], {
  async redirects() {
    return [
      {
        source: '/why-water.html',
        destination: '/why-water',
        permanent: true,
      },
    ]
  },
})
