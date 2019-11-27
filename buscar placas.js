function plates(text){

  ha =  text.split(/\w{3}\d{3}/g)
    //expresion =  /[A-3Z]{3}(\d{3})/
    console.log(ha)
}





plates("AAA123"); // => ["AAA123"]
plates("Iba en un AAA123 y después en un BBB987"); //=> ["AAA123", "BBB987"]
plates("no coincide"); // => []