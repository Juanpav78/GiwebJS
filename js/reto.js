document.addEventListener('DOMContentLoaded', function(){
    Reto1();
});

const Reto1 =()=>{
    const btnReto=document.getElementById("reto1")
    btnReto.addEventListener('click', reto1active);
}

const reto1active =()=>{
    alert("Comenzando reto 1...")
    let opcion = prompt("Definir array: (1) Defecto (2) Personalizado ");
    let array = [];
    if (opcion == 1){
         array = [1 , 2, 4 ,4, 5 , 7 , 7 , 9 , 10 , 15 ];
    }else if (opcion == 2){

    }else{
        alert("Numero incorrecto");
    }

    let opcion2 = prompt("Accion");

    if (array.length > 0){

        switch (opcion2){
            case "1":
                opAc= prompt("Ingrese el numero a eliminar");
                eliminarNumPos(array,opAc);
                break;
            case "2":
                opAc= prompt("Ingrese la posicion a eliminar");
                eliminarIndexPos(array,opAc);
                break;
            case "3":
                opAc= prompt("Ingrese el numero a agregar");
                agregarNum(array,opAc);          
                break;
            case "4":
                opAc= prompt("Ingrese el numero a modificar");
                modificarPos(array,opAc);
                break;
            default:
                alert("No esta dentro de las opciones");
        }
        
    }
    document.getElementById('res').innerHTML=`<p>Holaa</p>`;
    console.log(array);
}


const eliminarNumPos= (list, num =5)=>{
    arrayTemp = Array.from(list);
    j = arrayTemp.indexOf(num);
    arrayTemp.splice(j, 1)
    console.log(arrayTemp);
    
}

const eliminarIndexPos= (list, num=3)=>{
    arrayTemp = Array.from(list);
    arrayTemp.splice(num, 1)
    alert("Eliminar la posicion");
    console.log(arrayTemp);
}

const agregarNum= (list, numAdd = 7)=>{
    arrayTemp = Array.from(list);
    let t = arrayTemp.length;
    for(i=0; i<t; i++){
        num2= arrayTemp[i];
        if(num2 > numAdd){
            arrayTemp.splice(i, 0, numAdd);
            break;
        } else if (num2 < numAdd && i==t-1){
            i++;
            arrayTemp.splice(i, 0, numAdd);
            break;
        }
    }
    alert("agregar numero");
    console.log(arrayTemp);
}
const modificarPos= (list)=>{
    alert("modificar posicion");
}

/* Eliminar un número dado si se encuentra en alguna posición del arreglo.
Eliminar el número en una posición del arreglo dada.
Agregar un número al arreglo.¹
Modificar el número en una posición del arreglo dada. */
