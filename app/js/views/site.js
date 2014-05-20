var View = require('./base_view'),
    template = require('../templates/site.hbs');

var SiteView = module.exports = View.extend({
  template: template,
  regions: {
    'header': '#header',
    'footer': '#footer'
  }
});