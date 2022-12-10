// REFACTORING, membuat program mnjadi lebih 'baik' tap tetap fungsional.

function tambah2volume(a,b) {
	// var total;
	// var volumeA;
	// var volumeB;

	// volumeA = a * a * a;
	// volumeB = b * b * b;
	// total = volumeA + volumeB;

	// return total;

	return a * a * a + b * b * b;
}

console.log(tambah2volume(2,5));



// VARIABLE SCOPE, atau ruang lingkup variabel

// global scope / window scope
var a = 1;

function b() {
	// function scope / lokal scope
	var a = 2;
	return a
}
console.log(b(a));
console.log(a);


// REKURSIF, adalah function yang dapat memanggil dirinya sendiri

function ulang(i) {
	
	if( i === 0) return
	console.log(i);
	return ulang(i-1);
}

ulang(10);


function faktorial(x) {
	if ( x === 0) return 1;
	return x * faktorial(x-1);	
}

console.log(faktorial(5));