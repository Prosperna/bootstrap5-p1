import block from './block'


export default (editor, opts = {}, blockProps) => {
    // Add the block to the editor
    editor.BlockManager.add("section", block(opts, blockProps));
  

  };
  