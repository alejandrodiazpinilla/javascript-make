function counter() {
    for (var count = 1; ; count++) {  // infinite loop
        if (count === 5) {          
          return;
        }
        console.log(count );  // until 4
      }
  }
  
    
  function counter(){
      count= 0
      for (count = 0; count < 3 ; count++) {
      console.log(count += 1)
      }
    }
var count = counter();
count(); // => 1
count(); // => 2
count(); // => 3

// var clicky = counter();
// clicky(); // => 1
// clicky(); // => 2
