var Chaplin = require('chaplin'),
    Position = require('../models/position');

var PositionsCollection = module.exports = Chaplin.Controller.extend({
  model: Position,
  url: 'assets/positions.json'
});