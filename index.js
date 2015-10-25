'use strict';

var pigeon = require('./lib/pigeon'),
    beautifyHTML = require('js-beautify').html;

module.exports = function(obj, callback, options) {

    var callback = callback || function() {},
        options = options || {};

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
    // Yes, it returns the HTML not the callback
    return html;

};