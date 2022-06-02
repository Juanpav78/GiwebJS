alert('Ya comienza el reto 1, por favor ingresa dos numeros para comenzar');
let num1 = prompt('Ingrese el primer numero: ');
let num2 = prompt('Ingrese el segundo numero: ');
let fact = 1, poten = 1, max = 0;

for (i = 1; i <= num1; i++) {
  fact = i * fact;
}
poten = num1 ** num2;

if (poten < fact) {
  max = fact;
} else {
  max = poten;
}

alert(`El factorial de ${num1} es igual a: ${fact}
la potencia de ${num1} a la ${num2} es igual a: ${poten}
El valor mayor entre ambos es ${max}`)
