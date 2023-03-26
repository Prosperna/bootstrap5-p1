export default (opts = {}) => {
  const { ...defaultOpts } = opts;

  const block = {
    id: "column1-p1",
    label: "Column 1",
    content: `
      <div class="row {{classes}}" id="{{id}}">
        <div class="col">
          <p>This is a one column row.</p>
        </div>
      </div>
    `,
    attributes: {
      class: "fa fa-square-o",
    },
  };

  return block;
};
