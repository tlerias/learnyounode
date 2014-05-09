var array = process.argv;
var processLength = array.length;
var sum = 0;
for (var i = 2; i < processLength; i++){
	if (i != array[0] || i != array[1]) {
		sum += Number(array[i]);
	}
}

console.log(sum);