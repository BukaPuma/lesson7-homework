module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n\r',
            },
            dist: {
                src: ['src/css/*.scss'],
                dest: 'src/main.scss'
            },
        },
        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'public/scss/main.css': 'src/main.scss',
                }
            }
        },
        watch: {
            source: {
                files: 'src/**/*.scss',
                task: ['concat', 'sass'],
                options: {
                    livereload: true
                }
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('run', ['concat', 'sass', 'watch'])
};

