this.doLogin = function (data) {
    if (SECURITY === 'oauth') {
        window.localStorage.setItem('tenant_identifier', data.tenantIdentifier); // Save the tenant ID
        $http.defaults.headers.common['Fineract-Platform-TenantId'] = data.tenantIdentifier;
        return $resource(OAUTH_URL + '/oauth/token?username=' + data.username + '&password=' + data.password + '&client_id=community-app&grant_type=password&client_secret=123');
    } else {
        window.localStorage.setItem('tenant_identifier', data.tenantIdentifier); // Save the tenant ID
        $http.defaults.headers.common['Fineract-Platform-TenantId'] = data.tenantIdentifier;
        return $resource(BASE_URL + '/self/authentication');
    }
};
