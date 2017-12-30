var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

// app.use(morgan('tiny'))
// app.use(helmet()) // secure apps by setting various HTTP headers
app.use(cors())

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());
app.get('/test-page', function(req, res) {
	console.log('test-page')
    var name = req.body.name,
        color = req.body.color;
        res.json({'id':1,
      'propertyname':'Thiruvanantapuram',
      'email':'atvm@gmail.com'})
    // ...
});

app.listen(3000, function() {
  console.log('listening');
});
