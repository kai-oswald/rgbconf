module.exports = function (grunt) {
    grunt.initConfig({
        bower_concat: {
            all: {
                dest: {
                    'js': 'public/js/build.js',
                    'css': 'public/css/build.css'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-concat');    
    grunt.registerTask("default", ["bower_concat"]);
}