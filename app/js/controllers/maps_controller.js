var Controller = require('./base_controller'),
    PositionsCollection = require('../collections/positions'),
    HeaderView = require('../views/header'),
    FooterView = require('../views/footer'),
    MapsView = require('../views/maps');

var MapsController = module.exports = Controller.extend({
  beforeAction: function() {
    this.reuse('site', SiteView);
    this.reuse('header', HeaderView, {region: 'header'});
    this.reuse('footer', FooterView, {region: 'footer'});
  },
  index: function () {
    this.collection = new PositionsCollection();
    this.view = new MapsView({collection: this.collection});
    this.collection.fetch();
    debugger
  }
});