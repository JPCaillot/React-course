// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string;

let isInstructor: boolean;

let hobby: undefined; // or null - not really useful

// More complex types

let hobbies: string[];

let people: any; // fallback type

let person: {
    name: string;
    age: number;
}[];

person = [{
    name: 'Max',
    age: 32
}];

// Type inference

let course: string | number = 'React - the complete guide';

course = 1234;

type Person = {
    name: string;
    age: number;
};

let teachers: Person[];

// Functions & types

function add(a: number, b: number): number | string {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
};

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

// updatedArray[0].split(''); //which shouldn't be allowed