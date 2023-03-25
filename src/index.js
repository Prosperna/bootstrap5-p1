// src/index.js

import "bootstrap/dist/css/bootstrap.min.css";

export default (editor, options = {}) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  // Container Component
  comps.addType("bs-container", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: "div",
        classes: ["container"],
        draggable: true,
      },
    }),
    view: defaultView,
  });

  // Row Component
  comps.addType("bs-row", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: "div",
        classes: ["row"],
        draggable: ".container, .container-fluid",
      },
    }),
    view: defaultView,
  });

  // Column Component
  comps.addType("bs-column", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: "div",
        classes: ["col"],
        draggable: ".row",
      },
    }),
    view: defaultView,
  });

  // Add more Bootstrap components here
};
