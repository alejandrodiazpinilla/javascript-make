 function flatten(array) {
    var flattend = [];
    !(function flat(array) {
      array.forEach(function(el) {
        if (Array.isArray(el)) flat(el);
        else flattend.push(el);
      });
    })(array);
    console.log( flattend);
  }
flatten([[1], [2]]) // => [1, 2]
flatten([[1, 2, 3], [4, 5], [6]]); // => [1, 2, 3, 4, 5, 6]



// solucion make 

// function flatten(arr) {
//     return arr.reduce(function(memo, a) {
//       return memo.concat(a);
//     }, []);
//   }