// require('../assets/css/boostrap.css');
// require('../assets/css/boostrap-theme.css');
// require('../assets/css/main.css');


var Chaplin = require('chaplin');

require('./controllers/maps_controller');

new Chaplin.Application({
    title: 'map',
    controllerPath: './controllers',
    routes: function(match) {
        match('', 'maps#index');
        match('map', 'maps#index', {name: 'index'});
    }
});