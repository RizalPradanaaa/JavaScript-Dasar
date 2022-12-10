// Game suit

var ulang = 'true';
while( ulang ){
	alert('SELAMAT DATANG DI GAME SUIT!!')
	// Menangkap pilihan player
	var p = prompt('Masukan pilihan anda :\n (batu/gunting/kertas)')

	// Menangkap pilihan computer
	// Membangkitkan funsi random
	var comp = Math.random();
	if(comp < 0.35){
		comp = 'batu';
	}else if( comp > 0.35 && comp < 0.65){
		comp = 'gunting';
	}else{
		comp = 'kertas';
	}

	// Membuat rules
	var hasil = '';
	if( p == comp ){
		hasil = "SERI";
	}else if(p == 'batu'){
		// if( p == 'kertas'){
		// 	hasil = 'Menang';
		// }else{
		// 	hasil = 'Kalah';
		// }
		hasil = ( comp == 'gunting') ? 'Menang' : 'Kalah';
	}else if(p == 'gunting'){
		hasil = ( comp == 'kertas') ? 'Menang' : 'Kalah';
	}else if(p == 'kertas'){
		hasil = ( comp == 'batu') ? 'Menang' : 'Kalah';
	}else{
		hasil = "Maaf anda memasukan pilihan yang salah!!";
	}

	// Tampilkan Hasil
	alert('Pilihan anda adalah ' + p + ' dan pilihan computer adalah ' + comp + '\nmaka hasilnya ' + hasil);
	var ulang = confirm('Apakah anda mau bermain lagi ?');
}

alert('Terima Kasih Sudah Bermain :)')

