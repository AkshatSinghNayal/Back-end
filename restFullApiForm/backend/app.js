// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`hello this user name is${this.name}`);
//     },
//   };
//   return person;
// }

// console.log("i am akshat");

class Person {
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  talk(){
    console.log(`hi my name is ${this.name}`);
  }
}

let p1 = new Person("akshat",18);
let p2 = new Person("vaishnavi",18); 

