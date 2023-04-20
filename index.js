import blocks from "./src/blocks";

export default (editor, opts = {}) => {

  // Add the custom block to the editor

  const config = {
    blocks: [
      'section',
      'column1',
      'column2',
      'column3',
      'column4',
      'column5',
      'column6',
      'column2-10',
      'column3-9',
      'column4-8',
      'column5-7',
      'column7-5',
      'column8-4',
      'column9-3',
      'column10-2',
      'column2-8-2',
      'column8-2-2',
      'column2-2-8',
      'column3-6-3',
      'column6-3-3',
      'column3-3-6',
    ],
    flexGrid: true,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Layout',
    labelSection: 'Section',
    labelColumn1: '1 Row 1 Column',
    labelColumn2: '1 Row 2 Columns',
    labelColumn3: '1 Row 3 Columns',
    labelColumn4: '1 Row 4 Columns',
    labelColumn5: '1 Row 5 Columns',
    labelColumn6: '1 Row 6 Columns',
    labelColumn210: '1 Row 2/10 Columns',
    labelColumn39: '1 Row 3/9 Columns',
    labelColumn48: '1 Row 4/8 Columns',
    labelColumn57: '1 Row 5/7 Columns',
    labelColumn75: '1 Row 7/5 Columns',
    labelColumn84: '1 Row 8/4 Columns',
    labelColumn93: '1 Row 9/3 Columns',
    labelColumn102: '1 Row 10/2 Columns',
    labelColumn282: '2 Rows 2/8/2 Columns',
    labelColumn822: '2 Rows 8/2/2 Columns',
    labelColumn228: '2 Rows 2/2/8 Columns',
    labelColumn363: '3 Rows 3/6/3 Columns',
    labelColumn633: '3 Rows 6/3/3 Columns',
    labelColumn336: '3 Rows 3/3/6 Columns',
    labelText: 'Text',
    labelLink: 'Link',
    labelImage: 'Image',
    labelVideo: 'Video',
    labelMap: 'Map',
    rowHeight: 300,
    ...opts
  };

  blocks(editor, config);
};
