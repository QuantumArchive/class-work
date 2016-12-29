# Misc

Probably Agenda:
* web sockets via `socket.io`
* prep for project week
* easy angular animations?

# How to pass data around components?

* How do components aquire data?
    * (not considering $scope or shared data contexts)
    * bindings
        * mappings between values passed to attributes 
            * `some-data="$ctrl.data"`
            * (remember kabob vs camel:
                * in js: `someData: '<'`, `this.someData`
                * in html: `some-data="`
        * and properties on `this` of component controller
            * `nameOfDataOnController: '<'`
        * types:
            * '@' - literal string value (not used often)
            * '<' - one-way reference from parent (probably most often)
            * '=' - full two-way binding, child can update 
            root value in parent
    * injected dependencies (aka services)
        * use services to deal with shared data
    * `require`
        * same syntax structure as `bindings`
        * use to get references to components,
        * and inject onto controller as-if data
* Resolves in Router
    * Problem? `<ui-view>` doesn't allow components to pass
    data in the template, i.e. you can't write:
    ```
    <ui-view some-data="$ctrl.data"></ui-view>
    ```
    * Solution?
        * Use resolve to introduce data for bindings
            * Simple pass-thru of params (`id`)
            * Or "aquire" data from services
        * Resolve
            * mappings between results of arbitrary 
            DI $inject-capable functions
            you write, and bindings to be passed to ui-view 
            placed components 
            * Resolve only happens when a state is "transitioned to"
                * Same parent, parent doesn't re-resolve
            * `nameOfBinding: [() => {}]`
            * Functions that return Promises:
                * Promise is resolved and the resolved value
                is passed to the component binding
                * "Resolving" (time till actual binding value) 
                blocks the state transition 
    * Resolves can be "$injected" into other resolves (use the binding 
    key name)
* params
    * Passed by actor transitioning the state
    * Available in resolves, by using `$transition$` and 
    `t => t.params()`
        * (`$stateParams` as a service deprecated)
    * Use `params` options to define details like:
        * `dyanamic` - don't change component, call component's
        `this.uiOnParamsChanged`
        * default values
    * Use of `params` is not required, `ui-router` picks them
    up implicitly:
        * url params: `/albums/:id` or `/albums/{id}`
        * query params: `/albums?option`

* "hard-coded" components (not via `ui-view`)
    * directly pass data and functions from parent to child
    ```
    <some-component some-data="$ctrl.data"></some-component>
    ```

## `socket.io`
* Popular library
* server and client side implementations
* Needs `http` server we are using
* client
    * included in io.listen();
    * how to serve, 2 options:
        1. add `script` tag to index.html, eslint for global `io`
        2. `npm i socket.io-client -S` and `import`
    * integrate with angular
        * need to call `$rootScope.$apply`
        * wrapper service
* Authentication
    * Two options:
        1. create authenticate event type where you pass the token
        2. add the token to the query string (via the io.connect call)
            * visible to proxies and other intermediate servers
* On the server, use existing libraries:
    * Mongoose models
    * Token service
    * etc.

## Project Week
* Upfront design?
    * Purpose
        * get team on same page
        * capture decision making
    * not about
        * detailed specs
        * avoiding change
    * Approach:
        * Wireframe states
        * Arrows between the boxes (data flows)
        * Outcomes:
            * Router states
                * Data techniques
            * Needed data (and when)
            * Server API
* Infrastructure
    * Can team members add new stuff to protection
    * If you're waiting for _fill in the blank_, you're doing it wrong
        * Mock the missing thing (e.g. hard code data in services)
        * Write a test
    * Testing on a week long project
        * Upfront or as needed
            * provides feedback
            * regression protection
        * After - a chore to check a box with no value
        * Manual testing is still testing
        * Be judiscious
* Grow, don't Birth

## `angular-animate`

* [awesome tutorial](http://www.nganimate.org/angularjs/tutorial/how-to-make-animations-with-angularjs)
