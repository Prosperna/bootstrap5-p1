export default (opts = {}) => {
  const { ...defaultOpts } = opts;

  const settings = {
    id: "column2-p1-settings",
    label: "Two Columns Settings",
    attributes: {
      class: "fa fa-cog",
    },
    options: [
      {
        label: "Classes",
        name: "classes",
        type: "text",
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
