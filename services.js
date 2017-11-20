
var api = function (app) {
    app.get('/api/getResult', function (req, res) {
        sleep(3000).then(() => {
            res.write('hello');
            res.end();
        });
    });
}

module.exports = api;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  