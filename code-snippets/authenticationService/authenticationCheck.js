this.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
    }
    return (this.isAuthenticated() && authorizedRoles.indexOf(role) !== -1);
};
