function order(num, reverse){
    if (reverse == true) {
     num.reverse()
     num.sort(function(a,b){return a - b;})
        console .log (num)
    } else {
        num.sort()   
        console.log( num)
    }
}
order([1, 2, 3], true) //=> [3, 2, 1]
order([5, 2, 1, 3, 4]) //=> [1, 2, 3, 4, 5]


// solucion make 

// function order(arr, reverse) {
//     return arr.sort(function(a, b) {
//       return reverse ? b - a : a - b
//     });
//   }