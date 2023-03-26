export default (opts = {}) => {
  const { ...defaultOpts } = opts;

  const block = {
    id: "column2-p1",
    label: "Two Columns",
    content: `
      <div class="row {{classes}}" id="{{id}}">
        <div class="col">
          <p>Column 1</p>
        </div>
        <div class="col">
          <p>Column 2</p>
        </div>
      </div>
    `,
    attributes: {
      class: "fa fa-columns",
    },
  };

  return block;
};
