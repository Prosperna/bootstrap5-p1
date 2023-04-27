/**
 * BLOCK: row1columns3
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
    id: "column3",
    label: "<span>1 Row <br/> 3 Columns</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.35449 9C4.35449 6.79086 6.14535 5 8.35449 5H17.6878V60H8.35449C6.14535 60 4.35449 58.2091 4.35449 56V9Z" fill="#FFBF00"/>
      <rect x="4" y="6" width="27.2627" height="53" rx="3"   stroke-width="2"/>
      <rect x="42.2139" y="6" width="27.2627" height="53" rx="3"   stroke-width="2"/>
      <rect x="80.4268" y="6" width="27.2627" height="53" rx="3"   stroke-width="2"/>
      </svg>
      `,
    content: `<div ${attrsRow} class="gjs-row row" >
      <div ${attrsCell} class="gjs-cell col-sm position-relative"><div class="layout-placeholder"></div></div>
      <div ${attrsCell} class="gjs-cell col-sm position-relative"><div class="layout-placeholder"></div></div>
      <div ${attrsCell} class="gjs-cell col-sm position-relative"><div class="layout-placeholder"></div></div>
</div>
      ${`<style>
          ${styleRow}
          ${styleClm}
        </style>`}
      `,
  };

  return block;
};
