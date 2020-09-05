#!/usr/bin/env node

/**
 * Module dependencies.
 */

String.prototype.replaceAll = function(substring, replacement) {
  var result = '';
  var lastIndex = 0;

  while(true) {
    var index = this.indexOf(substring, lastIndex);
    if(index === -1) break;
    result += this.substring(lastIndex, index) + replacement;
    lastIndex = index + substring.length;
  }

  return result + this.substring(lastIndex);
};

var program = require('commander'),
    pkginfo = require('pkginfo')(module, 'version'),
    colors  = require("colors"),
    fs      = require('fs');

var legend = require('./legend'); // ./ means current directory, and don't need .js b/c all require files are js

program
  .version(module.exports.version, '-v, --version')
  .description('Binod binod binod')
  .parse(process.argv);

var binod = program.args[0];

if( typeof(binod) === 'undefined') {
  console.log('BINOD:'.bold.red + ' binod binod binod!'.red);
} else {
  if (binod.search(".bnd") > 0) { // user entered a .hd file
    console.log('BINOD: '.bold.cyan + '\\-> '.white + binod.white);
    var text = fs.readFileSync(binod).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a hd file
    console.log('BINOD:'.bold.red + ' binod binod!'.red);
  }
}

function convertCode (text) {
  var binodText = text;
  
  for (i = (legend.length - 1); i >= 0; i--){
    var query = legend[i];

    binodText = binodText.replaceAll(query.replace, query.search);
  }

  binodText = binodText.replace(/hello,? world!?/ig, 'BINOD');

  eval(binodText);
}