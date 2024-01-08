/**
 * BLOCK: row1columns57
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
    label: "<span>1 Row <br/> 2 Columns 5/7</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5C1 2.79086 2.79086 1 5 1H23V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FF007A"/>
    <rect x="1.35254" y="1" width="44.0706" height="64" rx="3"   stroke-width="2"/>
    <rect x="48.9766" y="1" width="62.1882" height="64" rx="3"   stroke-width="2"/>
    </svg>
          `,
    content: `<div ${attrsRow} class="gjs-row row" >
      <div ${attrsCell} class="gjs-cell col-sm col-md-5 col-lg-5 position-relative"></div>
      <div ${attrsCell} class="gjs-cell col-sm col-md-7 col-lg-7 position-relative"></div>
    </div>
          ${`<style>
              ${styleRow}
              ${styleClm}
            </style>`}
          `,
  };

  return block;
};
