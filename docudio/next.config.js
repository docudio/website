const withImages = require('next-images')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = { de: 'de', 'zh-CN': 'cn', es: 'es', fr: 'fr', ja: 'jp', ko: 'kr', pt: 'pt' }
const imagestuff = withImages({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    i18n: {
      locales: ['en', 'zh-CN', 'de', 'es', 'fr', 'ja', 'ko', 'pt'],
      defaultLocale: 'en-US'

    }
  },
  i18n: {
    locales: ['en', 'zh-CN', 'de', 'es', 'fr', 'jp', 'ko', 'pt'],
    defaultLocale: 'en-US'

  }
})
module.exports = {
  i18n: {
    locales: ['en', 'zh-CN', 'de', 'es', 'fr', 'jp', 'ko', 'pt'],
    defaultLocale: 'en'

  }
}
