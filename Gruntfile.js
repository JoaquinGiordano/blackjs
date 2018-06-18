
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            build: {
                src: ['src/*.js'],
                dest: 'dist/blackjs.js',
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
};