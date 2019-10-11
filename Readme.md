
Notes Typescript
====================

## code examples 

* some are from 'Mastering Typescript 3 (Nathan Rozentals)'
* also  https://www.typescriptlang.org/docs/home.html

## setup

* install typescrip globally

```
npm install --global typescript
tsc -v
```

* traspile source

```
tsc file.ts
```

* traspile source and specify the output directory

```
tsc file.ts --out ../dist/file.js
```

* initialize typescript project

```
tsc --init
```

## install declaration files

* example using npm and @types

```
npm install underscore
npm install @types/underscore
```

## using ts-node

* to compile and run typescript code use ts-node

```
npm install --global ts-node
ts-node file.ts
```

## Remove packages

* remove global package

```
npm -g rm typescript
npm -g rm ts-node
```

## Jasmine

* behavior-driven javascript testing framework

```
npm install -g jasmine
npm install @types/jasmine --save-dev
npm install jasmine-reporters --save-dev
```

* jasmine-reporters: allow modified the output of each test suite given more datails.
    * setup example: 8.0-jasmine/spec/helpers/attachTapReporter.js
* ejecutar test

```
jasmine init
//ó
jasmine
```

* settings en `spec/support/jasmine.json`

```
{
  "spec_dir": "spec",   /* test folder*/
  "spec_files": [       
    "**/*[sS]pec.js"    /*test file definition*/ 
  ], 
  "helpers": [ 
    "helpers/**/*.js"   /* helpers methods*/ 
  ], 
  "stopSpecOnExpectationFailure": false,    /*dont stop if are some failure*/
  "random": true        /*run test in random order*/
}
```

### typescript + jasmine 

* run test (8.0 jasmine)
  * require use jasmine installed in directory (not globally)

```
ts-node node_modules/jasmine/bin/jasmine
```

* script added into package.json

```
npm test
```

### jasmine HTML-based test

* install dependencies
* code example
  * 8.0-jasmine/SpecRunner.html
  * 8.0-jasmine/ html_spec/HtmlTests.spec.js

```
npm install jquery jasmine-jquery --save-dev
```

TODO
=========

* check file [TODO.md](./TODO.md)

