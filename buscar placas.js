function plates(text){
  expresion = /[A-Z]{3}\d{3}/g
  if (text.match(expresion)== null) {
     console.log ([""])
  } else{
   console.log( text.match(expresion)    )
  }
}

plates("AAA123"); 
plates("Iba en un AAA123 y después en un BBB987"); 
plates("no coincide");



// solucion make 

// function plates(str) {
//   var matches = str.match(/[A-Z]{3}\d{3}/g);
//   return matches ? matches : [];
// }