JS_SRC_FILES = $(shell find modules -type f -path '*/src/*.js')

all: build

js: 
	cat common/src/*.js ${JS_SRC_FILES} > build/angular-drupal.js
	uglifyjs -o build/angular-drupal.min.js --no-mangle --no-squeeze build/angular-drupal.js
		
build: js

.PHONY: all js build