let TJO = require('translate-json-object')()
const path = require('path')
const fs = require('fs')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const markdownTranslate = require('markdown-translator')

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

// Choose the service to use google/yandex,
// if you provide both yandex will be used as the default
TJO.init({
  googleApiKey: 'AIzaSyB-4i8MlMLdgGUISH3YY5P-lBZx1J12Zpo'
})
const postsDirectory = path.join(process.cwd(), '_posts')
const waitFor = (ms) => new Promise(r => setTimeout(r, ms))

// An example scenario (json) object
let allposts = fs.readdirSync(postsDirectory)
let locales = ['zh-CN', 'de', 'es', 'fr', 'ja', 'ko', 'pt']
asyncForEach(allposts, async (post) => {
  await waitFor(50)
  asyncForEach(locales, async (locale) => {
    await waitFor(50)
    const fileContents = fs.readFileSync(`./_posts/${post}/en/${post}.md`, 'utf8')
    const { data, content } = matter(fileContents)
    let output = await TJO.translate(data, locale).then(function (datareturn) {
      console.log('WOAH')
      //  console.log(datareturn)
      datareturn.date = datareturn.date.replace(/[\ue011f]/g, '') // variant selector 48 unicode.
      datareturn.date = datareturn.date.replace(/\s/g, '')
      //  datareturn.date = datareturn.date.replace(/[\ue011f]/g, "")
      datareturn.date = datareturn.date.replace(' ', '')
      datareturn.date = datareturn.date.replace(/[\uff1a]/g, ':') // freaking unicode errors, fullwidth colon
      console.log(datareturn.date)
      console.log(locale)
      //     console.log(yaml.safeDump(datareturn,'utf8'))
      fs.writeFileSync(`./_posts/${post}/${locale}/${post}.md`, '---\n', function (err, result) {
        console.log('WOAH444567')
        if (err) console.log('error', err)
      })

      fs.writeFileSync('temp_markdown.md', content, function (err, result) {
        console.log('WOAH11111')
        if (err) console.log('error', err)
      })
      datareturn.date.replace(/\s+/g, '')
      fs.appendFileSync(`./_posts/${post}/${locale}/${post}.md`, yaml.safeDump(datareturn, 'utf8'), function (err, result) {
        console.log('WOAH44444')
        if (err) console.log('error', err)
      })
      fs.appendFileSync(`./_posts/${post}/${locale}/${post}.md`, '\n---\n', function (err, result) {
        console.log('WOAH55555')
        if (err) console.log('error', err)
      })
      const markdownTranslate = require('markdown-translator')
      markdownTranslate({
        src: './temp_markdown.md',
        from: 'en',
        to: locale,
        subscriptionKey: '3999e2ca6ae74f59b9682b5cba71c79e',
        region: 'eastus'
      }).then(res => {
        fs.appendFileSync(`./_posts/${post}/${locale}/${post}.md`, res, function (err, result) {
          console.log('WOAH22222')
          if (err) console.log('error', err)
        })
        //   fs.unlinkSync('./temp_markdown.md')
      })
    }).catch(function (err) {
      console.log('WOAH34543')
      console.log('error ', err)
    })

    console.log(post)
  })
})