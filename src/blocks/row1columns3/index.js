import block from "./block.js";

/**
 * Add the block to the editor
 * @param {Editor} editor - Grapes JS Editor instance
 * @param {Object} opts - Global block options
 * @param {Object} blockProps - Specific block options
 */

export default (editor, opts = {}, blockProps) => {
  // Add the block to the editor
  editor.BlockManager.add("column3", block(opts, blockProps));
};
