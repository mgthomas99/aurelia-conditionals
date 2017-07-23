# [aurelia-conditionals](https://www.npmjs.com/package/aurelia-conditionals)
Aurelia custom elements for conditional DOM construction.

Currently, Aurelia features a `show.bind` property that can be added to
HTML elements to conditionally decide whether an element should be
visible. For example, `<div show.bind="name === 'admin'></div>` would
create a HTML `div` element that is only visible when the `name` variable
is equal to `"admin"`.

However, Aurelia does not offer `else` syntax, meaning you will have to
write *two* `<div>` elements, each with their own `show.bind` properties,
where one negates the expression's result. This causes the expression to
be evaluated twice.

```
<div show.bind="name === 'admin'">
    You are an administrator!
</div>
<div show.bind="name !== 'admin'">
    You are not an administrator.
</div>
```

The `aurelia-conditionals` plugin solves this problem by providing a
`<conditional-if>` custom element, which utilises native HTML `<slot>`
elements to conditionally display data.

```
<conditional-if expression.bind="name === 'admin'">
    <div slot="true">
        You are an administrator!
    </div>
    <div slot="false">
        You are not an administrator.
    </div>
</conditional-if>
```

The advantage of the `<conditional-if>` is that the expression is
evaluated only once, and only needs to be written once.

## Install and Usage
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
