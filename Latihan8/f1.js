// Menyelesaikan penjumlahan 2 volume kubus dengan biasa

// var a = 8;
// var b = 3;

// var volumeA = a * a * a;
// var volumeB = b * b * b;

// var total = volumeA + volumeB;

// console.log(total);


// Menyelesaikan penjumlahan 2 volume kubus dengan function

function penjumlahan2volume(a, b) {
	var total, volumeA, volumeB;

	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;

	return total
}

console.log(penjumlahan2volume(8,3))