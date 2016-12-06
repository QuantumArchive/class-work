# Angular Directives and Components

## Adventure Game

Show and Tell! (5 minutes per team)

## Overview

* All of the DI "$injectable" resources are services
    * services = (`.factory`, `.service`, `.provider`, `.value`, `.constant`)
* "Directives" refers to anything in the template 
that "directs" Angular to do something
* We can use the same directive mechanism that angular uses
to make components out of Directives
* Angular 1.5 added `.component` method to encapsulate
directive options that make up a component
* What is a component?
    1. A directive that causes a template to be made into
    a _document fragment_ and inserted into the DOM
    2. With a specific controller instance assigned to that template
    3. Plus some webpack/css-loader magic to "scope" css to the dom

## Better rollup of Angular resources

Let's get a file in place for loading resources

## Directives

* Simple directive example
* Evolve to component

## Components

* restrict to (E)lements
* template from file
* scope
    * isolate scope
    * bindings
        * one-way