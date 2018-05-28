# AngularJS 1.5 with Typescript, Webpack, Wallaby and Karma

A small skeleton project with the configuration files for running Angular 1.5
applications written in Typescript. Module bundler is webpack, and available test runners are Wallaby and Karma.
Both runners are using PhantomJS2 to run the tests.

## prerequisites

- first `npm install --global --production windows-build-tools` as per [node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows) from an admin shell
- install `jasmine-core` manually as per this [issue](https://stackoverflow.com/questions/36218661/unable-to-run-npm-install-successfully-due-to-unmet-peer-dependencies)

## npm commands

- run the following two commands at the same time
- `tsc --watch` _runs typescript compiler in watch mode_
- `npm run dev-server` _starts the webpack dev server_ at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)
- `npm test` _Starts the karma server & starts a test run_

## todo

- upgrade from webpack 1 to current version
- fix `DevTools failed to parse SourceMap: http://localhost:8080/webpack-dev-server/bootstrap.min.css.map` chrome devtools error

```javascript
// Use as default for switch over string types
function assertNever(obj: never): never{
  throw new Error('Unexpected object');
}

type = 'one' | 'two';
switch(x){
  case: 'one': return 'one'
  case: 'two': return 'two'
  default: assertNever(x)
}
```
