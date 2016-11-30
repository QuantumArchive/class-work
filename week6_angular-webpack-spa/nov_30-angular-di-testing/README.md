# AngularJS DI System and Testing

## Webpack Questions?

## Grading

* 5/6 mid-projects complete
* Starting on backend quiz
    * Total possible points > 50
    * But 50 max
* Will review exercise once graded

## Agenda

* Angular DI
* Testing
* (Routing)

### Angular DI

1. Module System
    * WHY? 
        * There wasn't a good standard in 2008
        * Makes "Mocking" in tests easier  
    * history
        * IIFE and other global isolation techniques
        * CJS (Common JS) `require`/`module.exports`
        * AMD (Asynchronous Module Definition) RequireJS
            * Async loading of modules
    * What is a module system?
        * Specify dependencies by some string token
            * WHY? declaration
        * Returns a resource (some JavaScript data type)
            * WHY? implementation
        * Resource is usually cached
            * WHY? efficiency, "shared" state, modules written that way
    * Angular 
        * Modules are buckets of resources
        * Categorized by type (controller, factory, value, filter, directive, component)
        * WHY? would we add modules to modules?
            * 
        * How are resources requested?
            * Implied by a directive in a template
            * "Required" by another resource
        * Integrating with JS
            * Live with Angular DI, but use JS Modules (CJS or ES6) when makes sense
            * Leverage for testing
    * Project Org Patterns
        * (we want resources to be auto-added eventually)
2. Testing
    * Test Runner
        * Mocha (or Jasmine)
        * Karma is test runner runner for browser and angular
    * Karma
        * Config/Setup
        * We want to leverage existing webpack config
            * Preloaders
            * Babel
            * Webpack
        * Browsers
    * Angular-mocks
        * Module loading
        * Inject
            * Manage data during test cycle
            * Stub dependencies
            * Returns Controller Constructor factory
            * `beforeEach` vs `before` (requires setting)
        * What to test
            * Controller functionality
            * Code you wrote
            * (not Angular)
3. Basic Routing
