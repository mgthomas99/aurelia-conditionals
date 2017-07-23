# aurelia-conditionals
Aurelia custom elements for conditional DOM construction.

## Usage
### Aurelia CLI
`npm install aurelia-conditionals --save`

Then, in your `aurelia_project/aurelia.json` file, add the following
to your dependencies table:
```
{
    "name": "aurelia-conditionals",
    "path": "../node_modules/aurelia-conditionals/dist/amd",
    "main": "index"
}
```

## Build
`npm install`

`npm test`

The project will be built for `commonjs` and `es2015`, and `amd` for
Aurelia CLI project compatibility.
