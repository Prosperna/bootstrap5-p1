/**
 * BLOCK: row1columns228
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
    label: "1 Row 2/2/8 Columns",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.35254" y="1" width="15.6" height="64" rx="3"   stroke-width="2"/>
    <path d="M1 5C1 2.79086 2.79086 1 5 1H9V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#2DA94F"/>
    <rect x="19.9883" y="1" width="15.6" height="64" rx="3"   stroke-width="2"/>
    <rect x="38.623" y="1" width="72.5412" height="64" rx="3"   stroke-width="2"/>
    </svg>
              `,
    content: `<div ${attrsRow} class="gjs-row row" >
    <div ${attrsCell} class="gjs-cell col-sm col-md-2 col-lg-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-2 col-lg-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-8 col-lg-8 position-relative"><div class="layout-placeholder"></div></div>
  </div>
              ${`<style>
                  ${styleRow}
                  ${styleClm}
                </style>`}
              `,
  };

  return block;
};
