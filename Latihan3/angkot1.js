// Perulangan dengan while

var hello = 1;
while(hello <= 5){
	console.log('hello world ' + hello + ' X')
	hello++;
}

// Perulanggan yang dihentikan user

var nama = 'true';
while(nama){
	var nm = prompt('masukan nama anda :')
	alert('Haii semoga kamu bahagia ' + nm)
	nama = confirm('apakah anda mau mengulang ?');
}


// Perulangan yang dihentikan program


var angkot = 1;
while(angkot <= 10){
	console.log("Angkot No. " + angkot +" beroperasi dengan baik.")
	angkot++;
}