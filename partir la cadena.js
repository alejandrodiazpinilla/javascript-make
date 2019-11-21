function split(text){
    expresion = /[A-Z]\w+/gi
    ha = text.match(expresion)
    console.log(ha)
}





split("Hola+Mundo"); // => ["Hola", "Mundo"]
split("partir-la-cadena"); // => ["partir", "la", "cadena"]
split("este-es+otro*ejemplo"); // => ["este", "es", "otro", "ejemplo"]
split(''); // => [""]