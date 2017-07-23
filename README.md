# aurelia-conditionals
Aurelia custom elements for conditional DOM construction.
Currently, the plugin adds a custom element which acts as a conditional
`if` statement, which binds to an expression and displays the appropriate
data.

```
<conditional-if expression.bind="user.administrator">
    <div slot="true">
        You are an administrator!
    </div>
    <div slot="false">
        <!-- Not an administrator. -->
        Welcome back, ${user.name}!
    </div>
</conditional-if>
```

The advantage of using the `<conditional-if>` element over using
`show.bind="expression"` is that you do not have to write the expression
twice.

## Usage
`npm install aurelia-conditionals --save`

Then, in `src/main#configure()`, add the following line:

`aurelia.use.plugin("aurelia-conditionals");`

If you are using the Aurelia CLI, add the following to
your `aurelia_project/aurelia.json` dependencies table:
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
