# Building a JavaScript Development Environment

## Editor
    Here are some options for lightweight text-editors
1. VS code
2. Atom
3. WebStorm
---
## Package Managers
1. npm duh.
---
## Security Scanning
- checking for vulnerabilities in node modules using Node Security Platform
- use ``nsp check`` to check for vulnerabilities
---
## Development WebServer
1. http-server - super lightweight
2. live-server - live-realoading
3. express - comprehensive, highly configurable, production grade 
4. hapi - made by walmart labs
5. koa
6. webpack - serves from memory, supports hot-realoading
7. browsersync - great for cross-device testing, integrates with webpack and express
---
## Sharing Work-in-Progress
1. localtunnel - ``npm i -S localtunnel``
    - then run ``lt --port <PORT>`` 
    - it will return a public url
---
## Automation Scripts
1. npm scripts - declared in package.json
    - leverage OS' command line
    - directly use npm packages
    - ``npm i -g npm-run-all`` to be able to run tasks in parallel
---
## Transpiling
1. babel - modern, standards-based JS
    - create a ``.babelrc`` file in the root directory
    - install babel-cli ``npm i -g babel-cli``
    - in package.json edit prestart script to ``babel-node server.js`` to transpile before running the server
2. typescript - superset of JavaScript enhanced autocompletion
---
## Bundler
    - improve node performance
    - ES Modules, a module writing style
    - improves autocomplete
    - fast fails
    - tree shaking = reduce the size of final production code by eliminating unused code
1. Webpack
    - bundles, CSS, images, JS, HTML, Fonts
    - hot-reloading web server
    - import css files in the src/index.js
How to debug bundled, transpiled, and minified code?
    - using sourcemaps
---
## Linting
    - enforce consistency
1. ESLint
    - Setting up ESLint Recommended rules and eslint-watch
2. JSHint
---
## Testing
1. Mocha
    - Chai - assertion library
2. Jasmin
3. Tape
4. QUnit
5. AVA
6. Jest

**Assertion**
- declare what you expect i.e. ``expect(2+2).to.equal(4)``

**Headless Browser**
- Phantom JS, simulates the browser w/o UI
- JSDom

**Continuous Integration(CI)**
- weird... works on my machine
- make a CI server

What does a CI Server do?
    - run automated build
    - run your tests
    - check code coverage
    - automate deployment
1. TravisCI - linux
2. Appveyor - windows
---
## HTTP
Making HTTP Calls

**Node**
- http
- request

**Browser**
- XMLHttpRequest
- jQuery
- Framework-based
- fetch

**Node & Browser**
- isomorphic-fetch
- xhr
- axios
- superagent

**One Spot**
- centralize all calls
- handle preloader logic
- handle erros
- single seam for mocking

**Mock HTTP**
- unit testing
- instant response
- keep working when services are down
- rapid prototyping 
- work offline

1. Declare Schema
    - JSON Schema Faker
2. Generate Random Data: 
    - faker.js
    - chance.js
    - randexp.js
3. Serve Data via API
    - JSON Server ``npm i -g json-server``


    
---
