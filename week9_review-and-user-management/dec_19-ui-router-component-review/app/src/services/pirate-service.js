// $http is Angular's built-in AJAX library
pirateService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function pirateService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/pirates`)
                // our "data" is on the data prop of res
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/pirates/${id}`)
                .then(res => res.data);
        },
        add(pirate) {
            return $http.post(`${apiUrl}/pirates`, pirate)
                .then(res => res.data);
        }
    };
}