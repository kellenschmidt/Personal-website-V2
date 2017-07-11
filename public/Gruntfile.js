module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/',
        ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/output.min.js': ['js/*.js']
        }
      }
    },
    sasslint: {
        options: {
            configFile: '.sass-lint.yml',
        },
        target: ['scss/**/*.scss']
    },
    watch: {
      scss: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'cssmin'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['uglify'],
      }
    },
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass-lint');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

};