# {{_ "startCase" name}}

{{description}}

## Install

```sh
npm install --save {{#scoped}}@{{owner}}/{{/scoped}}{{name}}
```

## Usage

#### Options

This plugin uses the following options object:

```js
{}
```

#### Configuration

Add this plugin to a command:

```js
const {{_ "camelCase" name}} = require ( '{{#scoped}}@{{owner}}/{{/scoped}}{{name}}' );

module.exports = {
  commands: {
    'my-command': [
      {{_ "camelCase" name}} ({ /* YOUR OPTIONS */ })
    ]
  }
}
```

## License

MIT © {{author}}
