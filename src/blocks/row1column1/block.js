/**
 * BLOCK: row1column1
 * @param {Object} opts - Global block options
 * @param {Object} blockProps - Specific block options
 * @return {Object} - Block object
 */
export default (opts = {}, blockProps) => {
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
    id: "column1",
    label: "<span>1 Row <br/> 1 Column</span>",
    media: `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 9C11 6.79086 12.7909 5 15 5H31V60H15C12.7909 60 11 58.2091 11 56V9Z" fill="#3871E0"/>
      <rect x="11" y="6" width="90" height="53" rx="3"   stroke-width="2"/>
      </svg>
      `,
    content: `<div ${attrsRow} class="gjs-row row bs-row" >
      <div ${attrsCell} class="gjs-cell col position-relative bs-column"></div>
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
