
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