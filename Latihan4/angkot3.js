// Percabangan If else

var angka = prompt('Masukan angka :');
if (angka % 2 === 0) {
	alert(angka + ' adalah bilangan GENAP');
}else{
	alert(angka + ' adalah bilangan GANJIL')
}


// Percabangan didalam perulangan.
var jmlangkot = 10;
var angkotbaik = 6;
var noangkot= 1;

for (noangkot; noangkot <= jmlangkot; noangkot++) {
	if (noangkot <= angkotbaik) {
		console.log('Angkot No. ' + noangkot + ' beroperasi dengan baik');
	}else{
		console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi'); 
	}
}