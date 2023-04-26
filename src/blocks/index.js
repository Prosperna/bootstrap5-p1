import sectionBlock from "./section/index.js";
import row1column1 from "./row1column1/index.js";
import row1columns2 from "./row1columns2/index.js";
import row1columns3 from "./row1columns3/index.js";
import row1columns4 from "./row1columns4/index.js";
import row1columns5 from "./row1columns5/index.js";
import row1columns6 from "./row1columns6/index.js";
import row1columns39 from "./row1columns39/index.js";
import row1columns48 from "./row1columns48/index.js";
import row1columns57 from "./row1columns57/index.js";
import row1columns75 from "./row1columns75/index.js";
import row1columns84 from "./row1columns84/index.js";
import row1columns93 from "./row1columns93/index.js";
import row1columns102 from "./row1columns102/index.js";
import row1columns210 from "./row1columns210/index.js";
import row1columns228 from "./row1columns228/index.js";
import row1columns282 from "./row1columns282/index.js";
import row1columns336 from "./row1columns336/index.js";
import row1columns363 from "./row1columns363/index.js";
import row1columns633 from "./row1columns633/index.js";
import row1columns822 from "./row1columns822/index.js";

export default (editor, opts) => {
  // Add any other custom blocks here
  const { blocks, stylePrefix, flexGrid, rowHeight } = opts;
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow = `
    .${clsRow} {
      min-height: ${rowHeight}px;
      margin: 0 !important;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        height: 100%;
      }
    }`;

  const styleClm = `
    .${clsCell} {
      min-height: ${rowHeight}px;
    }`;

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
    minDim,
  };
  const resizerRight = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step,
  };

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  if (flexGrid) {
    resizerRight.keyWidth = "flex-basis";
  }

  // Component declaration for block placeholders
  editor.DomComponents.addType("layout-placeholder", {
    isComponent: (el) =>
      el.classList && el.classList.contains("layout-placeholder"),
    model: {
      defaults: {
        tagName: "div",
        draggable: false,
        droppable: false,
        stylable: false,
        highlightable: false,
        components: `<div class="layout-placeholder-container">
        <svg class="d-block mx-auto" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="#3871E0"/>
    <path d="M23.875 35.5V26.125H14.5V23.875H23.875V14.5H26.125V23.875H35.5V26.125H26.125V35.5H23.875Z" fill="white"/>
    </svg>
        <p class="fw-bold text-black-50 text-center">Drag a block here</p>
      </div>`,
        styles: `.layout-placeholder {
        display: none;
        pointer-events: none;
        position: absolute;
        width: fit-content;
      }
      .layout-placeholder:only-child {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
      }
      .layout-placeholder-preview {
        display: none;
      }
      `,
      },
    },
  });

  editor.on("run:preview", () => {
    editor.DomComponents.getWrapper().onAll(
      (comp) =>
        comp.is("layout-placeholder") &&
        comp.setAttributes({ class: "layout-placeholder-preview" })
    );
  });

  editor.on("stop:preview", () => {
    editor.DomComponents.getWrapper().onAll(
      (comp) =>
        comp.is("layout-placeholder") &&
        comp.setAttributes({ class: "layout-placeholder" })
    );
  });

  // Row Attributes
  const rowAttr = {
    "data-gjs-droppable": `.${clsCell}`,
    "data-gjs-name": "Row",
  };

  // Column Attributes
  const colAttr = {
    "data-gjs-draggable": `.${clsRow}`,
    "data-gjs-name": "Cell",
  };

  if (flexGrid) {
    colAttr["data-gjs-unstylable"] = ["width"];
    colAttr["data-gjs-stylable-require"] = ["flex-basis"];
  }

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on(
    "selector:add",
    (selector) =>
      privateCls.indexOf(selector.getFullName()) >= 0 &&
      selector.set("private", 1)
  );

  // transform attributes to string
  const attrsToString = (attrs) => {
    const result = [];

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
    }

    return result.length ? ` ${result.join(" ")}` : "";
  };

  // check if block is in the list of blocks to add
  const toAdd = (name) => blocks.indexOf(name) >= 0;
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);

  // Props for Layout Blocks
  const layoutBlockProps = {
    attrsCell,
    attrsRow,
    styleRow,
    styleClm,
    category: "Layout",
    select: true,
  };

  // Add Blocks to the editor

  // Start of Layout Blocks
  toAdd("section") && sectionBlock(editor, opts, layoutBlockProps);
  toAdd("column1") && row1column1(editor, opts, layoutBlockProps);
  toAdd("column2") && row1columns2(editor, opts, layoutBlockProps);
  toAdd("column3") && row1columns3(editor, opts, layoutBlockProps);
  toAdd("column4") && row1columns4(editor, opts, layoutBlockProps);
  toAdd("column5") && row1columns5(editor, opts, layoutBlockProps);
  toAdd("column6") && row1columns6(editor, opts, layoutBlockProps);
  toAdd("column2-10") && row1columns210(editor, opts, layoutBlockProps);
  toAdd("column3-9") && row1columns39(editor, opts, layoutBlockProps);
  toAdd("column4-8") && row1columns48(editor, opts, layoutBlockProps);
  toAdd("column5-7") && row1columns57(editor, opts, layoutBlockProps);
  toAdd("column7-5") && row1columns75(editor, opts, layoutBlockProps);
  toAdd("column8-4") && row1columns84(editor, opts, layoutBlockProps);
  toAdd("column9-3") && row1columns93(editor, opts, layoutBlockProps);
  toAdd("column10-2") && row1columns102(editor, opts, layoutBlockProps);
  toAdd("column2-8-2") && row1columns282(editor, opts, layoutBlockProps);
  toAdd("column8-2-2") && row1columns822(editor, opts, layoutBlockProps);
  toAdd("column2-2-8") && row1columns228(editor, opts, layoutBlockProps);
  toAdd("column3-6-3") && row1columns363(editor, opts, layoutBlockProps);
  toAdd("column6-3-3") && row1columns633(editor, opts, layoutBlockProps);
  toAdd("column3-3-6") && row1columns336(editor, opts, layoutBlockProps);
  // End of Layout Blocks
};
