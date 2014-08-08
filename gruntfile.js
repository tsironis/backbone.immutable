/*global module:false */
module.exports = function(grunt) {
  // we should add tests
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          Backbone: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    jasmine: {
      src: 'backbone.immutable.js',
      options: {
        specs:  'spec/mainSpec.js',
        vendor: [
          'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
          'bower_components/underscore/underscore.js',
          'bower_components/backbone/backbone.js'
        ],
        helpers: [
          'spec/lib/mock-ajax.js'
        ],
        keepRunner: true
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      main: {
        files: {
          'backbone.immutable.min.js': ['backbone.immutable.js']
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: [
          'backbone.immutable.js',
          'spec/**/*.js'
        ],
        tasks: ['specs']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', 'specs');
  grunt.registerTask('specs', ['jshint', 'jasmine', 'uglify']);

};
