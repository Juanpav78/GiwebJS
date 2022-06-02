


var array = ["datos", 2, true]
console.log(array)

const limpiar = (arr) =>{
    n1= arr.length;

    for(i=0 ; i<n1 ; i++){
        arr.pop();
    }
    console.log("desde adentro", arr)
}

limpiar(array);
console.log(array)
