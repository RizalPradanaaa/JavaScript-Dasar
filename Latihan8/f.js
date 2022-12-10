// Membuat function

function penjumlahan(a,b) {
	var total;
	total = a + b;

	return total;
}

alert(penjumlahan(10,2));
alert(penjumlahan(8,3));


// function Declaration

function kali() {
	var  x = 1;
	for( var y = 1; y < arguments.length; y++ ){
		x *= arguments[y];
	}
	return x;
}

console.log(kali(3,4,5));


// function Exspression

var tambah = function(argument) {
	var jml = 1;
	for( var o = 1; 0 > arguments.length; o++){
		jml += arguments[o];
	}
	return jml;
}