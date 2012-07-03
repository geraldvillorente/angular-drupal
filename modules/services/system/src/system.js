
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

