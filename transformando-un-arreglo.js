function transform(num, text){
    if (text ==duplicate) {
        aux=[]
        for(i=1;i<=num.length;i++){
            aux.push(duplicate(i))
        }
        console.log(aux)
    } else {
        aux=[]
        for(i=1;i<=num.length;i++){
            aux.push(increase(i))
        }
        console.log(aux)
    }
}

var duplicate = function(i) { return i * 2; };
transform([1, 2, 3], duplicate) // => [2, 4, 6]

var increase = function(i) { return i + 10; };
transform([1, 2, 3], increase) // => [11, 12, 13]