promediame = function(arrr){
    promedio= 0; 
    if (arrr.length > 0){ 
        suma = 0
        for (i=0; i<arrr.length; i++){
            suma = suma +arrr[i]
        }   
        promedio = suma / arrr.length
    }
    return promedio;
}

promediame([]) // => 0
promediame([1]) // => 1
promediame([1,2,3,4]) //=> 2.5