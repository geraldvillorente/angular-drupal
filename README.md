# Angular.js - Drupal Contributions

***

An Angularjs module to assist with REST calls to a Drupal7 with Services3.x exposing a REST_SERVER

I am in still in the early stages of getting to grips with Angularjs so the approach I use here may not be the best approach or even the correct approach.
All suggestions/criticism welcome.

Currently only the user and system service calls have been implemented, I intend to complete calls for the standard Services3.x resources i.e. node, comment, file, taxonomy_term, taxonomy_vocabulary
and the views resource (http://drupal.org/project/services_views).

***
## Usage

### Requirements

* **AngularJs v1.0.1rc?** is currently required.

### Installation

The repository comes with the modules pre-built and compressed into the build directory.

1. Include the javascript files - angular-drupal.js or angular-drupal.min.js  
2. Add a dependency to the drupal module in your angular application module:
3. Configure module with drupal path and service endpoint path
```javascript
angular.module('myApp', ['drupal']).
  value('drupal.config', {
    settings: {
      base_path: 'http://path_to_drupal/',
      service_endpoint: 'http://path_to_drupal/service_endpoint/'
    }
  })
```

The modules can be found in the [Services](https://github.com/dineshcooper/angular-drupal/tree/master/modules/services) 

## Building

You do not need to build the project to use it - see above - but if you are hacking on it then this is what you need to know.

### Requirements

Install UglifyJS:

```bash
$ [sudo] npm install uglify-js -g  
```

### Build/Compress

```bash
$ make build
```

## Testing

**TODO:** Add tests

# Template

**TODO:** specify template for service contributions
