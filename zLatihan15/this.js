// Membuat this
// console.log(this);
// this/window = object/var global


// Cara 1 - function declaration
// function halo() {
// 	console.log(this);
// 	console.log('halo')
// }
// // this mengembalikan object global
// halo();




// Cara 2 - Object Literal
// var obj = { nama : 'Rizal', umur : '20'};
// obj.halo = function () {
// 	console.log(this);
// 	console.log('hello');
// };
// // this mengembalikan object yang bersangkutan
// obj.halo();





// Cara 3 - Constructor
// function Hello() {
// 	console.log(this);
// 	console.log('hello');
// }
// // this mengembalikan object yang baru dibuat
// var obj1 = new Hello;
// // new Hello;