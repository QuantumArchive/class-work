const webpackConfig = require( './webpack.config' );
webpackConfig.entry = {};

module.exports = function(config) {
    const options = {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            './src/main.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './test/**/*.js' 
        ],

        webpack: webpackConfig,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './src/main.js': [ 'webpack' ],
            './test/**/*.js': [ 'babel' ]
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Safari'],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };

    // if we are running on TRAVIS
    if (process.env.TRAVIS) {
        options.customLaunchers = {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        };
        options.browsers = ['Chrome_travis_ci', 'Firefox']; // Don't forget karma-firefox-launcher!
        options.singleRun = true;
    }

    config.set(options);
};