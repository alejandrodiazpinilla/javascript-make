function factorial(n) {
    aux = 1;
    for(i=1; i<=n; i++){
     aux = aux * i      
    }   
    return aux
}
 console.log(factorial(0)) // => 1
 console.log(factorial(1)) // => 1
 console.log(factorial(3)) // => 6
 console.log(factorial(5)) // => 120