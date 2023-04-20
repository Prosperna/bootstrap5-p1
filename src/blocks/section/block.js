/**
 * BLOCK: Section
 * @param {Object} opts - Global block options
 * @param {Object} blockProps - Specific block options
 * @return {Object} - Block object
 */
export default (opts = {}, blockProps) => {
  const { attrsRow, attrsCell, styleRow, styleClm, category, select } =
    blockProps;

  const block = {
    category: category,
    select: select,
    id: "Section",
    label: "Section",
    media: `<svg class="custom-blocks" width="93" height="55" viewBox="0 0 93 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="91.9522" height="54" stroke="#5C5C5C" stroke-dasharray="2 2"/>
      </svg>
      `,

    content: `
      <section ${attrsRow} class="gjs-section" id="container">
      <div data-gjs-type="container" class="gjs-container">      
      </div>
    </section>
      ${`<style>
          ${styleRow}
          ${styleClm}
          .gjs-container {
            min-height: 300px;
          }
         </style>`}
      `,
  };

  return block;
};
