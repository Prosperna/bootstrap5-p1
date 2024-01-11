/**
 * BLOCK: row1columns282
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
    label: "<span>1 Row <br/> 3 Columns 2/8/2</span>",
    media: `<svg class="custom-blocks" width="114" height="66" viewBox="0 0 114 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5C0 2.79086 1.79086 1 4 1H9V64H4C1.79086 64 0 62.2091 0 60V5Z" fill="#FF007A"/>
    <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 111.647 0)"   stroke-width="2"/>
    <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 15.5996 0)"   stroke-width="2"/>
    <rect x="-1" y="1" width="72.5412" height="64" rx="3" transform="matrix(-1 0 0 1 92.541 0)"   stroke-width="2"/>
    </svg>
              `,
    content: `<div ${attrsRow} class="gjs-row row" >
    <div ${attrsCell} class="gjs-cell col-sm col-md-2 col-lg-2 position-relative"></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-8 col-lg-8 position-relative"></div>
    <div ${attrsCell} class="gjs-cell col-sm col-md-2 col-lg-2 position-relative"></div>
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
