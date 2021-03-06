var pigeon = require('./lib/pigeon');
var beautifyHTML = require('js-beautify').html;

module.exports = function(obj, callback, options) {

  var callback = callback || function() {};
  var options = options || {};

  if (obj !== null && typeof obj !== 'object') {
    var error = new TypeError('Expected an object.');
    return callback(error, null);
  }

  var html = pigeon.build(obj);

  if (!options.minify) {
    html = beautifyHTML(html, {
      indent_size: options.indentSize || 4
    });
  }

  callback(null, html);
  return html;

};