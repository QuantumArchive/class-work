albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
    return {
        get(id) {
            if(!id) return this.getAll();
            return $http.get(`${apiUrl}/albums/${id}`)
                .then(res => res.data);
        },
        getAll() {
            return $http.get(`${apiUrl}/albums`)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/albums/${id}`)
                .then(res => res.data);
        },
        add(album) {
            return $http.post(`${apiUrl}/albums`, album)
                .then(res => res.data);
        }
    };
}