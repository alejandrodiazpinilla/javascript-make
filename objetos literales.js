var pepito ={
    nombre: "Pepito",
    }
    var hijas={
      nombre:"German"
    }
    var menor ={
    german: hijas
    }
    var maria = {
      nombre: "Terah",
      edad: 32,
      altura: 1.70,
      peso: 60,
      colorPelo: "cafe",
      esposo: pepito,
      hijos: menor,
        bmi: function() { 
            console.log(maria.peso/Math.pow(maria.altura, 2))
        }
      }
      console.log(maria.peso/Math.pow(maria.altura, 2))
    