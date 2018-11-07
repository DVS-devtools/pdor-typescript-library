# pdor-typescript-library  boilerplate

[![Build Status](https://travis-ci.com/docomodigital/pdor-typescript-library.svg?branch=master)](https://travis-ci.com/docomodigital/pdor-typescript-library)
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/pdor-typescript-library.svg)](https://greenkeeper.io/)

Boilerplate for [pdor generator](https://github.com/docomodigital/pdor) to generate a Typescript library.


## Features

* **Build**: create production-ready distribution file, also UMD
* **Documentation**: create different documentation for each version
* **Lint**: check the quality of your code
* **Test**: test your code and check the code coverage
* **Example**: try your library with examples
* **Continuous Integration**: set your continuous integration environment with Travis CI

## Usage

```bash
npx @docomodigital/pdor my-app -t typescript
cd my-app
```
Please refer to the [pdor documentation](https://github.com/docomodigital/pdor#README.md) for more info


### Now you can:

* Edit source code and test of your library, contained in **src/**
* Check the quality of your code with ```npm run lint```
* Run tests with ```npm run test```
* Check the coverage of your tests with ```npm run test:open```
* Try your library with examples contained in **examples/**, with ```npm start```
* Create the documentation and read it with ```npm run doc:open```
* Integrate your library with Travis CI, using ***.travis.yml***
* Publish your library on NPM

You can find all commands for develop, maintain and publish your library on **CONTRIBUTING file**.


## Useful links

* [Webpack](https://webpack.js.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Babel](https://babeljs.io/)
* [JSDoc](https://github.com/jsdoc3/jsdoc)
* [Minami JSDoc Template](https://github.com/Nijikokun/minami)
* [TSlint](https://palantir.github.io/tslint)
* [AirBnb Styleguide](https://github.com/progre/tslint-config-airbnb)
* [Jest](https://github.com/facebook/jest)
* [Coveralls](https://github.com/nickmerwin/node-coveralls)
* [Travis CI](https://travis-ci.org/)

## Next Steps

* Jenkins configuration
