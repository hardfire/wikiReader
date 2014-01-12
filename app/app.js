var fs = require('fs');
var wiki = ""; // this will process the wiki


var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var DS = '/';
var wikiDir = homePath + DS + 'vimwiki';

var fileName = wikiDir + DS + 'index.wiki';
fs.readFile(fileName, function(err, data){
  //console.log(wiki.parse(data));
});

var wikiReader = {};

wikiReader.init = function(){
  alert('awesome');
};

module.exports = wikiReader;
