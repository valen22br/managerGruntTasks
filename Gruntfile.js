module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'managerGruntTasks', 
          src: '../files/xdebugphp.ini',
          dest: '../manager/docker/web/php.ini',
        }]
      },
      main2: {
        files: [{
          expand: true,
          cwd: 'managerGruntTasks', 
          src: '../manager/docker/web',
          dest: 'files',
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['copyPhpIni']);
  // grunt.registerTask('copyPhpIni');



};
