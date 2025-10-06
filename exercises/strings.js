// 2.a
let txt = "aguante programa en javascript";
console.log('2a) Mayúsculas:', txt.toUpperCase());

// 2.b
let primeros5 = txt.substring(0, 5);
console.log('2b) Primeros 5:', primeros5);

// 2.c
let ultimos3 = txt.substring(txt.length - 3);
console.log('2c) Últimos 3:', ultimos3);

// 2.d
let cap = txt.substring(0,1).toUpperCase() + txt.substring(1).toLowerCase();
console.log('2d) Capitalizada:', cap);

// 2.e
let conEspacio = "Hola introduccion a la programacion Web";
let pos = conEspacio.indexOf(" ");
console.log('2e) Posición primer espacio:', pos);

// 2.f
let dosPalabras = "programacion web";
let sp = dosPalabras.indexOf(" ");
let pA = dosPalabras.substring(0,1).toUpperCase() + dosPalabras.substring(1, sp).toLowerCase();
let pB = dosPalabras.substring(sp+1, sp+2).toUpperCase() + dosPalabras.substring(sp+2).toLowerCase();
console.log('2f) Ambas capitalizadas:', pA + " " + pB);
