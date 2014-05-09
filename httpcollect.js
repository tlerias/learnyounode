var http = require('http')
  , bl = require('bl');

var req = http.get(process.argv[2], function(res){
  res.pipe(bl(function (err, data) {
    if (err) throw err;
    console.log(data.toString().length);
    console.log(data.toString());
  }))
});
