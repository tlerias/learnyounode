var fs = require('fs');

module.exports = function(dir, extension, callback){
  var spec = new RegExp('.' + extension);
  fs.readdir(dir, function(err, files) {
     if (err)
      return callback(err);
    var filtered = files.filter(function(file) {
      return spec.test(file);
    });
    return callback(null, filtered);


  });
};


