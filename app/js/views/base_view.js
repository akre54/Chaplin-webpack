var Chaplin = require('chaplin');

var View = module.exports = Chaplin.View.extend({
  getTemplateFunction: function () {
    return this.template;
  }
});