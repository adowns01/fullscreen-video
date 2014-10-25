var express      = require('express')
  , http         = require('http')
  , path         = require('path')
  , app          = express();

app.set( 'port', process.env.PORT || 3000 );
app.use( express.static(path.join(__dirname, 'client' )));
app.use( '/bower_components',  express.static(__dirname + '/bower_components' ));

app.get('/', function( req, res ) {
  res.sendFile( __dirname + '/index.html' );
});

http.createServer( app ).listen( app.get( 'port' ), function(){
    console.log( 'Take Me To The Movies is successfully listening on port : ' + app.get( 'port' ) );
});