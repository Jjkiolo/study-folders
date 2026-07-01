// basic types

let username: string = "ddd";
let something: number = 22;
let isActive: boolean = false;

let skills: string[] = ["stupid", "idiot"];

let smthelse: { work: string; age: number } = {
    work: "advanced electric machines",
    age: 22
};

// type inference
let message = "basic message";

// then the typescript infers that message variable is a string as it does not have any type specified

// Functions

function greet(name: string): string {
    return 'Hello, ${name}';
}

console.log(greet("Prav"));

const add = (a: string, b: string): string => a + b;

// Optional parameters

function greetUser(name: string, title?: string) {
    return title ? '${name} ${title}' : name;
}

// means if title is missing it only returns the name

// Interfaces, a collection of objects

interface User {
    id: number;
    name: string;
    email: string;
}

const smth: User = {
    id: 12,
    name: "Mike O'Neill",
    email: "mike@example.com"
};

// Type Aliases

type UserRole = "admin" | "editor" | "viewer";

type SMth = {
    id: number;
    name: string;
    role: UserRole;
};

// Union Types - multiple types, for example it can be string or number 

let id: string | number;

id = 123;
id = "some random  string innit";

// Arrays and Generics

let instances1: number[] = [1, 2, 3];

// is the same as

let instances2: Array<number> = [1, 3];

// Partial makes all the objects of an interface optional for example

interface User1 {
    name: string;
    email: string;
}

type PartialUser = Partial<User>;

// PartialUser is now like

interface User2 {
    name?: string;
    email?: string;
}

// The Pick utility type creates a new type by selecting specific properties from an existing type. This is useful for defining props or state with only the required fields.


//Omit is the other way around it removes one of the objects


type UserPreview = Pick<User1, "name">;

// now UserPreview only contains the object "name"

class User {
    constructor(
        public name: string,
    ) {} // this section is always empty as the constructor is like an interface for a class

    greet() {
        return 'Hello ${this.name}';
    }
}

