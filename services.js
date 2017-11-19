
var result = function (app) {
    app.get('/api/getResult', function (req, res) {
        sleep(3000).then(() => {
            res.write('hello');
            res.end();
        });
    });
}

module.exports = result;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  