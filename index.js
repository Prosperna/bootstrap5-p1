import blocks from "./src/blocks";

export default (editor, opts = {}) => {
  // Add the blocks to the editor
  const config = {
    blocks: [
      "section",
      "column1",
      "column2",
      "column3",
      "column4",
      "column5",
      "column6",
      "column2-10",
      "column3-9",
      "column4-8",
      "column5-7",
      "column7-5",
      "column8-4",
      "column9-3",
      "column10-2",
      "column2-8-2",
      "column8-2-2",
      "column2-2-8",
      "column3-6-3",
      "column6-3-3",
      "column3-3-6",
    ],
    flexGrid: false,
    stylePrefix: "gjs-", // default is 'gjs-'
    rowHeight: 300, // height of the cell
    ...opts, // override default options
  };

  blocks(editor, config);
};
