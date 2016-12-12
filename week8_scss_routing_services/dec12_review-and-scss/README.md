
## Review

* Core Build System "Boilerplate" project
    * stuff to get you up and running
    * [boilerplate projects](http://zerosixthree.se/create-your-own-personal-boilerplate/)
    * See ["JavaScript fatigue"](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=javascript+fatigue)
    * What do we need for FullStack JS?
        * Basic node project
            * source control
            * linting
            * testing
            * running
            * `npm`
                * dependency management
                * scripts
            * environment
        * app
            * node project
                * `npm init` for `package.json`
            * running - `webpack`
                * `webpack.config.js`
            * testing - `karma`, `mocha`, `chai`
            * running (actual code to run) `src`
        * server
            * node project
            * testing - `mocha`, `chai`, `chai-http` (`superagent`)
            * running
                * `server.js`
                * `lib`
        * repo (Travis CI)
            * run both sub-folder projects

## SCSS

* Goals for CSS
    * DRY CSS
    * Non-global
    * Modularity FTW!
* [CSS Methodology](http://getbem.com/introduction/)
    * Organize by “type” of css
    * SMACSS
        * base, layout, module, state, theme
    * BEM
        * Block Element Modifier
    * Atomic
        * Tiny pieces reassembled
    * Somewhat obsolete if component “scoping” used.
* [SASS](http://sass-lang.com/)
    * Technically SCSS
    * We'll be using webpack
    * Use “:local” function of css loader to scope component
    * Nested CSS
    * Split files (`_partials`/`@import`)
    * Share includes in main scss and component scss
    * Also:
        * Variables
        * `mixins`/`@include`
        * Functions
        * Extend

