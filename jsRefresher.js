 //Arrow Functions!
  function myFnc() {
    console.log("Anything");
 }
// is equal to
 const myFnc = () => {
    console.log("Anything");
 }
 // () can be omitted for just one argument
 // {} can be omitted for a simple return function
 
 //Exports and Imports
 //export default ___ => imports will always get this element, despite of how it's called on the import
 //import {...} from ... => it's important to use {} to get the specific element from file
 //import {... as ...} => setting an alias
 //import * as anyAlias => will create an object from the export
 
 //Reviewing Classes 
 class Human {
    constructor(){
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }
 }
 
 class Person extends Human{
    constructor(){
        super();
        this.name = 'Max';
    }

    printMyName(){
        console.log(this.name);
    }
 }

 const person1 = new Person();
 person1.printMyName();
 person1.printGender();

//New syntaxes for classes
class Human {
    constructor(){
        this.gender = 'male';
    }
//equals
    gender = 'male'
//and
    printGender(){
        console.log(this.gender);
    }
//equals
    printGender = () => {
        console.log(this.gender);
    }
}

//Spread & Rest Operator (...)
//Spread: to pull all the elements of an array into something, array or object
const numbers = [1, 2, 3];
const withoutSpread = [numbers, 4];
console.log(withoutSpread); //[[1, 2, 3], 4]

const newNumbers = [...numbers, 4];
console.log(newNumbers); //[1, 2, 3, 4]

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
};
//Rest: to let an undefined number of elements be arguments of a function
const filter = (...args) => {
    return args.filter(el => el === 1); //new arrow function in the method that analyzes if the element of an array is a number equal to 1
}

console.log(filter(1, 2, 3)); // [1] is the only element that passes the test

//Destructuring - pull single elements from arrays/objects and store them in variables
const numbers3 = [1, 2, 3];
[num1, , num2] = numbers3; // the order matters
console.log(num1, num3); // 1 3

person4 = {name:'Max', age: 28};
({name} = person4); // the name of the property matters
console.log(name); // 'Max'

//Primitive and Reference Types
//Number - String - Boolean (Primitive)
//When copied in another variable, the value will be passed
const number32 = 1;
const number33 = number32;
console.log(number33); // 1
//Array - Object (Reference)
//When copied, only the pointer for the original variable will be stored
const person34 = {
    name: 'Max'
};
const secondPerson34 = person34;
person34.name = 'Manu'; 
console.log(secondPerson34); // [object Object] {name: 'Manu'}
//The value of the second variable will change along with the first!
//this can be solved by using Spread operator
const secondPerson35 = {
    ...person34
};
console.log(secondPerson35); // [object Object] {name: 'Max'}

//Array Functions (sort, map...)
const numbers5 = [1, 2, 3];
const doubleNumArray = numbers5.map((num) => {
    return num * 2;
});
console.log(doubleNumArray); // [2, 4, 6]