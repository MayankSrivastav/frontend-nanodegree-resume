module.exports = function(grunt) {

  grunt.initConfig({             
        jshint: { 
          all: ['js/*.js']
        }               
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
  // grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.registerTask('default', ['responsive_images']);
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  // grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
