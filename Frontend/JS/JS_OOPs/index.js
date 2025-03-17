let arr = [1, 2, 3, 5];

// defining our methods

let arr1 = [1, 2, 3, 4];
arr1.sayHello = () => {
  console.log("Hello");
};

let arr2 = [1, 2, 3, 4];
arr2.sayHello = () => {
  console.log("hello");
};

// making copy of prototype and changes pre-build methods structure

arr.__proto__.push = (n) => {
  console.log("we modify push method", n);
};

// Factory Functions

function objectMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi!, my name is ${this.name}`);
    },
  };

  return person;
}

// Constructor's &&  new Operator

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// In Arrow functions 'this' keyword does not point to parent direclty , it point to parent of parent

Person.prototype.talk = () => {
  console.log(`Hi. my name is ${this.name}`);
};

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 21);

// Class in JS

class Human {
  constructor(name, age) {
    console.log("now, u r in Human class constructor");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi, my name is ${this.name}`);
  }
}

let H1 = new Human("joe", 34);
let H2 = new Human("kiriko", 23);

// Inheritance of classes in js

// Let's inheritate some features from Human class

class Student extends Human {
  constructor(name, age, marks) {
    console.log("Now, u r in Students constructor");
    super(name, age); // called to Human class's constructor
    this.marks = marks;
  }
}

class Teacher extends Human {
  constructor(name, age, subject) {
    console.log("Now, u r in Teacher's constructor");
    super(name, age); // called to Human class's constructor
    this.subject = subject;
  }
}

let stu1 = new Student("monte", 12, 9.6);
let teach1 = new Teacher("seki-chan", 23, "japanese-history");