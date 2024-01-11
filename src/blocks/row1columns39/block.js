/**
 * BLOCK: row1columns39
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
    id: "1row ",
    label: "<span>1 Row <br/> 2 Columns 3/9</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5C1 2.79086 2.79086 1 5 1H13V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FFBF00"/>
    <rect x="1.35254" y="1" width="22.8471" height="64" rx="3"   stroke-width="2"/>
    <rect x="27.7529" y="1" width="83.4118" height="64" rx="3"   stroke-width="2"/>
    </svg>
        `,
    content: `<div ${attrsRow} class="gjs-row row" >
    <div ${attrsCell} class="gjs-cell col-sm col-md-3 col-lg-3 position-relative"></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-9 col-lg-9 position-relative"></div>
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
