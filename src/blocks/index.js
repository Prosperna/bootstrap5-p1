
export default (editor, opts) => {

  // Add any other custom blocks here
  const bm = editor.BlockManager;
  const { category, blocks, stylePrefix, flexGrid, rowHeight, addBasicStyle } = opts;
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow =  `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }`

  const styleClm =`
    .${clsCell} {
      min-height: ${rowHeight}px;
    }`

  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim
  };
  const resizerRight = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step
  };

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  if (flexGrid) {
    resizerRight.keyWidth = 'flex-basis';
  }

  editor.DomComponents.addType('layout-placeholder', {
    isComponent: el => el.classList && el.classList.contains('layout-placeholder'),
    model: {
      defaults: {
        tagName: 'div',
        draggable: false,
        droppable: false,
        stylable: false,
        highlightable: false,
        components: `<div class="layout-placeholder-container">
     
        <svg class="d-block mx-auto" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="#3871E0"/>
    <path d="M23.875 35.5V26.125H14.5V23.875H23.875V14.5H26.125V23.875H35.5V26.125H26.125V35.5H23.875Z" fill="white"/>
    </svg>
        <p class="font-weight-bold">Drag a block here</p>
      </div>`,
      styles: `.layout-placeholder {
        display: none;
        pointer-events: none;
        position: absolute;
        width: fit-content;
      }
      .layout-placeholder:only-child {
        width: fit-content;
        left: 30%;
        top: 40%;
        display: block;
      }
`
      },
      
    },
  });



  const rowAttr = {
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'Row'
  };

  const colAttr = {
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': 'Cell'
  };

  if (flexGrid) {
    colAttr['data-gjs-unstylable'] = ['width'];
    colAttr['data-gjs-stylable-require'] = ['flex-basis'];
  }

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on(
    'selector:add',
    selector =>
      privateCls.indexOf(selector.getFullName()) >= 0 &&
      selector.set('private', 1)
  );


  const attrsToString = (attrs) => {
    const result = [];

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
    }

    return result.length ? ` ${result.join(' ')}` : '';
  };

  const toAdd = (name) => blocks.indexOf(name) >= 0;
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);
  const commonBlockProps = {
    category,
    select: true,
  };

  toAdd('section') &&
  bm.add('section', {
    ...commonBlockProps,
    label: opts.labelSection,
    media:  `<svg width="93" height="55" viewBox="0 0 93 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="91.9522" height="54" stroke="#5C5C5C" stroke-dasharray="2 2"/>
    </svg>
    `,
    content: `<section ${attrsRow} class="gjs-section">
    <div  class="gjs-container">
    <div class="empty-state">
    
    </div>
  </section>
    ${
      addBasicStyle
        ? `<style>
        ${styleRow}
        ${styleClm}
        .gjs-container {
          min-height: 300px;
        }
          </style>`
        : ''
    }`
  });

  toAdd('column1') &&
  bm.add('column1', {
    ...commonBlockProps,
    label: opts.labelColumn1,
    media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9C11 6.79086 12.7909 5 15 5H31V60H15C12.7909 60 11 58.2091 11 56V9Z" fill="#3871E0"/>
    <rect x="11" y="6" width="90" height="53" rx="3"   stroke-width="2"/>
    </svg>
    
    `,
    content: `<div ${attrsRow} class="gjs-row">
    <div ${attrsCell} class="gjs-cell col position-relative">
    <div data-gjs-draggable="false" class="empty align-items-center position-absolute ">
     
      <svg class="d-block mx-auto" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="25" cy="25" r="25" fill="#3871E0"/>
  <path d="M23.875 35.5V26.125H14.5V23.875H23.875V14.5H26.125V23.875H35.5V26.125H26.125V35.5H23.875Z" fill="white"/>
  </svg>
      <p class="font-weight-bold">Drag a block here</p>
    </div>
  </div>
    ${
      addBasicStyle
        ? `<style>
        ${styleRow}
        ${styleClm}
        .empty {
          display: none;
          pointer-events: none
        }
        .empty:only-child {
          width: fit-content;
          left: 50%;
          top: 40%;
          display: block
        }

          </style>`
        : ''
    }`
  });

toAdd('column2') &&
  bm.add('column2', {
    ...commonBlockProps,
    label: opts.labelColumn2,
    media:  `<svg class="custom-blocks" width="112" height="66" viewBox="0 0 112 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="7" width="13" height="51" fill="#2DA94F"/>
    <rect x="10" y="6" width="43" height="53" rx="3"   stroke-width="2"/>
    <rect x="59" y="6" width="42" height="53" rx="3"   stroke-width="2"/>
    </svg>
    `,
    content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col  position-relative"> <div class="layout-placeholder"></div></div>
  </div>
    ${
      addBasicStyle
        ? `<style>
        ${styleRow}
        ${styleClm}
      </style>`
        : ''
    }`
  });

