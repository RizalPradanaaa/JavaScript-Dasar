// // Membuat Object
// var orang = {
// 	// Variabel didalam object disebut properti
// 	// Function didalam object disebut method
// 	nama : 'Rizal',
// 	umur : 20,
// 	pekerjaan : 'Mahasiswa',
// 	Alamat : {
// 		Kota : 'Blora',
// 		Kec : 'Jati'
// 	}
// };


// Membuat object Literal
var mhs1 = {
	nama : 'Rizal Pradana',
	nim : '007',
	email : 'rizalpradana@gmail.com',
	prodi : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'Ardilla',
	nim : '001',
	email : 'dilla@gmail.com',
	prodi : 'Kedokteran'
}


// membuat object dengan function declaration
var buatObjectMahasiswa = function (nama, nim, email, prodi) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.prodi = prodi;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('Boy','069','by@gmail.com','arsitek');


// membuat obejct dengan Constructor
var Mahasiswa = function (nama, nim, email, prodi) {
	// var this = {}
	this.nama = nama;
	this.nim = nim;
	this.email = email;			//dengan this kita dibuatkan var dan return otomatis oleh java
	this.prodi = prodi;
	// return this
}

var mhs4 = new Mahasiswa('King','111','theking@gmail.com','hukum');