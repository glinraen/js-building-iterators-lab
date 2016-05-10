// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.


function myReduce(arr, callback, initialValue) {
	var prevValue;
	var i = 0;

	if (initialValue == undefined) {
		prevValue = arr[0]; 
		i = 1;
	}
	else {
		prevValue = initialValue;
	}
	for(; i < arr.length; i++) {
		//callback(arr[i], i, arr);
		prevValue = callback(prevValue, arr[i], i, arr);

	}

	// console.log ("look here.", callback());
	return prevValue;


	
	//var smaller = [];

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
