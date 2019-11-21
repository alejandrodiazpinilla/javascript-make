 
  function isPlate(string){
   expresion = /[A-Z]{3}(\d{3})/
   ha = string.match(expresion)
    if (ha){  
      console.log(true)  
    
    }else (ha) 
    console.log( false)
    }
  
isPlate("") //=> false
isPlate("MVV387") //=> true
isPlate("mvv387") //=> false