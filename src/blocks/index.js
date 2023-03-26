import column1p1Block from "./column1-p1";
import column2p1Block from "./column2-p1";

export default (editor, opts = {}) => {
  // Initialize the blocks
  column1p1Block(editor, opts);
  column2p1Block(editor, opts);

  // Add any other custom blocks here
};
