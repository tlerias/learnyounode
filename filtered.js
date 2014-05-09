var fs = require('fs');
var _ = require('underscore');

var extension = "." + process.argv[3]

fs.readdir(process.argv[2], function(err, files){
  if (err) throw err;
  var findCorrectExtension = function(element){
  return (element.slice(-3, element.length) === extension);
  }
  var filtered = files.filter(findCorrectExtension);

  for(var i = 0; i < filtered.length; i++){
    console.log(filtered[i]);
  }
});


//----------- SHORTER PRETTIER WAY TO DO IT BELOW: ---------------\\


 // var fs = require('fs')
 //    var path = require('path')

 //    fs.readdir(process.argv[2], function (err, list) {
 //      list.forEach(function (file) {
 //        if (path.extname(file) === '.' + process.argv[3])
 //          console.log(file)
 //      })
 //    })
