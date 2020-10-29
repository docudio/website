var TJO = require('translate-json-object')()

// Choose the service to use google/yandex,
// if you provide both yandex will be used as the default
TJO.init({
  googleApiKey: 'AIzaSyAq-1hC9nQq-WE7w5IxIezZVYcUpnAPHAM'
})

// An example scenario (json) object
var example = require('./public/static/locales/en/common.json')

// Translate method takes (source object, and language code)
const fs = require('fs')

var files = fs.readdirSync('./public/static/locales/en/')
files.forEach(function (element) {
  console.log(element)
  var example = require(`./public/static/locales/en/${element}`)
  var output = TJO.translate(example, 'es')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/es/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
  var output = TJO.translate(example, 'de')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/de/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
  var output = TJO.translate(example, 'pt')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/pt/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
  var output = TJO.translate(example, 'zh-CN')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/cn/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
  var output = TJO.translate(example, 'ko')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/kr/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
  var output = TJO.translate(example, 'ja')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/jp/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
  var output = TJO.translate(example, 'fr')
    .then(function (data) {
      fs.writeFile(`./public/static/locales/fr/${element}`, JSON.stringify(data, null, 4), function (err, result) {
        if (err) console.log('error', err)
      })
    }).catch(function (err) {
      console.log('error ', err)
    })
})
