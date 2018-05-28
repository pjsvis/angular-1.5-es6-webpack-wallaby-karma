## AngularJS 1.5 with Typescript, Webpack, Wallaby and Karma

A small skeleton project with the configuration files for running Angular 1.5
applications written in Typescript. Module bundler is webpack, and available test runners are Wallaby and Karma.
Both runners are using PhantomJS2 to run the tests.

## install

- first `npm install --global --production windows-build-tools` as per [node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows) from an admin shell
- install `jasmine-core` manually as per this [issue](https://stackoverflow.com/questions/36218661/unable-to-run-npm-install-successfully-due-to-unmet-peer-dependencies)
- See [ui-router](https://github.com/ngParty/ng-metadata/issues/206) issue. IE don't import `ui-router`

**NPM commands:**

npm run dev-server _Starts the webpack dev server_ at []()

npm test _Starts the karma server & starts a test run_

div 