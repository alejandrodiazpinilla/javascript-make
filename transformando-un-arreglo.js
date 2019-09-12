function transform(num , increase){
    aux= 0;
    for(i=0; i<num.length; i++){
        aux = num[i]
        console.log(increase);        
    }
}














// var duplicate = function(i) { return i * 2; };
// transform([1, 2, 3], duplicate) // => [2, 4, 6]

var increase = function(i) { return i + 10; };
transform([1, 2, 3], increase) // => [11, 12, 13]