module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <&= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        clean: {
            app: ['public'] 
        },
        copy: {
            main: {
                files: [
                    { expand: true, app: 'src/', src: ['**'], dest: 'public/', cwd: 'src/' }
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['clean', 'compass', 'copy']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['clean', 'compass', 'copy']
            },
            css: {
                files: ['src/**/*.scss'],
                tasks: ['clean', 'compass' ,'copy']
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'public/css'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy']);

};
