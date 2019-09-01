## Observation

* example from book `Mastering Typescript 3 (Nathan Rozentals)`

## Setup

#### download dependencies

* project already created just download dependencies

```
npm install
```

#### start project

* start node project and download dependencies

```
npm init 
npm install -g webpack webpack-cli
npm install react react-dom bootstrap underscore
npm install webpack webpack ts-loader source-map-loader @types/underscore @types/react @types/react-dom --save-dev
```

* configuration of files `tsconfig.json` and `webpack.config.js`
    * use this page `https://createapp.dev/`
    * select main library 'React' and transpiler 'Typescript'


## Compile

* link our global version of typescript to the local project
* compile the code with the command

```
npm link typescript
webpack 
```
