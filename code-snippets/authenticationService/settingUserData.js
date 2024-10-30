this.setUser = function (res) {
    if (SECURITY === 'oauth') {
        isAuthenticated = true;
        role = USER_ROLES.user;
        setAccessToken(res.access_token);
    } else {
        storageService.setObject('user_profile', res);
        isAuthenticated = true;
        userData = res;
        role = USER_ROLES.user;
        setAccessToken(res.base64EncodedAuthenticationKey);
    }
};
