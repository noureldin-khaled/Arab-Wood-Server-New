/* loading the environment variables */
require('dotenv').config({silent: true});

var express          = require('express');
var app              = express();
var bodyParser       = require('body-parser');
var expressValidator = require('express-validator');
var methodOverride   = require('method-override');
var db               = require('./config/database/Database');

// Connect to database
db.initialize(function(err) {
    if (err) {
        console.log('Unable to connect to MySQL due to: ', err);
        process.exit(1);
    }
    else {
        console.log('Connected successfully to MySQL.');

        /* serving static files */
        app.use(express.static('public'));

        /* setting up body parser */
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        /* setting up express-validator package */
        app.use(expressValidator());

        /* setting up the app to accept (DELETE, PUT...etc requests) */
        app.use(methodOverride());

        /* initializing routes */
        require('./app/routes/Routes.js')(app);

        /* listening to requests */
        var port     = (process.env.ENV === 'prod')? 80 : process.env.PORT;
        app.listen(port, function() {
           console.log('Listening on port ' + port + '...');
        });
    }
});
