/**
 * BLOCK: row1columns363
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
    label: "1 Row 3/6/3 Columns",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5C1 2.79086 2.79086 1 5 1H13V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FFBF00"/>
    <rect x="1.35254" y="1" width="24.4" height="64" rx="3" stroke="#5C5C5C" stroke-width="2"/>
    <rect x="90.3887" y="1" width="20.7765" height="64" rx="3" stroke="#5C5C5C" stroke-width="2"/>
    <rect x="28.7881" y="1" width="58.5647" height="64" rx="3" stroke="#5C5C5C" stroke-width="2"/>
    </svg>
              `,
    content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-6 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
  </div>
              ${`<style>
                  ${styleRow}
                  ${styleClm}
                </style>`}
              `,
  };

  return block;
};
