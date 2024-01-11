/**
 * BLOCK: row1columns6
 * @param {Object} opts - Global block options
 * @param {Object} blockProps - Specific block options
 * @return {Object} - Block object
 */
export default (opts = {}, blockProps) => {
  const { ...defaultOpts } = opts;
  const {
    attrsRow,
    attrsCell,
    styleRow,
    styleClm,
    styleCustom,
    category,
    select,
  } = blockProps;

  const block = {
    category: category,
    select: select,
    id: "column2",
    label: "<span>1 Row <br/> 6 Columns</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9C3 6.79086 4.79086 5 7 5H10V60H7C4.79086 60 3 58.2091 3 56V9Z" fill="#3871E0"/>
      <rect x="3" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
      <rect x="21.6357" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
      <rect x="40.7891" y="6" width="12.2353" height="53" rx="3"   stroke-width="2"/>
      <rect x="59.4238" y="6" width="12.2353" height="53" rx="3"   stroke-width="2"/>
      <rect x="78.0596" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
      <rect x="97.2119" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
      </svg>
      `,
    content: `<div ${attrsRow} class="gjs-row row" >
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-4 col-lg position-relative"></div>
    </div>
      ${`<style>
          ${styleRow}
          ${styleClm}
          ${styleCustom}
        </style>`}
      `,
  };

  return block;
};
