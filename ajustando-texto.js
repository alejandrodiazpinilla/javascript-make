function adjustText(cadena, long){
   aux = ""
     for (i=0; i<long; i++){
     if (i <cadena.length){
         aux += cadena[i]  //aux = aux + cadena[i]
         } else
         aux += "+"
      }
      return aux
}
 console.log(adjustText("", 3)); //=> "   ";
 console.log(adjustText("hola", 2)); //=> "ho";
 console.log(adjustText("Hola", 0));//=> ""
 console.log(adjustText("Hola", 10)); //=> "Hola      ");


