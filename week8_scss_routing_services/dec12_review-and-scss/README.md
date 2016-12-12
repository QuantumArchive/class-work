
## Review

* Core Build System "Boilerplate" project
    * Basic node project
        * github
        * linting
        * testing
        * running
        * npm
            * dependency management
            * scripts
        * environment
    * app
        * node project
        * webpack
        * karma, mocha, chai
        * src
    * server
        * node project
        * mocha, chai, chai-http (superagent)
        * server.js
        * lib
    * repo (Travis CI)

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

