document.addEventListener('DOMContentLoaded', function(){
  botones();
});

function botones(){
  const btn = document.getElementById("btn_clase1");
  const btn2 = document.getElementById("btn_tarea1");
  btn.addEventListener('click', clase1active);
  btn2.addEventListener('click', tarea1active);
  /* btn3.addEventListener('click', clase2active); */
}

function clase1active(){
  alert('Ya comienza la clase 1');
  let edad = prompt('Por favor ingresa tu edad');
  let nombre = prompt('Por favor ingresa tu nombre');
  var j;

if (edad <= 18){
  if (nombre == "Juan" || nombre == "juan"){
     j=`!Hola ${nombre}, no eres mayor de edad `;
  }else{
    j =`!Hola ${nombre}, no eres Juan y no eres mayor de edad `;
  }
}else if(nombre == "Juan" || nombre =="juan" ){
  if (nombre == "Juan" || nombre == "juan") {
     j=`!Hola ${nombre}!, eres mayor de edad `;
  } else {
     j=`!Hola ${nombre}, no eres Juan y eres mayor de edad `;
  }
}
  document.getElementById('res').innerHTML=`<p>Tu edad es: ${edad}</p>
                                            <p>Tu nombre es: ${nombre}</p>
                                            <p>${j}</p>`;
}
function tarea1active(){
  alert('Ya comienza la tarea 1, por favor ingresa dos numeros para comenzar');
  let num1 = prompt('Ingrese el primer numero: ');
  let num2 = prompt('Ingrese el segundo numero: ');
  let fact=1, poten=1, max=0;

  for(i=1; i<=num1; i++){ 
    fact= i*fact;
  }
  poten= num1**num2;

  if (poten < fact){
    max= fact;
  }else{
    max=poten;
  }

  document.getElementById('res').innerHTML=`<p>El factorial de ${num1} es igual a: ${fact}</p>
                                            <p>la potencia de ${num1} a la ${num2} es igual a: ${poten}</p>
                                            <p>El valor mayor entre ambos es ${max}</p>`;
  
}
/* function clase2active(){
  alert('Ya comienza la clase 2');
  document.getElementById('res').innerHTML=`<p> Clase acerca de arrays</p>;`
}

function clase3active(){
  alert('Ya comienza la clase 3');
  document.getElementById('res').innerHTML=`<p> Clase acerca de arrays y funciones</p>;`
}
 */