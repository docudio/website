const withImages = require('next-images')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = { de: 'de', cn: 'cn', es: 'es', fr: 'fr', jp: 'jp', kr: 'kr', pt: 'pt' }

module.exports = withImages({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
})
