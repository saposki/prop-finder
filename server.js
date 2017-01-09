let express = require('express');

let app = express();

let PORT = 8000;

app.use(express.static(__dirname + '/public'));

let server = app.listen(PORT, function(){
  console.log('Listening on port: ', PORT);
});
