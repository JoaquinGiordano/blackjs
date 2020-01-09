
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            build: {
                src: ['src/*.js'],
                dest: 'dist/blackjs.js',
            },
        },
        watch: {
            scripts: {
              files: ['src/*.js'],
              tasks: ['default']
            },
          },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ["concat"]);
};