
/*
 * Angularjs service for interacting with Drupal's user resource
 */
angular.module('drupal.services').factory('userService',['$rootScope','$http','drupal.config','systemService', function($rootScope, $http, drupalConfig, systemService) {
    var user = {};
    var session_id = null;

    return {
        getUser : function () {
            return user;
        },
        login : function(username,password) {
            $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'user/login.json', data: {username: username, password: password}}).
                success(function(data, status, headers, config) {
                    user = data;
                    $rootScope.$broadcast('event:loginConfirmed');
                }).
                error(function(data, status, headers, config){
                    switch(status){
                        case 406:
                            //noinspection JSUnresolvedFunction
                            ping();
                            break;
                        case 401:
                        default:
                            user = { uid: 0 };
                            $rootScope.$broadcast('event:loginRequired');
                            break;
                    }
                });
        },
        logout : function() {
            $http({method: 'POST', url: drupalConfig.settings.service_endpoint + 'user/logout.json', data: {}}).
                success(function(data, status, headers, config) {
                    user = data;
                    $rootScope.$broadcast('event:logoutConfirmed');
                });
        },
        ping : function() {
            systemService.connect().then(function(response) {
                user = response.data.user;
                session_id = response.data.sessid;
                $rootScope.$broadcast('drupal:UserUpdated');
            });
        },
        authenticated : function() {
            if(user.uid > 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}]);

