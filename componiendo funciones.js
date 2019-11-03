function compose(fun1 , fun2 ){
    console.log(fun2(fun1()))
}


var greet = function() {return "Bienvenidos"; };
var yell = function(str) { return str.toUpperCase() + "!"; };
compose(greet, yell); // => BIENVENIDOS!

var generate = function() { return 2; };
var square = function(x) { return x * x; }
compose(generate, square); // => 4

// solucion 1 make

// function compose(func1, func2) {
//     var result = func1(); // invocamos la primera función
//     return func2(result); // invocamos la segunda y pasándole el resultado de la primera
//   }

// solucion 2 make

// function compose(func1, func2) {
//     return func2(func1());
//   }