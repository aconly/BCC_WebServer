var express = require('express');

var app = express();
var my_env=process.env;
app.use(express.static('app'));

var options = {};

app.get('/config.js', function(req, res){
    res.send("var BC_FUELSERVER_URL="+process.env.BC_FUELSERVER_URL+"");

});

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});

var port = process.env.PORT;
app.listen(port, function() {
//  console.log(process.env);                                                                               
    console.log('server listening on port ' + port);
});

