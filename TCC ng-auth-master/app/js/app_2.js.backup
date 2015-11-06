// CRIA UMA NOVA INSTANCIA DO APP COM O ANGULARFIRE
var app = angular.module("app", ["firebase"]);

// Re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://lookit.firebaseio.com");
  return $firebaseAuth(ref);
});

app.controller("AuthCtrl", function($scope, $http, Auth) {
  // verifica autenticacao e suas mudancas
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;

    if (authData) {
      getRepos();
    }else {
      // alert("verme");
    }
  });

  // LOGIN COM FACEBOOK $scope pega o hmtl vinculado
  $scope.login = function() {
    Auth.$authWithOAuthPopup("facebook").catch(function(error) {
      console.error("Error authenticating with facebook:", error);
    });
  };
/*
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
*/
  // Logs out the logged-in user
  $scope.logout = function() {
    Auth.$unauth();
  };

  //metodo chamado na autenticação - logged-in user
  function getRepos() {

      // alert("logou viado");
      if (window.location.href == 'https://lookit.firebaseapp.com/')
      window.location.href = '/home.html';
  }
});
