
// assume exists:
class Module {

    provider(name, definition) {
        // this has the angular provider logic! hint: provider recipe
        // function() { this.$get = factory function }
        console.log(name, definition);
    }

    // name of service, factory function
    factory(name, fn) {
        const definition = function() {
            this.$get = fn;
        };
        this.provider(name, definition);
        return this;
    }

    value(name, val) {
        this.factory(name, () => val);
        return this;
    }

    service(name, Constructor) {
        this.factory(name, () => new Constructor());
        return this;
    }
}

const app = new Module();

app.provider('myProvider', function() {
    this.$get = function($http) {
        return {
            get() {
                return $http.get('/');
            }
        };
    };
});

app.factory('myFactory', function($http){
    return {
        get() {
            return $http.get('/');
        }
    }
});

app.value('myValue', {
    get() {
        return superagent.get('/');
    }
})

//app.constant

class MyService {
    constructor($http) {
        this.$http = $http;
    }
    get() {
        return this.$http.get('/')
    }
}

app.service('myService', MyService);