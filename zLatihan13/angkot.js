var penumpang = ['rizal','boy','bagus'];
var tambahpenumpang = function (namapenumpang, penumpang) {
	// Jika angkot kosong
	if( penumpang.length == 0 ){
		// tambah penumpang diawal array
		penumpang.push(namapenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
	}else {
	// else
		// telusuri seluruh kuri dari awal
		for( var i = 0; i < penumpang.length; i++){
			// jika ada kursi kosong
			if( penumpang[i] == undefined){
				// tambah penumpang di kursi tersebut
				penumpang[i] = namapenumpang;
				// kembalikan isi array dan keluar dari function
				return penumpang;
	
			}
			// jika sudah ada nama yang sama
			else if ( penumpang[i] == namapenumpang ){			
				// tampilkan pesan kesalahanya
				console.log( namapenumpang + ' Sudah berada didalam angkot' );
				// kembalikan isi array dan keluar dari function
				return penumpang;

			}
			// jika seluruh kursi terisi
			else if ( i == penumpang.length - 1){			
				// tambah penumpang diakhir array
				penumpang.push(namapenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}

// Function hapus penumpang
var hapuspenumpang = function (namapenumpang, penumpang) {
	// Jika angkot kosong
	if ( penumpang.length == 0){
		// Tampilkan pesan angkot kosong
		console.log('Angkot masih kosong');
		// kembalikan isi array dan keluar dari function
		return penumpang;
	}
	else {
		for ( var i = 0; i < penumpang.length; i++){
	// Jika ada penumpang yang namanya sesuai
		if ( penumpang[i] == namapenumpang){
		// hapus nama penumpang dan beri nilai undefined
		penumpang[i] = undefined;
		// kembalikan isi array dan keluar dari function
		return penumpang;
		}
		else if ( i == penumpang.length - 1) {
	// jika tidak ada penumpang yang sesuai
		// maka tampilkan pesan kesalahan
		console.log(namapenumpang + ' Tidak ada didalam angkot');
		// kembalikan isi array dan keluar dari function
		return penumpang;
		}
		}
	}
}