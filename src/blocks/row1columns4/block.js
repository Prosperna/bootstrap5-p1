/**
 * BLOCK: row1columns4
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
    id: "column4",
    label: "1 Row 4 Columns",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.64648 9C3.64648 6.79086 5.43735 5 7.64648 5H13.6465V60H7.64648C5.43735 60 3.64648 58.2091 3.64648 56V9Z" fill="#F42F1F"/>
      <rect x="3" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
      <rect x="31.4697" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
      <rect x="59.9404" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
      <rect x="88.4111" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
      </svg>
      `,
    content: `<div ${attrsRow} class="gjs-row" >
      <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>
      <div ${attrsCell} class="gjs-cell col  position-relative"> <div class="layout-placeholder"></div></div>
      <div ${attrsCell} class="gjs-cell col  position-relative"> <div class="layout-placeholder"></div></div>
      <div ${attrsCell} class="gjs-cell col  position-relative"> <div class="layout-placeholder"></div></div>
      
    </div>
      ${`<style>
          ${styleRow}
          ${styleClm}
        </style>`}
      `,
  };

  return block;
};
