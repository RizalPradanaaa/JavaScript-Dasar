// Paramater dan Argument

// paramater tempat untuk menyimpan nilai
// argument adalah nilai yang dimasukkan ke paramater

// function tambah(a,b) {
// 	return a + b;
// }

// function kali(a,b) {
// 	return a * b;
// }

// var a = parseInt(prompt('Maukan angka pertama :'));
// var b = parseInt(prompt('Masukan angka kedua :'));

// var hasil = kali(tambah(a),tambah(b,b));
// alert(hasil);


// Catatan
// bila argument lebih banyak dr parameter, maka dianggap tidak ada(/dismpan di var Arguments)
// bila paramater lebih banyak dari argument maka akn diberi nilai undefined

// penggunanaan Arguments

function tambah() {
	var total = 0;
	for( var i = 0; i < arguments.length; i++){
		total += arguments[i];
	}

	return total;
}

var a = tambah(1,2,3);
alert(a);