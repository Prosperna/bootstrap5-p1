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
  canvas: {
    styles: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", // bootstrap styles
    ],
  },
});
```

In your css file, you can import the Bootstrap5-p1 CSS file to add the default styles for the blocks:

```css
@import "bootstrap5-p1/src/blocks/css/style.css";
```

Once the plugin is installed and added to your GrapesJS project, you can start using the custom blocks provided by the plugin.

## Components

| Block       | Description                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Section     | A container that can have the bootstrap class container or container fluid                                                                           |
| column1     | A bootstrap row with one column                                                                                                                      |
| column2     | A bootstrap row with two columns                                                                                                                     |
| column3     | A bootstrap row with three columns                                                                                                                   |
| column4     | A bootstrap row with four columns                                                                                                                    |
| column5     | A bootstrap row with five columns                                                                                                                    |
| column6     | A bootstrap row with six columns                                                                                                                     |
| column2-10  | A bootstrap row with two columns, the first column is 2/12 and the second column is 10/12 from the bootstrap grid system                             |
| column3-9   | A bootstrap row with two columns, the first column is 3/12 and the second column is 9/12 from the bootstrap grid system                              |
| column4-8   | A bootstrap row with two columns, the first column is 4/12 and the second column is 8/12 from the bootstrap grid system                              |
| column5-7   | A bootstrap row with two columns, the first column is 5/12 and the second column is 7/12 from the bootstrap grid system                              |
| column7-5   | A bootstrap row with two columns, the first column is 7/12 and the second column is 5/12 from the bootstrap grid system                              |
| column8-4   | A bootstrap row with two columns, the first column is 8/12 and the second column is 4/12 from the bootstrap grid system                              |
| column9-3   | A bootstrap row with two columns, the first column is 9/12 and the second column is 3/12 from the bootstrap grid system                              |
| column10-2  | A bootstrap row with two columns, the first column is 10/12 and the second column is 2/12 from the bootstrap grid system                             |
| column2-8-2 | A bootstrap row with three columns, the first column is 2/12, the second column is 8/12, and the third column is 2/12 from the bootstrap grid system |
| column8-2-2 | A bootstrap row with three columns, the first column is 8/12, the second column is 2/12, and the third column is 2/12 from the bootstrap grid system |
| column2-2-8 | A bootstrap row with three columns, the first column is 2/12, the second column is 2/12, and the third column is 8/12 from the bootstrap grid system |
| column3-6-3 | A bootstrap row with three columns, the first column is 3/12, the second column is 6/12, and the third column is 3/12 from the bootstrap grid system |
| column6-3-3 | A bootstrap row with three columns, the first column is 6/12, the second column is 3/12, and the third column is 3/12 from the bootstrap grid system |
| column3-3-6 | A bootstrap row with three columns, the first column is 3/12, the second column is 3/12, and the third column is 6/12 from the bootstrap grid system |

## Customization

You can customize the appearance of the Bootstrap5-p1 blocks by modifying the CSS and SCSS files included with the plugin. The SCSS files can be found in the src/scss directory, and the compiled CSS files can be found in the dist/css directory. You can modify these files to change the colors, fonts, and other visual properties of the blocks.

## License

Bootstrap5-p1 is licensed under the ISC license. See the LICENSE file for more information.
