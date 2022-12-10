// Manipulasi array

// Menambah elemen pada array
// var arr = [];
// arr[0] = 'rizal';
// arr[1] = 'pradana';
// arr[4] = 'king'; 
                          //memberi elemen harus urut index, bila tidak akan diberi undefined
// console.log(arr);


// Menghapus elemen pada array
// var arr = ['rizal','pradana','boy'];
// arr[1] = undefined;
//                       // mengubah nilai menjadi undefined
// console.log(arr);


// Menampilkan nilai array
// var arr = ['rizal','pradana','boy'];

// for(var i = 0; i < arr.length; i++){
//     console.log('No. '+(i+1) +' '+ 'Nama :' + arr[i] );
// }



// Method array
// 1. length
// 2. join
// var arr = ['rizal','pradana','boy'];

// console.log(arr.join('-'));         //join untuk mengubah semua elemen mnjadi string


// 3. push dan pop
// var arr = ['rizal','pradana','boy'];
// arr.push('king','quen');                //menambah elemen pada akhir
// arr.pop();                              //menghapus elemen akhir
// console.log(arr);


// 4. unshift dan shift
// var arr = ['rizal','pradana','boy'];
// arr.unshift('king','quen');                //menambah elemen pada awal
// arr.shift();                               //menghapus elemen awal
// console.log(arr);


// 5. splice dan slice
// var arr = ['rizal','pradana','boy'];
// splice(index awal, jumlah elemen yang akan dihapus, elmentbaru1, elementbaru2, ...)
// spile untuk menambah/menghapus element pada index tertentu
// arr.splice(1,2,'king','quen');
// console.log(arr);

// slice(index awal, inedex akhir) = awal ikut, akhir tidak.
// slice untuk membagi array menjadi 2
// var arr2 = arr.slice(1,3);      //harus menggunakan var untuk menampung nilai baru
// console.log(arr);
// console.log(arr2);


// 6. forEach dan map , sort
// var arr = [1,2,5,7,8,9,3,10,20,30];
// forEach untuk perulangan
// arr.forEach(function(e){
//     console.log(e)
// });

// map untuk perulangan, 
// var arr2 = arr.map(function (e) {
//     return e * 2;
// });
// console.log(arr2);

// sort
// sort untuk mengurutkan dari kecil
// arr.sort(function (a,b) {
//     return a-b;                 //a-b = ascending (menaik) kecil ke besar
// });                             //b-a = discending (menurun) besar ke kecil
// console.log(arr);



// 7. filter Dan find
// filter bisa mencari sebuah nilai lebih dari satu
// var arr = [1,2,5,7,8,9,3,10,20,30];
// var arr1 = arr.filter(function(x) {
//     return x > 5;
// });

// console.log(arr1.join('-'));


// find hanya bisa mencari satu nilai
// var arr = [1,2,5,7,8,9,3,10,20,30];
// var arr1 = arr.find(function (x) {
//     return x > 5;
// });

// console.log(arr1);