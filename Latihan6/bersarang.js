// Perulangan Dan Pengkondisian Bersarang

var s = '';
for(var i = 0; i < 3; i++){
	for(var x = 1; x >= i; x--){
		s += ' ';
	}
	s += '*';
	for(var j = 1; j <= i; j++){
		s += '*';
	}
	s += '\n';
}
console.log(s);