toAdd('column3') &&
  bm.add('column3', {
    ...commonBlockProps,
    label: opts.labelColumn3,
    media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.35449 9C4.35449 6.79086 6.14535 5 8.35449 5H17.6878V60H8.35449C6.14535 60 4.35449 58.2091 4.35449 56V9Z" fill="#FFBF00"/>
    <rect x="4" y="6" width="27.2627" height="53" rx="3"   stroke-width="2"/>
    <rect x="42.2139" y="6" width="27.2627" height="53" rx="3"   stroke-width="2"/>
    <rect x="80.4268" y="6" width="27.2627" height="53" rx="3"   stroke-width="2"/>
    </svg>
    `,
    content: `<div ${attrsRow} class="gjs-row" >
        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

  </div>
    ${
      addBasicStyle
        ? `<style>
        ${styleRow}
        ${styleClm}
      </style>`
        : ''
    }`
  });
toAdd('column4') && bm.add('column4', {
    ...commonBlockProps,
    label: opts.labelColumn4,
    media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.64648 9C3.64648 6.79086 5.43735 5 7.64648 5H13.6465V60H7.64648C5.43735 60 3.64648 58.2091 3.64648 56V9Z" fill="#F42F1F"/>
    <rect x="3" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
    <rect x="31.4697" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
    <rect x="59.9404" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
    <rect x="88.4111" y="6" width="20" height="53" rx="3"   stroke-width="2"/>
    </svg>
    `,
    content: `<div ${attrsRow} class="gjs-row" >
        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

  </div>
    ${
      addBasicStyle

        ? `<style>
        ${styleRow}
        ${styleClm}
      </style>`
        : ''
    }`
  });
  toAdd('column5') && bm.add('column5', {
    ...commonBlockProps,
    label: opts.labelColumn5,
    media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.64648 9C2.64648 6.79086 4.43735 5 6.64648 5H11.8132V60H6.64648C4.43735 60 2.64648 58.2091 2.64648 56V9Z" fill="#FF007A"/>
    <rect x="3" y="6" width="15.6863" height="53" rx="3"   stroke-width="2"/>
    <rect x="25.7754" y="6" width="15.2549" height="53" rx="3"   stroke-width="2"/>
    <rect x="48.5527" y="6" width="15.2549" height="53" rx="3"   stroke-width="2"/>
    <rect x="71.3291" y="6" width="15.2549" height="53" rx="3"   stroke-width="2"/>
    <rect x="93.5879" y="6" width="15.6863" height="53" rx="3"   stroke-width="2"/>
    </svg>
    `,
    content: `<div ${attrsRow} class="gjs-row" >
        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

  </div>
    ${
      addBasicStyle

        ? `<style>
        ${styleRow}
        ${styleClm}
      </style>`
        : ''
    }`
  });
  toAdd('column6') && bm.add('column6', {
    ...commonBlockProps,
    label: opts.labelColumn6,
    media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9C3 6.79086 4.79086 5 7 5H10V60H7C4.79086 60 3 58.2091 3 56V9Z" fill="#3871E0"/>
    <rect x="3" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
    <rect x="21.6357" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
    <rect x="40.7891" y="6" width="12.2353" height="53" rx="3"   stroke-width="2"/>
    <rect x="59.4238" y="6" width="12.2353" height="53" rx="3"   stroke-width="2"/>
    <rect x="78.0596" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
    <rect x="97.2119" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
    </svg>
    `,
    content: `<div ${attrsRow} class="gjs-row" >
        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

        <div ${attrsCell} class="gjs-cell col position-relative"><div class="layout-placeholder"></div></div>

  </div>
    ${
      addBasicStyle

        ? `<style>
        ${styleRow}
        ${styleClm}
      </style>`
        : ''
    }`
  });

  
