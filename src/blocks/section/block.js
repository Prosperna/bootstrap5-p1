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
    label: "<span>Section</span>",
    media: `<svg class="custom-blocks" width="93" height="55" viewBox="0 0 93 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="91.9522" height="54"  stroke-dasharray="2 2"/>
      </svg>
      `,

    content: `
    <section data-gjs-droppable="true" data-gjs-resizable="true" data-gjs-name="Section" class="gjs-section position-relative " id="section" >
    <div class="gjs-container container" id="container" data-gjs-resizable="false" data-gjs-draggable="false" data-gjs-name="Container"></div>
    </section>
      ${`<style>
          ${styleRow}
          ${styleClm}
          #section {
            padding-top: 50px;
            padding-bottom: 50px;
          }
         </style>`}
      `,
  };

  return block;
};
