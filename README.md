# bootstrap5-p1

Bootstrap5-p1 is a GrapesJS plugin that provides a set of custom blocks based on Bootstrap 5.1.3. The plugin includes a variety of blocks for creating responsive layouts, including rows, columns, and more.

## Installation

Install the package via npm:

```bash
npm install bootstrap5-p1
```

## Usage

To use the Bootstrap5-p1 plugin in your GrapesJS project, you can import it as a module and pass it to the plugins option when initializing the editor. Here's an example:

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

Once the plugin is installed and added to your GrapesJS project, you can start using the custom blocks provided by the plugin.

## Components

### Blocks

Here's a list of all the custom blocks included in the Bootstrap5-p1 plugin:
Row
The Row block creates a Bootstrap row that can contain one or more Column blocks. The row can be customized with additional classes and styles.

Column1-p1
The Column1-p1 block creates a single-column layout that can be customized with additional classes and styles.

Column2-p1
The Column2-p1 block creates a two-column layout with equal width that can be customized with additional classes and styles.

Column3-p1
The Column3-p1 block creates a three-column layout with equal width that can be customized with additional classes and styles.

Column4-p1
The Column4-p1 block creates a four-column layout with equal width that can be customized with additional classes and styles.

Column5-p1
The Column5-p1 block creates a five-column layout with equal width that can be customized with additional classes and styles.

## Customization

You can customize the appearance of the Bootstrap5-p1 blocks by modifying the CSS and SCSS files included with the plugin. The SCSS files can be found in the src/scss directory, and the compiled CSS files can be found in the dist/css directory. You can modify these files to change the colors, fonts, and other visual properties of the blocks.

## License

Bootstrap5-p1 is licensed under the MIT license. See the LICENSE file for more information.
