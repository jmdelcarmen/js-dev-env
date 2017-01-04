# Building a JavaScript Development Environment

## Editor
Here are some options for lightweight text-editors
1. VS code
2. Atom
3. WebStorm

## Package Managers
1. NPM //duh.

## Security Scanning
- checking for vulnerabilities in node modules using Node Security Platform
- use ``nsp check`` to check for vulnerabilities

## Development WebServer
1. http-server - super lightweight
2. live-server - live-realoading
3. express - comprehensive, highly configurable, production grade 
4. hapi - made by walmart labs
5. koa
6. webpack - serves from memory, supports hot-realoading
7. browsersync - great for cross-device testing, integrates with webpack and express

## Sharing Work-in-Progress
1. localtunnel - ``npm i -S localtunnel``
    - then run ``lt --port <PORT>`` 
    - it will return a public url

## Automation Scripts
1. npm scripts - declared in package.json
    - leverage OS' command line
    - directly use npm packages
    - ``npm i -g npm-run-all`` to be able to run tasks in parallel

## Transpiling
1. babel - modern, standards-based JS
    - create a ``.babelrc`` file in the root directory
    - install babel-cli ``npm i -g babel-cli``
2. typescript - superset of JavaScript enhanced autocompletion

