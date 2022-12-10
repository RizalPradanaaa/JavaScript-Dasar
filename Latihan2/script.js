// alert ('hai selamat datang');
// prompt('siapa namamu ?');
// confirm('apakah anda yakin ?');


var nama = prompt ("siapa namau mu?");
alert ( "hai " + nama);

// percabangan
var pil = confirm('anda mau memilih mana ?');

if ( pil === true) {
	alert("anda memilih oke ");
}else {
	alert('anda memilih No!!');
}


// Perulangan
alert('selamat datang');
var lagi = 'true';
while(lagi){
	var nm = prompt('masukan nama anda :');
	alert('selamat datang' + nm );

	lagi = confirm('coba lagi ?');
}

alert('terima kasih!!')