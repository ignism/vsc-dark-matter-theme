
var fs = require('fs')
var theme = require('./theme')
var outputFile = './build/theme.json'

var themeJson = JSON.stringify(theme, null, 2)
fs.writeFileSync(outputFile, themeJson);
