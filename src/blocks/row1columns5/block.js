/**
 * BLOCK: row1columns5
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
    id: "column5",
    label: "<span>1 Row <br/> 5 Columns</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.64648 9C2.64648 6.79086 4.43735 5 6.64648 5H11.8132V60H6.64648C4.43735 60 2.64648 58.2091 2.64648 56V9Z" fill="#FF007A"/>
      <rect x="3" y="6" width="15.6863" height="53" rx="3"   stroke-width="2"/>
      <rect x="25.7754" y="6" width="15.2549" height="53" rx="3"   stroke-width="2"/>
      <rect x="48.5527" y="6" width="15.2549" height="53" rx="3"   stroke-width="2"/>
      <rect x="71.3291" y="6" width="15.2549" height="53" rx="3"   stroke-width="2"/>
      <rect x="93.5879" y="6" width="15.6863" height="53" rx="3"   stroke-width="2"/>
      </svg>
      `,
    content: `<div ${attrsRow} class="gjs-row row" >
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-6 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-6 col-lg position-relative"></div>

    </div>
      ${`<style>
          ${styleRow}
          ${styleClm}
        </style>`}
      `,
  };

  return block;
};
