
/*
 * @module drupal
 * Bind modules
 * (based on how it's done in angular-ui)
 */
angular.module('drupal.services', ['ngResource']);
angular.module('drupal.directives', []);
angular.module('drupal',[
    'drupal.services',
    'drupal.directives'
]).value('ui.config', {});


/*
 * Angularjs service for interacting with Drupal's system resource
 */
angular.module('drupal.services').factory('systemService',['$rootScope','$http','$resource','drupal.config', function($rootScope, $http, $resource, drupalConfig) {

    return {
        connect : function() {
            return $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'system/connect.json', data: {}}).then(function(response) {
                return response;
            });
        },
        get_variable : function(variable, default_value) {
            return $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'system/get_variable.json', data: {name: variable}}).then(function(response) {
                return response;
            });
        },
        set_variable : function(variable,value) {
            return $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'system/set_variable.json', data: {name: variable, value: value}}).then(function(response) {
                return response;
            });
        },
        del_variable : function(variable) {
            return $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'system/del_variable.json', data: {name: variable}}).then(function(response) {
                return response;
            });
        }
    }
}]);


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


/*
 * Angularjs service for interacting with Drupal's taxonomy term resource
 */
angular.module('drupal.services').factory('taxonomyTermService',['$rootScope','$http','drupal.config', function($rootScope, $http, drupalConfig) {
}]);


/*
 * Angularjs service for interacting with Drupal's taxonomy vocabulary resource
 */
angular.module('drupal.services').factory('taxonomyVocabularyService',['$rootScope','$http','drupal.config', function($rootScope, $http, drupalConfig) {
}]);


/*
 * Angularjs service for interacting with Drupal's views resource (services_views module)
 */
angular.module('drupal.services').factory('viewsService',['$rootScope','$http','drupal.config', function($rootScope, $http, drupalConfig) {
}]);


/*
 * Angularjs service for interacting with Drupal's comment resource
 */
angular.module('drupal.services').factory('commentService',['$rootScope','$http','drupal.config', function($rootScope, $http, drupalConfig) {
}]);


/*
 * Angularjs service for interacting with Drupal's node resource
 */
angular.module('drupal.services').factory('nodeService',['$rootScope','$http','drupal.config', function($rootScope, $http, drupalConfig) {
    return {
        retrieve : function() {

        },
        create : function() {

        },
        update : function() {

        },
        delete : function() {

        },
        index : function() {

        },
        files : function() {

        }
    }
}]);


/*
 * Angularjs service for interacting with Drupal's file resource
 */
angular.module('drupal.services').factory('fileService',['$rootScope','$http','drupal.config', function($rootScope, $http, drupalConfig) {
}]);

