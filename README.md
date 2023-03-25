# bootstrap5-p1

A custom GrapesJS plugin for Bootstrap 5.1.3.

## Installation

Install the package via npm:

```bash
npm install bootstrap5-p1
```

```javascript
import grapesjs from "grapesjs";
import bootstrap5P1 from "bootstrap5-p1";

const editor = grapesjs.init({
  // ...your GrapesJS configuration
  plugins: [bootstrap5P1],
  pluginsOpts: {
    [bootstrap5P1]: {
      // ...your plugin options
    },
  },
});
```

## Components

The plugin currently includes the following Bootstrap 5 components:

Container
Row
Column
You can extend the plugin to add more components if needed.

## License

ISC
