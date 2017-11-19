const express = require('express');
const app = express();
app.use( express.static('./www'));
require('./services')(app);

var port = 8080;

app.listen( port, function () {
  console.log('Test app listening on port %d', port);
});
