#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    pkginfo = require('pkginfo')(module, 'version'),
    colors  = require("colors"),
    fs      = require('fs');

var legend = require('./legend'); // ./ means current directory, and don't need .js b/c all require files are js

program
  .version(module.exports.version, '-v, --version')
  .description('binod')
  .parse(process.argv);

var binod = program.args[0];

if( typeof(binod) === 'undefined') {
  console.log('BINOD:'.bold.red + ' binod binod binod!'.red);
} else {
  if (binod.search(".js") > 0) { // user entered a .js file
    console.log('BINOD: '.bold.cyan + binod.bold.white + ' => '.yellow + binod.replace('.js', '.bnd').bold.white);
    var text = fs.readFileSync(binod).toString(); // the contents of the file
    convertCode(text);
  } else { // user entered something apart from a js file
    console.log('BINOD:'.bold.red + ' binod binod!'.red);
  }
}

function convertCode (text) {
  var outputFileName = binod.replace(".js", ".bnd");
  var binodText = text;
  
  for (i = 0; i < legend.length; i++){
    var query = legend[i];
    var re    = new RegExp(query.search, 'g');

    binodText = binodText.replace(re, query.replace);
  }
  
  fs.writeFileSync(outputFileName, binodText);  
}