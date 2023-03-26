import block from "./block";
import settings from "./settings";
import "./style.scss";

export default (editor, opts = {}) => {
  // Add the block to the editor
  editor.BlockManager.add("column2-p1", block(opts));

  // Add the block's settings panel to the editor
  editor.BlockManager.add("column2-p1-settings", settings(opts));
};
