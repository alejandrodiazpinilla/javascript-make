function Car() {
  this.velocity = 0; 
}
Car.prototype.accelerate = function(amount) {
  this.velocity += amount || 1;
  return this;
}
Car.prototype.break = function(amount) {
  this.velocity -= amount || 1;
  return this;
}

Bus.prototype = Object.create(Car.prototype)

function Bus(){
  this.velocity = 0;
}
Bus.prototype.beep = function() {
  this.beep = "BEEP!";
  return this;
}

  

var bus = new Bus();
bus.velocity; // => 0

bus.accelerate();
bus.velocity; // => 1

bus.accelerate(2);
bus.velocity; // => 3

bus.break();
bus.velocity; // => 2

bus.break(2);
bus.velocity; // => 0

bus.beep(); // => "BEEP!"