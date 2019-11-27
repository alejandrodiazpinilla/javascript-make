function split(text){
    expresion = /[A-Z]\w+/gi
    if (text.match(expresion)== null) {
       console.log [""]
    } else{
    console.log(text.match(expresion))
    }
}

split("Hola+Mundo"); // => ["Hola", "Mundo"]
split("partir-la-cadena"); // => ["partir", "la", "cadena"]
split("este-es+otro*ejemplo"); // => ["este", "es", "otro", "ejemplo"]
split(""); // => [""]



//solucion Make

// function split(str) {
//     return str.split(/[\+\-\*]/);
//   }