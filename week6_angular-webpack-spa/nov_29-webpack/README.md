# Developing AngularJS with Webpack and Webpack Dev Server

## Questions from Templating?

* Show my ng-editor solution

## Agenda

* App server vs Server server
* Webpack
* Angular DI

### Webpack

1. Webpack build
    * WHY? 
        * Enable us to code in node require system
        * Bundle all into one file - easier to manage 
    * use a `src` folder
    * bundle.js
        * entry point(s)
        * output
    * npm modules
2. preloaders (and loaders)
    * WHY?
        * Make sure things have been linted
    * eslint
3. Webpack dev server
    * WHY? Live reload
    * plugins
    * "live reload"
4. Plugins
    * WHY? 
        * Some assets aren't "require"d, but we want to include in output
        * dev server can now know about index.html
        * puts in script tag for us
    * HtmlWebpackPlugin
5. Loaders
    * WHY?
        * Transform the assets being required
    * css
    * babel
        * ES6 (and beyond!) language features
        * ES6 module syntax
            * import/export
            * named exports
            * static bindings (fyi)

### Angular DI

* history of JavaScript module loading
* "provider" - thing that creates the resource
* `.module` creates modules/app
* resources by type
* instance
    * create a instance of the resource
    * Depends on type, new or cached