storageService.getObject("user_profile").then(function (data) {
    if (data) {
        isAuthenticated = true;
        role = USER_ROLES.user;
        userData = data;
        setAccessToken(userData.base64EncodedAuthenticationKey);
    }
});
