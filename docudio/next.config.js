const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = { de: 'de', 'zh-CN': 'zh-CN', es: 'es', fr: 'fr', ja: 'ja', ko: 'ko', pt: 'pt' }
const imagestuff = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    i18n: {
      locales: ['en', 'zh-CN', 'de', 'es', 'fr', 'ja', 'ko', 'pt'],
      defaultLocale: 'en-US'

    }
  },
  i18n: {
    locales: ['en', 'zh-CN', 'de', 'es', 'fr', 'ja', 'ko', 'pt'],
    defaultLocale: 'en-US'

  }
}
module.exports = {
  i18n: {
    locales: ['en', 'zh-CN', 'de', 'es', 'fr', 'ja', 'ko', 'pt'],
    defaultLocale: 'en'

  }
}
