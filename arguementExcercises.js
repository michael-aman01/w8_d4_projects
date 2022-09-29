// function sumV1(){
//     let sum = 0;
//     let args = Array.prototype.slice.call(arguments);
//     args.forEach(ele => {
//         sum += ele;
//     })
//     return sum;
// }

// function sumV2(...args){
//     let sum = 0;
//     args.forEach(ele => {
//         sum += ele;
//     })
//     return sum;
// }

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
  

Function.prototype.myBind = function () {
    let args = Array.prototype.slice.call(arguments);
    
    let context = args[0]
    let otherArgs = args.slice(1)
    
    return (...secondArgs) => {
        this.call(context, otherArgs.concat(secondArgs))
    }

  }


markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true

markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true