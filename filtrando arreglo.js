function filter(num , fun){
    return num.filter(fun)   
   }

   var even = function(i) { return i % 2 === 0 };
filter([1, 2, 3, 4], even) // => [2, 4]

var none = function(i) { return false; };
filter([1, 2, 3, 4], none) // => []


// solucion 1 make 

// function filter(arr, func) {
//     var filtered = [];
//     for (var i=0; i < arr.length; i++) {
//       if (func(arr[i])) {
//         filtered.push(arr[i]);
//       }
//     }
  
//     return filtered;
//   }


//   solucion 2 make
//   function filter(arr, func) {
//     return arr.filter(func);
//   }