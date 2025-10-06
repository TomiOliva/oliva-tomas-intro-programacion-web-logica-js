let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

// 3.a
console.log('3a)', meses[4], meses[10]);

// 3.b
console.log('3b) sort:', [...meses].sort());

// 3.c
meses.unshift("Inicio");
meses.push("Fin");
console.log('3c)', meses);

// 3.d 
meses.shift();
meses.pop();
console.log('3d)', meses);

// 3.e
meses.reverse();
console.log('3e)', meses);

// 3.f
console.log('3f) join:', meses.join(' - '));

// 3.g  (Mayo a Noviembre en el array original serían índices 4..10)
let mesesOriginal = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let copia = mesesOriginal.slice(4, 11);
console.log('3g)', copia);
