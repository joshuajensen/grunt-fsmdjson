/*
 * grunt-fsmdjson
 *
 * Copyright (c) 2014 Joshua Jensen
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function (grunt) {

    grunt.initConfig({

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        fsmdjson: {
            default_task: {
                options: {
                },
                files: {
                    'test/data.json': ['test/app_data/**/*']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'filesystem_to_json']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
