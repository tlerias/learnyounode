var fs = require('fs');
var doFilter = require('./filterExtension.js');

var spec = process.argv[3];

doFilter(process.argv[2], spec, function(err, data){
  for (var i = 0; i < data.length; i++){
    console.log(data[i]);
  }
})
