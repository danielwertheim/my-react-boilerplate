# My React boilerplate
Just my little boilerplate for getting started and trying to get a grasp of Webpack, React, React-Router etc. With a nice hot-module dev flow as well as production release build.

# Dependencies
Everything is using `npm`.

## Bootstrap
Yes, it's native Bootstrap3 and jQuery (I know) so it's not (for now) using e.g [reactstrap](https://reactstrap.github.io/).

It references the JS and Less from `node_modules` so you can easily include what you use. See: `./src/styling/bootstrap.less`.

Glyphicons are replaced with Fontawesome.

## Webpack

Supports:
  - Bundling (react, vendors, app)
  - Minification
  - Cache busting etc
  - Less, fonts, icons

## npm scripts
  - start: dev server configured for dev flow with hot module reloading etc. Served from `./src`.
  - clean: cleans `./wwwroot`
  - build: builds without minification, cache busting etc. to `./wwwroot`
  - build-release: builds for release, using minification, cachebusting etc to `./wwwroot`
  - wwwroot: serve what is in wwwroot using [lite-server](https://github.com/johnpapa/lite-server)