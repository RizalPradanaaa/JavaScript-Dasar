// Percabangan if else, else if didalam perulangan for

var jmlangkot = 10;
var angkotbaik = 6;
var noangkot = 1;
for (noangkot; noangkot <= jmlangkot;  noangkot++){
	if(noangkot <= angkotbaik && noangkot !== 5){
		console.log('Angkot No. ' + noangkot + ' beroperasi dengan baik');
	}else if(noangkot === 5 || noangkot === 8 || noangkot === 10){
		console.log('Angkot No. ' + noangkot + ' sedang lembur');
	}else{
		console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi');
	}
}