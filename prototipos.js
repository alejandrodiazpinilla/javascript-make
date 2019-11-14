var Square = function(width, height){
    this.width =width;
    this.height=height;
    console.log (this.width)
    console.log (this.height)
    this.calculateArea = function(){
        console.log  (width * height)
    }
}

var square = new Square(50, 60);

square.width; // => 50
square.height; // => 60
square.calculateArea(); // => 3000