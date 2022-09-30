function sumV1(){
    let sum = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(ele => {
        sum += ele;
    })
    return sum;
}

function sumV2(...args){
    let sum = 0;
    args.forEach(ele => {
        sum += ele;
    })
    return sum;
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
    
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  

Function.prototype.myBind = function (...args) {
    let that = this
    return function(...secondArgs){
            let allArgs = args.concat(secondArgs)
            that.apply(allArgs[0],allArgs.slice(1));
        }
    }


markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true

markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true
markov.says.myBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow","me")


function curriedSum(numArgs){
    
    let numbers = [];
    function _curriedSum(num){
        numbers.push(num)
        if(numbers.length === numArgs){
            let sum = 0;
            numbers.forEach(ele => {
                sum += ele;
            })
            return sum
        }
        return _curriedSum
    }
    return _curriedSum
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }

Function.prototype.curry = function(numArgs){
    let args = [];
    const _curriedFunc = (arg) => {
        args.push(arg);
        if(args.length === numArgs){
            return this(...args)
           //return this.apply(this, args)
        }else{
            return _curriedFunc
        }
    }
    return _curriedFunc;
}

let sums = sumThree.curry(3)
console.log(sums(4)(20)(6));