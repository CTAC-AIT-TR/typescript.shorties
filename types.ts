const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript!";
console.log(message);

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "Typescript"];

// Tuple
const contact: [string, number] = ["Christian", 123456];
contact[0]; //returns 'Christian'
contact[1]; //returns 123456
contact.push("Stas", 654321);
console.log(contact);

console.log("<------------------------------>");

contact[0] = contact[0].concat(" Danneker");
contact[0] = contact[0].concat(" - Slavezki");
console.log(contact);

console.log("<------------------------------>");

// Any
let variable: any = 21;
variable = "Bobik";
variable = [];

// -----------------------------------------

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Christian");

// Never
function throwError(message: string): never {
  throw new Error(message);
}

// эта функция никогда не закончится
// ----------------------------
// function infinite(): never {
//   while (true) {}
// }
// ----------------------------

// Type Alias
type Login = string;
let login: Login;
login = "admin";
console.log(login);

// Union
type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
console.log(id1, id2);

// Literal
type Size = "small" | "medium" | "large";
const size1: Size = "small";
const size2: Size = "medium";
const size3: Size = "large";
console.log(size1, size2, size3);
