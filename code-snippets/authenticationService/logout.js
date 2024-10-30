this.logout = function () {
    role = '';
    userData = '';
    isAuthenticated = false;
    window.localStorage.clear();
    setAccessToken('');
    storageService.clear();
    delete $http.defaults.headers.common['Fineract-Platform-TFA-Token'];
    delete $http.defaults.headers.common['Fineract-Platform-TenantId'];
    delete $http.defaults.headers.common['Authorization'];
    $state.go('login');

};
