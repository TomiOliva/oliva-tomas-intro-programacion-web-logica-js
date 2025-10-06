// 5.a
let palabras = ["perro", "gato", "conejo", "pez", "caballo"];
for (let i = 0; i < palabras.length; i++) {
  alert('5a) ' + palabras[i]);
}

// 5.b
for (let i = 0; i < palabras.length; i++) {
  let p = palabras[i];
  palabras[i] = p.substring(0,1).toUpperCase() + p.substring(1);
  alert('5b) ' + palabras[i]);
}

// 5.c
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert('5c) ' + sentence.trim());

// 5.d
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log('5d)', numeros);
