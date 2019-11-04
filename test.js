// var mensaje="soy mensaje dentro del for"

// for (let i = 0; i <5; i++) {
// console.log(mensaje)    
// }

// var dias=["lunes", "martes", "miercoles", "jueves"]
 
// for(i in dias){
//     console.log(dias[i])
// }

// function adjustText(cadena, long){
//     aux = ""
//       for (i=0; i<long; i++){
//       if (i <cadena.length){
//         console.log( aux += cadena[i])
//           } else
//           aux += "+"
//        }
//     //    console.log( aux)
//  }
// adjustText("", 3) //=> "   "
// adjustText("hola", 2) //=> "ho"
// adjustText("Hola", 0) //=> ""
// adjustText("Hola", 10) //=> "Hola      "

// function factorial(num) {
//     fac= 1
//     for ( i = 1; i <= num; i++) {
//         console.log(i)
//         fac = fac * i
//     }
//     // console.log(fac)
// }

// factorial(0) // => 1
// factorial(1) // => 1
// factorial(3) // => 6
// factorial(5) // => 120

// function sumame(num) {
//     sum=0
//     for(i=0; i<num.length; i++){
//         sum += num[i]
//     }
//     console.log(sum)
// }
// sumame([1,2,3,4])// => 10
// sumame([3]) //=> 3
// // sumame([]) //=> 0
// function promediame(num){
//  aux=0
//     for(i=0;i < num.length; i++){
//         aux %=num
//  }
//  console.log(aux)
// }

// promediame([]) // => 0
// promediame([1]) // => 1
// promediame([1,2,3,4]) //=> 2.5

// function transform(num, text){
//     if (text ==duplicate) {
//         aux=[]
//         for(i=1;i<=num.length;i++){
//             aux.push(duplicate(i))
//         }
//         console.log(aux)
//     } else {
//         aux=[]
//         for(i=1;i<=num.length;i++){
//             aux.push(increase(i))
//         }
//         console.log(aux)
//     }
// }

// var duplicate = function(i) { return i * 2; };
// transform([1, 2, 3], duplicate) // => [2, 4, 6]

// var increase = function(i) { return i + 10; };
// transform([1, 2, 3], increase) // => [11, 12, 13]




// function filter(params) {
    
// }

// var even = function(i) { return i % 2 === 0 };
// filter([1, 2, 3, 4], even) // => [2, 4]

// var none = function(i) { return false; };
// filter([1, 2, 3, 4], none) // => []

//ejercicio

// function filter(num , fun){
//     num.filter(fun)
//    console.log( num.filter(fun))
//    }





// var even = function(i) { return i % 2 === 0  };
// filter([1, 2, 3, 4], even) // => [2, 4]

// var none = function(i) { return false; };
// filter([1, 2, 3, 4], none) // => [

 //   Componiendo funciones

//  function compose(fun1 , fun2 ){
//      console.log(fun2(fun1()))
//  }


// var greet = function() {return "Bienvenidos"; };
// var yell = function(str) { return str.toUpperCase() + "!"; };
// compose(greet, yell); // => BIENVENIDOS!

// var generate = function() { return 2; };
// var square = function(x) { return x * x; }
// compose(generate, square); // => 4

//ordenar el desorden 
// function order(num, reverse){
//     if (reverse == true) {
//      num.reverse()
//      num.sort(function(a,b){return a - b;})
//         console .log (num)
//     } else {
//         num.sort()   
//         console.log( num)
//     }
// }
// order([1, 2, 3], true) //=> [3, 2, 1]
// order([5, 2, 1, 3, 4]) //=> [1, 2, 3, 4, 5]
// order([25, 10, 1, 1, 5, 14], true)

//planando arrgelos 
//  function flatten(num){
//     // flatten.flar()
// //console.log(num.flat())
// console.log(num.flatMap(x => [x ]))
//  }

// flatten([[1], [2]]) // => [1, 2]
// flatten([[1, 2, 3], [4, 5], [6]]); // => [1, 2, 3, 4, 5, 6]

// retornando una funcion 

// function counter(){

//     console.log(counter +=1) ;
// }

// var count = counter();
// count(); // => 1
// count(); // => 2
// count(); // => 3

// var clicky = counter();
// clicky(); // => 1
// clicky(); // => 2


var counter = 0;

// Function to increment counter
function add() {
 console.log( counter += 1);
}
// Call add() 3 times
add();
add();
add();
clicky()


