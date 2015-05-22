/*
 * grunt-add-view
 * https://github.com/dcorns/grunt-add-view
 *
 * Copyright (c) 2015 Dale Corns
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    add_view:{
      dist: {
        files: {'tmp/view1.js': 'test/fixtures/**/*.html'}
      },
      dev: {
        files: {'tmp/view2.js': ['test/fixtures/loginView.html', 'test/fixtures/openView.html']}
      }
    },
    // Configuration to be run (and then tested).
    //add_view: {
    //  dist:{
    //    files: {'tmp/views1.js': ['test/fixtures/loginView.html', 'test/fixtures/openView.html']
    //  },
    //  dev:{
    //    files: {'tmp/views2.js': ['test/fixtures/loginView.html', 'test/fixtures/openView.html']
    //  }
    //},
    //add_view: {
    //  default_options: {
    //    files: {
    //      'tmp/default_options': ['test/fixtures/loginView.html', 'test/fixtures/openView.html']
    //    }
    //  },
    //  custom_options: {
    //    files: {
    //      'tmp/custom_options': ['test/fixtures/loginView.html', 'test/fixtures/openView.html']
    //    }
    //  }
    //},

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'add_view', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
