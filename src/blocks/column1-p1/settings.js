export default (opts = {}) => {
  const { ...defaultOpts } = opts;

  const settings = {
    id: "column1-p1-settings",
    label: "Column 1 Settings",
    attributes: {
      class: "fa fa-cog",
    },
    options: [
      {
        label: "Classes",
        name: "classes",
        type: "select",
        options: [
          { id: "", name: "None" },
          { id: "my-class", name: "My Class" },
          { id: "another-class", name: "Another Class" },
        ],
      },
      {
        label: "ID",
        name: "id",
        type: "text",
      },
    ],
  };

  return settings;
};
