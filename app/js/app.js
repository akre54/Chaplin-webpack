require('../assets/css/bootstrap.css');
require('../assets/css/bootstrap-theme.css');
require('../assets/css/main.css');


var Chaplin = require('chaplin');

require('./controllers/maps_controller');

new Chaplin.Application({
    title: 'map',
    controllerPath: './controllers/',
    routes: function(match) {
        match('', 'maps#index');
        match('map', 'maps#index', {name: 'index'});
    }
});