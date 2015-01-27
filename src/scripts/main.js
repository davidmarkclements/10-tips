// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  // cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  markdown = require('bespoke-meta-markdown'),
  voltaire = require('bespoke-theme-voltaire');

// Bespoke.js
bespoke.from('article', [
  voltaire(),
  // cube(),
  keys(),
  touch(),
  markdown({
    custom: function (slide, o) { 
      console.log(slide, o)
      Object.keys(o).forEach(function(elix) {
        Object.keys(o[elix]).forEach(function (attr) {
          if (attr in slide.children[elix].style) {
            slide.children[elix].style[attr] = o[elix][attr];
            return;
          }
          var id = 'x' + ~~(Math.random()*100);
          slide.children[elix].id = id;
          slide.innerHTML += '<style>' +
            '#' + id + ' ' + attr + '{' +
              Object.keys(o[elix][attr]).map(function (a) {
                return a + ':' + o[elix][attr][a]
              }).join(';')
            '}' +
          '</style>';
        });
      });
    }
  }),
  // bullets('li, .bullet'),
  scale(),
  hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

