var ref = new Firebase("https://ng-auth.firebaseio.com");
ref.onAuth(function(authData) {
  if (authData) {
    // User logged in       
  }
  else
  {
    // User logged out
  }
})
