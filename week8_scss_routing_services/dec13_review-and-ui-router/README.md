
## Review/Follow-up

* Using `ExtractTextPlugin` with `SCSS`
* Running Karma Chrome and Firefox on Travis CI
* Web-server hang on no mongo connection
* Express middleware
* Testing component bindings

## UI-Router

* Why? Major App State Transitions
* Using ui-router `npm i ui-router@1.0.0-beta3 -S`
    * if not working, check your version!
* Configure Routes using `app.config`
    * hint: _this uses a service provider_
    * generally:
        * "generic" services need to be configured
        * app-specific services do not need to be configured
* outlet via `ui-view`
    * `ui-sref='state'`
    * template v component
* nested stated and parameters