## AngularJS 1.5 with ES6, Webpack, Wallaby and Karma

A small skeleton project with the configuration files for running Angular 1.5
applications written in ES6. Module bundler is webpack, and available test runners are Wallaby and Karma.
Both runners are using PhantomJS2 to run the tests.

## install

- first `npm install --global --production windows-build-tools` as per [node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows) from an admin shell

**NPM commands:**

npm run dev-server _Starts the webpack dev server_

npm test _Starts the karma server & starts a test run_