toAdd('column2-10') &&
bm.add('column2-10', {
  ...commonBlockProps,
  label: opts.labelColumn210,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 9C9 6.79086 10.7909 5 13 5H16V60H13C10.7909 60 9 58.2091 9 56V9Z" fill="#2DA94F"/>
  <rect x="9" y="6" width="12.6667" height="53" rx="3"   stroke-width="2"/>
  <rect x="27.6348" y="6" width="75.6471" height="53" rx="3"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-10 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column3-9') &&
bm.add('column3-9', {
  ...commonBlockProps,
  label: opts.labelColumn39,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H13V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FFBF00"/>
  <rect x="1.35254" y="1" width="22.8471" height="64" rx="3"   stroke-width="2"/>
  <rect x="27.7529" y="1" width="83.4118" height="64" rx="3"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-9 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column4-8') &&
bm.add('column4-8', {
  ...commonBlockProps,
  label: opts.labelColumn48,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#F42F1F"/>
  <rect x="1.35352" y="1" width="34.2353" height="64" rx="3"   stroke-width="2"/>
  <rect x="39.1416" y="1" width="72.0235" height="64" rx="3"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-4 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-8 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column5-7') &&
bm.add('column5-7', {
  ...commonBlockProps,
  label: opts.labelColumn57,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H23V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FF007A"/>
  <rect x="1.35254" y="1" width="44.0706" height="64" rx="3"   stroke-width="2"/>
  <rect x="48.9766" y="1" width="62.1882" height="64" rx="3"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-5 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-7 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column7-5') &&
bm.add('column7-5', {
  ...commonBlockProps,
  label: opts.labelColumn75,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#3871E0"/>
  <rect x="-1" y="1" width="44.0706" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="62.1882" height="64" rx="3" transform="matrix(-1 0 0 1 63.0234 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-7 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-5 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column8-4') &&
bm.add('column8-4', {
  ...commonBlockProps,
  label: opts.labelColumn84,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#2DA94F"/>
  <rect x="-1" y="1" width="34.2353" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="72.0235" height="64" rx="3" transform="matrix(-1 0 0 1 72.8584 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-8 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-4 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column9-3') &&
bm.add('column9-3', {
  ...commonBlockProps,
  label: opts.labelColumn93,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FFBF00"/>
  <rect x="-1" y="1" width="22.8471" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="83.4118" height="64" rx="3" transform="matrix(-1 0 0 1 84.2471 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-9 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column10-2') &&
bm.add('column10-2', {
  ...commonBlockProps,
  label: opts.labelColumn102,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#F42F1F"/>
  <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="91.1765" height="64" rx="3" transform="matrix(-1 0 0 1 92.0117 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-10 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column2-8-2') &&
bm.add('column2-8-2', {
  ...commonBlockProps,
  label: opts.labelColumn282,
  media:  `<svg class="custom-blocks" width="114" height="66" viewBox="0 0 114 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 5C0 2.79086 1.79086 1 4 1H9V64H4C1.79086 64 0 62.2091 0 60V5Z" fill="#FF007A"/>
  <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 111.647 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 15.5996 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="72.5412" height="64" rx="3" transform="matrix(-1 0 0 1 92.541 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-8 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column8-2-2') &&
bm.add('column8-2-2', {
  ...commonBlockProps,
  label: opts.labelColumn822,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#3871E0"/>
  <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="15.6" height="64" rx="3" transform="matrix(-1 0 0 1 92.0117 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="72.5412" height="64" rx="3" transform="matrix(-1 0 0 1 73.377 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-8 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column2-2-8') &&
bm.add('column2-2-8', {
  ...commonBlockProps,
  label: opts.labelColumn228,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.35254" y="1" width="15.6" height="64" rx="3"   stroke-width="2"/>
  <path d="M1 5C1 2.79086 2.79086 1 5 1H9V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#2DA94F"/>
  <rect x="19.9883" y="1" width="15.6" height="64" rx="3"   stroke-width="2"/>
  <rect x="38.623" y="1" width="72.5412" height="64" rx="3"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-2 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-8 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column3-6-3') &&
bm.add('column3-6-3', {
  ...commonBlockProps,
  label: opts.labelColumn363,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5C1 2.79086 2.79086 1 5 1H13V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FFBF00"/>
  <rect x="1.35254" y="1" width="24.4" height="64" rx="3"   stroke-width="2"/>
  <rect x="90.3887" y="1" width="20.7765" height="64" rx="3"   stroke-width="2"/>
  <rect x="28.7881" y="1" width="58.5647" height="64" rx="3"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-6 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});
toAdd('column6-3-3') &&
bm.add('column6-3-3', {
  ...commonBlockProps,
  label: opts.labelColumn633,
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="62.9531" y="1" width="24.4" height="64" rx="3"   stroke-width="2"/>
  <rect x="90.3887" y="1" width="20.7765" height="64" rx="3"   stroke-width="2"/>
  <rect x="1.35254" y="1" width="58.5647" height="64" rx="3"   stroke-width="2"/>
  <path d="M1 5C1 2.79086 2.79086 1 5 1H19V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#F42F1F"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-6 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});

toAdd('column3-3-6') &&
bm.add('column3-3-6', {
  ...commonBlockProps,
  label: "1 Row 3/3/6 Column",
  media:  `<svg class="custom-blocks" width="113" height="66" viewBox="0 0 113 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="-1" y="1" width="24.4" height="64" rx="3" transform="matrix(-1 0 0 1 49.0469 0)"   stroke-width="2"/>
  <rect x="-1" y="1" width="20.7765" height="64" rx="3" transform="matrix(-1 0 0 1 21.6113 0)"   stroke-width="2"/>
  <path d="M1 5C1 2.79086 2.79086 1 5 1H13V64H5C2.79086 64 1 62.2091 1 60V5Z" fill="#FF007A"/>
  <rect x="-1" y="1" width="58.5647" height="64" rx="3" transform="matrix(-1 0 0 1 110.647 0)"   stroke-width="2"/>
  </svg>
  `,
  content: `<div ${attrsRow} class="gjs-row" >
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-3 position-relative"><div class="layout-placeholder"></div></div>
    <div ${attrsCell} class="gjs-cell col-6 position-relative"><div class="layout-placeholder"></div></div>
  </div>
  ${
    addBasicStyle
      ? `<style>
      ${styleRow}
      ${styleClm}
    </style>`
      : ''
  }
`
});


};
