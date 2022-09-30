Function.prototype.inherits = function(parentClass){

    function Surrogate(){};

    Surrogate.prototype = parentClass.prototype;
    child  = new Surrogate();

}

function MovingObject () {
    this.type = "moving object";
    this.location = 1;
    this.move = function(){
        this.location = this.location * 2;
    }

}

function Ship (){
    console.log("hello I am ship")
}
Ship.inherits(MovingObject);

function Asteroid () {
    console.log("hello I am Asteroid")
}
Asteroid.inherits(MovingObject);

let testShip = new Ship();
let testAsteroid = new Asteroid();
console.log(testShip.type)
console.log(testAsteroid.type)

console.log(testShip.location)
console.log(testAsteroid.location)

testAsteroid.move
testShip.move

console.log(testShip.location)
console.log(testAsteroid.location)
