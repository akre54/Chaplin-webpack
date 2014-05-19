var Chaplin = require('chaplin'),
    Position = require('../models/position');

var PositionsCollection = Chaplin.Controller.extend({
  model: Position,
  url: 'assets/positions.json'
});