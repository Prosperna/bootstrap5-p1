/**
 * BLOCK: row1columns633
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
    label: "<span>1 Row <br/> 3 Columns 6/3/3</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="62.9531" y="1" width="24.4" height="64" rx="3"   stroke-width="2"/>
    <rect x="90.3887" y="1" width="20.7765" height="64" rx="3"   stroke-width="2"/>
    <rect x="1.35254" y="1" width="58.5647" height="64" rx="3"   stroke-width="2"/>
    <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#F42F1F"/>
    </svg>
              `,
    content: `<div ${attrsRow} class="gjs-row row bs-row" >
    <div ${attrsCell} class="gjs-cell col-sm col-md-6 col-lg-6 position-relative bs-column"></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-3 col-lg-3 position-relative bs-column"></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-3 col-lg-3 position-relative bs-column"></div>
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
