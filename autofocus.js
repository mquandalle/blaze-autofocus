AutofocusableTags = ['input', 'textarea', 'button'];

var autofocusSelector = _.map(AutofocusableTags, function (tag) {
  return tag + '[autofocus]';
}).join(', ');

var _super = Template.prototype.constructView;

Template.prototype.constructView = function (/* arguments */) {
  var args = Array.prototype.slice.call(arguments);
  var view = _super.apply(this, args);
  view.onViewReady(function () {
    var tpl = Template.instance();
    var autofocusField = tpl && tpl.find(autofocusSelector);
    if (autofocusField) {
      autofocusField.focus();
    }
  });
  return view;
};
