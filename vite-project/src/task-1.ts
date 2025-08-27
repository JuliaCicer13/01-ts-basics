const isOnline: boolean = true;
const age: number = 29;
const weight: number = 57;
const username: string = "Yuliia";

let user: null = null;
let config: undefined;


interface User {
   readonly name: string;
    age?: number;
}

const poly: User = {
    name: "Yuliia",
    age: 22
}

const jacob: User = {
    name: "Jacob",
    age: 33
}


// ..................Arrays;

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.length;
numbers.includes(3);
const countNumbers = numbers.map(num => num * 2);
console.log(countNumbers);

const strings: string[] = ["Alice", "Vasia", "Usuna", "Lilia"];

const numbers: Array<number> = [2, 3, 4, 5, 6];
const names: Array<string> = ["Asia", "Yuliia", "Jlga"];

// Typing massive:

interface User {
    name: string;
    age: number;
}

const users: User[] = [
    {name: "Alice", age: 25},
    {name: "Vasia", age: 33},
]

users.push({ name: "Usi", age: 5 });

// mix types :


let typeId: string | number = 657;
typeId = "657";
typeId = 657;



let currentTime: "light" | "dark" = "light";
let newMessage: "pending" | "shipped" | "dellivered" = "pending";

// mix for objects:

interface User {
    id: number;
    role: "admin" | "user" 
}

const poly: User = {
    id: 1,
    role: "user"
};

const mango: User = {
    id: 2,
    role: "admin"
};

type Id = string | number;

let productId: Id = "543";
let productId: Id = 432;

type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

let orderedStatus: "pending";
let orderedStatus: "canceled";

// &:
type MyType = FirstType & SecondType;
