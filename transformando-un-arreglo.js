 function transform(num, fun){
     aux=[]
    for(i=0;i<num.length;i++){
        aux[i] = fun(num[i])
       // console.log( fun(num[i]))
    }
    console.log(aux)
 }

var duplicate = function(i) { return i * 2; };
transform([1, 2, 3], duplicate) // => [2, 4, 6]

var increase = function(i) { return i + 10; };
transform([1, 2, 3], increase) // => [11, 12, 13]



// solucion 1 Media

// function transform(arr, func) {
//     var transformed = [];
//     for (var i=0; i < arr.length; i++) {
//        transformed[i] = func(arr[i]);
//     }
//     return transformed;
//   }

//   solucion 2 Media

//   function transform(arr, func) {
//     return arr.map(func);
//   }