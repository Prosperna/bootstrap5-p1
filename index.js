module.exports = (editor, opts = {}) => {
  const blockId = "bootstrap5-p1";

  // Import Bootstrap 5.1.3 CSS and JS from CDN
  editor.StyleManager.addComponents(`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
  `);

  // Add custom block code here

  // Add the custom block to the editor
  editor.BlockManager.add(blockId, {
    label: "Bootstrap5-P1 Block",
    content: '<div class="my-custom-block">This is my custom block!</div>',
    attributes: { class: "fa fa-square-o" },
  });
};
