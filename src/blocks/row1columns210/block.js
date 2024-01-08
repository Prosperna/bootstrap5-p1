/**
 * BLOCK: row1columns210
 * @param {Object} opts - Global block options
 * @param {Object} blockProps - Specific block options
 * @return {Object} - Block object
 */
export default (opts = {}, blockProps) => {
  const { ...defaultOpts } = opts;
  const { attrsRow, attrsCell, styleRow, styleClm, category, select } =
    blockProps;

  const block = {
    category: category,
    select: select,
    id: "1row ",
    label: "<span>1 Row<br/>2 Columns 2/10</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9C9 6.79086 10.7909 5 13 5H16V60H13C10.7909 60 9 58.2091 9 56V9Z" fill="#2DA94F"/>
    <rect x="9" y="6" width="12.6667" height="53" rx="3" stroke-width="2"/>
    <rect x="27.6348" y="6" width="75.6471" height="53" rx="3"  stroke-width="2"/>
    </svg>    
              `,
    content: `<div ${attrsRow} class="gjs-row row" >
      <div ${attrsCell} class="gjs-cell col-sm col-md-2 col-lg-2 position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-10 col-lg-10 position-relative"></div>
    </div>
              ${`<style>
                  ${styleRow}
                  ${styleClm}
                </style>`}
              `,
  };

  return block;
};
