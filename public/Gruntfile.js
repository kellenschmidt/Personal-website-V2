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
          'dist/output.min.js': ['js/**/*.js']
        }
      }
    },
    watch: {
      scss: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['uglify']
      }
    },
    realFavicon: {
      favicons: {
        src: 'assets/web_hi_res_512.png',
        dest: 'assets/favicons/',
        options: {
          iconsPath: 'assets/favicons/',
          html: [ 'index.html' ],
          design: {
            ios: {
              pictureAspect: 'backgroundAndMargin',
              backgroundColor: '#ffffff',
              margin: '11%',
              assets: {
                ios6AndPriorIcons: false,
                ios7AndLaterIcons: false,
                precomposedIcons: false,
                declareOnlyDefaultIcon: true
              }
            },
            desktopBrowser: {},
            windows: {
              pictureAspect: 'noChange',
              backgroundColor: '#2d89ef',
              onConflict: 'override',
              assets: {
                windows80Ie10Tile: false,
                windows10Ie11EdgeTiles: {
                  small: false,
                  medium: true,
                  big: false,
                  rectangle: false
                }
              }
            },
            androidChrome: {
              pictureAspect: 'noChange',
              themeColor: '#ffffff',
              manifest: {
                display: 'standalone',
                orientation: 'notSet',
                onConflict: 'override',
                declared: true
              },
              assets: {
                legacyIcon: false,
                lowResolutionIcons: false
              }
            },
            safariPinnedTab: {
              pictureAspect: 'blackAndWhite',
              threshold: 70.3125,
              themeColor: '#398bff'
            }
          },
          settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
          },
          versioning: {
            paramName: 'v',
            paramValue: '47rLa7jpdq'
          }
        }
      }
    }
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-real-favicon');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
  grunt.registerTask('deploy', ['sass', 'cssmin', 'uglify', 'realFavicon']);
};