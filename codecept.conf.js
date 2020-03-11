const { setHeadlessWhen } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS)

exports.config = {
    tests: './test/*_test.js',
    output: './output',
    include: {
        I: './step/steps_file.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'poc-codeceptjs-testcafe-allure',

    helpers: {
        TestCafe: {
            url: 'http://localhost',
            browser: 'firefox',
            show: false,
        },
    },
    multiple: {
        basic: {
            chunks: 2,
            browsers: ['firefox', 'chrome'],
        },
        parallel: {
            chunks: 2,
            browsers: [{
                browser: 'chrome',
                windowSize: '1920x1080',
            }, {
                browser: 'firefox',
                windowSize: '1920x1080',
            }],
        },
    // all: {
    //   browsers: ['chrome', 'firefox', 'ie', 'edge', 'safari', 'opera']
    // },
    },
    plugins: {
        retryFailedStep: {
            enabled: true,
        },
        screenshotOnFail: {
            enabled: true,
        },
        allure: {
            enabled: true,
        },
    },
}
