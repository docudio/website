const NextI18Next = require('next-i18next').default
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  otherLanguages: ['de', 'jp', 'cn', 'es', 'fr', 'kr', 'pt'],
  localeSubpaths: {
    de: 'de',
    cn: 'cn',
    es: 'es',
    fr: 'fr',
    jp: 'jp',
    kr: 'kr',
    pt: 'pt'
  },
  localePath: path.resolve('./public/static/locales')
})
