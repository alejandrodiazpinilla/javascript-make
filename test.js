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

function filter(num , fun){
    aux=[];
    for (i = 0; i < num.length; i++) {
        
    }
}





var even = function(i) { return i % 2 === 0 };
filter([1, 2, 3, 4], even) // => [2, 4]

var none = function(i) { return false; };
filter([1, 2, 3, 4], none) // => []

