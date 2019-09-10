const cronometro = require('./cronometro.js')

setInterval(() => {
  console.log(cronometro("2019-09-10T18:10:00.000Z"))
}, 1000)
