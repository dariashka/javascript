export default function CursorTemplate(options, itemTemplateConfig) {
  var _template = create(itemTemplateConfig);

  function create(config) {
    return ["div",
      {
        "style": {
          width: 100 + "px",
          height: 100 + "px",
        },
        "class": ["bp-item", "bp-corner-all", "bp-cursor-frame"]
      }
    ];
  }

  function template() {
    return _template;
  }

  function getHashCode() {
    return "defaultCursorTemplate";
  }

  function render(event, data) {

  }

  return {
    template: template,
    getHashCode: getHashCode,
    render: render
  };
};
