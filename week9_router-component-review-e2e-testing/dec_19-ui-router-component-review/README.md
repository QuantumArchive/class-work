
# UI Router

* `name:` - name of the router (app) state.
* Nested state
    * parent is `someState`, child is `someState.childState` 
        * (you can also set the parent property of the child state)
* `params` - how we pass data as part of state change
    * Either implicit in `url`, i.e. `/resource/:id`, `/resource?queryParam`
    * And/Or in `params` section
        * `someParam: null` - non-url param (passed into state, but not part of url)
        * `someParam: { dynamic: true }` - dynamic params,
        do not update render state, they call `this.uiOnParamsChanged`
        * `someParam: { default: 'someValue' }` - specify default value for
        param

* `resolve` - specify the data to pass to component bindings
    * `key:` is the binding name expected by component
    * `value` is $injectable (you can require services and such) function
        * who's return value will be the binding value, or
        * if a Promise is returned, it's resolved 
        value will be the "resolved" binding value
    * Child states have access to all parent resolve values
        * Will be automatically included in bindings
        * And/or, you can inject into child resolve by the resolve key

* `component` - what component should be used to populate the `ui-view`
    * Single component per `ui-view` (default view)
    * OR, named views, via `<ui-view name="myViewName"></ui-view>`, and
    matching same view names under views:
    ```
    views: {
        nameOne: 'componentToUse',
        nameTwo: 'otherComponentToUse'
    }
    ```