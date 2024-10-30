var setAccessToken = function (token) {
    if (SECURITY === 'oauth') {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + token;
    }
};
