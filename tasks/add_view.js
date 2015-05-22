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

  var htmlViews = {};

  grunt.registerMultiTask('add_view', 'Input html files and out put a js file that exports all the html as a object of the for {filename:html text}. It is intended to be used as a view object in single page web apps.', function () {
    var htmlViewObject = {};
    var htmlViewsObjectExport = '\'use strict\';\nmodule.exports = ';
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var htmlView = grunt.file.read(filepath);
        var propName = extractFileName(filepath);
        htmlViewObject[propName] = htmlView;

        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      htmlViewsObjectExport = htmlViewsObjectExport + JSON.stringify(htmlViewObject) + ';';

      // Write the destination file.
      grunt.file.write(file.dest, htmlViewsObjectExport);

      // Print a success message.
      grunt.log.writeln('File ' + chalk.cyan(f.dest) + ' created.');
    });
  });

};
