
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

