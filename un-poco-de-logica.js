function isAlive(playerName , points) {
    if (playerName == "ikk" && 30 < points || playerName == "gut" && 10 < points) {
        return true 
    }
        else {
            return false
        }         
}

// solucion make
// function isAlive(playerName , points) {
//     return (playerName == "ikk" && 30 < points || playerName == "gut" && 10 < points) 
//     }

console.log(isAlive("ikk", 50));
console.log(isAlive("gut", 50)) ;//=> true
console.log(isAlive("ikk", 20) );//=> false
console.log(isAlive("gut", 5)); //=> false
console.log(isAlive("trek", 50)); //=> false