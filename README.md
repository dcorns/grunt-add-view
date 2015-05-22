# grunt-add-view

> Input html files and out put a js file that exports all the html as a object of the for {filename:html text}. It is intended to be used as a view object in single page web apps.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-add-view --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-add-view');
```

## The "add_view" task

### Overview
In your project's Gruntfile, add a section named `add_view` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  add_view: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```
### Usage Examples

#### Default Options
In this example, the dist and dev are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  add_view: {
    files: {
      'dest/view.js': ['src/login.html', 'src/register.html'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Dale Corns. Licensed under the MIT license.
