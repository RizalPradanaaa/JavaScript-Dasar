// Percabangan if else, else if

var angka = prompt('Masukan angka :');
if(angka % 2 === 0){
	alert(angka + ' adalah bilangan GENAP');
}else if(angka % 2 === 1){
	alert(angka + ' adalah bilangan GANJIL');
}else{
	alert('yang anda masukan bukan angka!!!');
}



// Percabangan if else, else if didalam perulangan for

var jmlangkot = 10;
var angkotbaik = 6;
var noangkot = 1;
for (noangkot; noangkot <= jmlangkot;  noangkot++){
	if(noangkot <= angkotbaik){
		console.log('Angkot No. ' + noangkot + ' beroperasi dengan baik');
	}else if(noangkot === 8 || noangkot === 10){
		console.log('Angkot No. ' + noangkot + ' sedang lembur');
	}else{
		console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi');
	}
}