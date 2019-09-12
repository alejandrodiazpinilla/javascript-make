//  function adjustText(cadena, long){
//     a = text
//     for(i= 0; i < long - text.length; i++){
//         a = a + "+"
//        return a
//     }
// }
// cadena ="Hola";
// long = 10
// text ="cadena"
// a = text
// long = 0
// for (i= 0; i < long -a.length; i++){
//    a = a + "+"
//    }

// console.log(a);




// function adjustText(cadena, long){
//    aux = ""
//      for (i=0; i<long; i++){
//      if (i <cadena.length){
//          aux += cadena[i]
//          } else
//          aux += "+"
//       }
//       return aux

//    }
//  console.log(adjustText("", 3)); //=> "   ";
//  console.log(adjustText("hola", 2)); //=> "ho";
//  console.log(adjustText("Hola", 0));//=> ""
//  console.log(adjustText("Hola", 10)); //=> "Hola      ");


// function sumame(arra) {
//    aux= ""
//    for (i=0; i<arra ; i++) {
//       aux = arra[i] + aux
//    }
//    return aux
// }

// contador de numeros 
// aux = "" ;
// for(i=0 ; i <= 20; i++ ){
//  aux += i 
//    console.log(aux);   
// }

// function sumame(num) {
//     aux= 0 ;
//    for(i=0; i< num.length ; i++){
//       aux = num[i] + aux
//        console.log(aux);       
//    }   
//    return aux
// }
// console.log(sumame([1,2,3,4]))// => 10
// console.log(sumame([3]))// => 3
// console.log(sumame([])) //=> 0

function promediame(arr) {
   aux = 0 ;
   for(i=0; i< arr.length ; i++){
      aux += arr[i] / arr.length
   }
   return aux
}

 console.log(promediame([])) // => 0
 console.log(promediame([1])) // => 1
 console.log(promediame([1,2,3,4])) //=> 2.5
