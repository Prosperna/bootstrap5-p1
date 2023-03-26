import block from "./block";
import settings from "./settings";

export default (editor, opts = {}) => {
  // Add the block to the editor
  editor.BlockManager.add("column1-p1", block(opts));

  // Add the block's settings panel to the editor
  editor.BlockManager.add("column1-p1-settings", settings(opts));
};
