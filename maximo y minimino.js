function maximo(){
       console.log(Math.max(...arguments) )
}

function minimo(){
    console.log(Math.min(...arguments) )
}

maximo(5, 10, 20, 50, 32) //#=> 50

minimo(3, 44, 2, 8) //#=> 2