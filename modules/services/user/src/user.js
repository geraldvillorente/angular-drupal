
/*
 * Angularjs service for interacting with Drupal's user resource
 */
angular.module('drupal.services').factory('userService',['$rootScope','$http','drupal.config','systemService', function($rootScope, $http, drupalConfig, systemService) {
    var user = {};
    var session_id = null;

    setUser = function(u) {
      user = u;
      $rootScope.$broadcast('drupal:UserUpdated');
    }

    setSessionId = function(sessid) {
      session_id = sessid;
    }

    return {
        getUser : function () {
            return user;
        },
        login : function(username,password) {
            return $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'user/login.json', data: {username: username, password: password}}).
              success(function(data, status, headers, config) {
                setUser(data.user);
              });
        },
        logout : function() {
            $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'user/logout.json', data: {}}).
                success(function(data, status, headers, config) {
                    setUser(data);
                });
        },
        ping : function() {
            systemService.connect().then(function(response) {
                setUser(response.data.user);
                setSessionId(response.data.sessid);
            });
        },
        authenticated : function() {
          if(user.uid > 0){
            return true;
          }
          else {
            return false;
          }
        }
    }
}]);

