/**
 * BLOCK: row1columns2
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
    id: "column2",
    label: "<span>1 Row <br/> 1 Column</span>",
    media: `<svg class="custom-blocks" width="112" height="66" viewBox="0 0 112 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="7" width="13" height="51" fill="#2DA94F"/>
      <rect x="10" y="6" width="43" height="53" rx="3"   stroke-width="2"/>
      <rect x="59" y="6" width="42" height="53" rx="3"   stroke-width="2"/>
      </svg>
      `,
    content: `<div ${attrsRow} class="gjs-row row" >
      <div ${attrsCell} class="gjs-cell col-sm position-relative"><div class="layout-placeholder"></div></div>
      <div ${attrsCell} class="gjs-cell col-sm position-relative"> <div class="layout-placeholder"></div></div>
    </div>
      ${`<style>
          ${styleRow}
          ${styleClm}
        </style>`}
      `,
  };

  return block;
};
