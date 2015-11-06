// CRIA UMA NOVA INSTANCIA DO APP COM O ANGULARFIRE
var app = angular.module("app", ["firebase"]);

// Re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://lookit.firebaseio.com");
  return $firebaseAuth(ref);
});

app.controller("AuthCtrl", function($scope, $http, Auth) {
  // Listens for changes in authentication state
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;

    if (authData) {
    // faz qlqr merda
    }
  });

  // LOGIN COM FACEBOOK $scope pega o hmtl vinculado
  $scope.login = function() {
    Auth.$authWithOAuthPopup("facebook").catch(function(error) {
      console.error("Error authenticating with facebook:", error);
    });
  };

  $scope.login = function() {
    var ref = new Firebase("https://lookit.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        alert("Login Failed!");
        console.log("Login Failed!", error);
      } else {
        alert("Authenticated successfully with payload:");
        window.location = "perfil.html";
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };

  // Logs out the logged-in user
  $scope.logout = function() {
    Auth.$unauth();
  };

  // Teste com o github, metodo chamado na autenticação - Retrieves the GitHub repos owned by the logged-in user
  function getRepos() {
    $http.get($scope.authData.facebook.cachedUserProfile.cover, {
      access_token: $scope.authData.facebook.accessToken
    }).success(function(repos) {
      $scope.repos = repos;
    }).error(function(error) {
      console.error("Error making API request:", error);
    });
  }
});
