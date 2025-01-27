# TypeScript for JavaScript Programmers

- [TypeScript for JavaScript Programmers](#typescript-for-javascript-programmers)
  - [1. Relationship to JavaScript](#1-relationship-to-javascript)
  - [2. Types by Inference](#2-types-by-inference)
  - [3. Defining Types](#3-defining-types)
  - [4. Composing Types](#4-composing-types)
    - [Unions](#unions)
    - [Generics](#generics)
  - [5. Structural Type System](#5-structural-type-system)
  - [6. Benefits](#6-benefits)
- [Everyday Types in TypeScript](#everyday-types-in-typescript)
  - [1. Primitives](#1-primitives)
  - [2. Arrays](#2-arrays)
  - [3. Any](#3-any)
  - [4. Functions](#4-functions)
  - [5. Object Types](#5-object-types)
  - [6. Union Types](#6-union-types)
  - [7. Type Aliases](#7-type-aliases)
  - [8. Interfaces](#8-interfaces)


TypeScript is a superset of JavaScript that adds optional static typing and other features to enhance JavaScript development. Here are the key points:

## 1. Relationship to JavaScript
- TypeScript includes all JavaScript features
- Adds a type system on top of JavaScript
- Existing JavaScript code is valid TypeScript code

## 2. Types by Inference
- TypeScript can automatically infer types based on value assignment
- Example:

```JavaScript
let helloWorld = "Hello World";
// TypeScript infers: let helloWorld: string
```

## 3. Defining Types
- TypeScript allows explicit type definitions
- Interfaces can be used to define object shapes:

```JavaScript
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};
```

## 4. Composing Types

### Unions
- Allow a type to be one of several types

```JavaScript
type WindowStates = "open" | "closed" | "minimized";
```

### Generics
- Provide type variables for flexible typing
```JavaScript
type StringArray = Array<string>;
```

## 5. Structural Type System
- TypeScript uses structural typing (duck typing)
- Types are compatible if they have the same shape, regardless of their declared type

## 6. Benefits
- Highlights unexpected behavior in code
- Reduces the chance of bugs
- Improves code maintainability and readability

TypeScript's type system enhances JavaScript development by providing static typing capabilities while maintaining compatibility with existing JavaScript code.

# Everyday Types in TypeScript

TypeScript extends JavaScript by adding a type system. Here's an overview of the most common types:

## 1. Primitives
- `string`: For text values like "Hello, world"
- `number`: For all numbers (no distinction between integers and floats)
- `boolean`: For true/false values

## 2. Arrays
- Syntax: `type[]` or `Array<type>`
- Example: `number[]` for an array of numbers

## 3. Any
- `any`: Used when you don't want TypeScript to check a particular value

## 4. Functions
- Parameter and return type annotations can be specified
- Example:

```JavaScript
function greet(name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

## 5. Object Types
- Define object shapes with property types
- Optional properties use `?`

*Example:*

```JavaScript
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
```

## 6. Union Types
- Combine multiple types

*Example:* 

`number | string`

## 7. Type Aliases
- Create custom names for types

```JavaScript
type Point = {
  x: number;
  y: number;
};
```

## 8. Interfaces
- Another way to name object types
- Can be extended and are always extendable

TypeScript uses structural typing, focusing on the shape of values rather than their declared type.
