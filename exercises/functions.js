// 6.a
function sumadeNumeros(a, b) { return a + b; }
let res = sumadeNumeros(3, 4);
console.log('6a) Resultado:', res);

// 6.b
function sumaValidada(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Error: uno de los parámetros no es número");
    return NaN;
  }
  return a + b;
}
console.log('6b)', sumaValidada(4, "x"));

// 6.c
function validateInteger(n) { return Number.isInteger(n); }
console.log('6c)', validateInteger(10.5));

// 6.d  (redondeo si hay decimales)
function sumaEntera(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Error: uno de los parámetros no es número");
    return NaN;
  }
  if (!Number.isInteger(a)) {
    alert("a es decimal, se redondea"); a = Math.round(a);
  }
  if (!Number.isInteger(b)) {
    alert("b es decimal, se redondea"); b = Math.round(b);
  }
  return a + b;
}
console.log('6d)', sumaEntera(5.7, 4.2));

// 6.e  (validación separada)
function toInteger(n) {
  if (!Number.isInteger(n)) {
    alert("Número decimal detectado, se redondeará");
    return Math.round(n);
  }
  return n;
}
function sumaEntera2(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Error: uno de los parámetros no es número");
    return NaN;
  }
  return toInteger(a) + toInteger(b);
}
console.log('6e)', sumaEntera2(8.1, 2));
