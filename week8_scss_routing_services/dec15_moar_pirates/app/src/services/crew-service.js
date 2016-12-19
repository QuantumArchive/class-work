// $http is Angular's built-in AJAX library
crewService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function crewService($http, apiUrl) {
    return {
        get(id) {
            if(!id) return this.getAll();
            return $http.get(`${apiUrl}/crews/${id}`)
                .then(res => res.data);
        },
        getAll() {
            return $http.get(`${apiUrl}/crews`)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/crews/${id}`)
                .then(res => res.data);
        },
        add(crew) {
            return $http.post(`${apiUrl}/crews`, crew)
                .then(res => res.data);
        }
    };
}