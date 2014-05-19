require('../assets/css/boostrap.css');
require('../assets/css/boostrap-theme.css');
require('../assets/css/main.css');


var Chaplin = require('chaplin');

new Chaplin.Application({
    title: 'map',
    routes: function(match) {
        match('map', 'maps#index', {name: 'index'});
    }
});