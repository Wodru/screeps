module.exports = function (grunt) {
    let config = require('./.screeps.json')
    grunt.loadNpmTasks('grunt-screeps')

    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                token: config.token,
                branch: process.env.BRANCH,
                ptr: config.ptr,
            },
            buildToDeploy: {
                src: ['build/*.js'],
            },
        },
    })

    grunt.registerTask('default', ['screeps'])
}
