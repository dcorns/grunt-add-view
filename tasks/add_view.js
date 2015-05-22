/*
 * grunt-add-view
 * https://github.com/dcorns/grunt-add-view
 *
 * Copyright (c) 2015 Dale Corns
 * Licensed under the MIT license.
 */

'use strict';
var chalk = require('chalk');
module.exports = function (grunt) {

  grunt.registerMultiTask('add_view', 'Input html files and out put a js file that exports all the html as a object of the for {filename:html text}. It is intended to be used as a view object in single page web apps.', function () {
    var htmlViewObject = {};
    var htmlViewsObjectExport = '\'use strict\';\nmodule.exports = ';
    // Iterate over all specified file groups.
    this.files.forEach(function (file) {

      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath, i) {
        // Read file source.
        var htmlView = grunt.file.read(filepath);
        var propName = extractFileName(filepath);
        htmlViewObject[propName] = htmlView;

        return src;//grunt.file.read(filepath);
      });

      htmlViewsObjectExport = htmlViewsObjectExport + JSON.stringify(htmlViewObject) + ';';

      // Write the destination file.
      grunt.file.write(file.dest, htmlViewsObjectExport);

      // Print a success message.
      grunt.log.writeln('File ' + chalk.cyan(file.dest) + ' created.');
    });
  });

  function extractFileName(str){
    str = str.substr(str.lastIndexOf('/') + 1);
    return str.substr(0, str.lastIndexOf('.'));
  }

};
