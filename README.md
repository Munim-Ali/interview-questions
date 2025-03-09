[Interview Questions Javascript](https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-is-an-event-loop)

**KODERLABS INTERVIEW QUESTIONS**

**_Question 1_**: What is Event Loop?

**_Solution_**:

The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.

**_Question 2:_** Browser Based Event Loop

**_Question 3:_** Global Variable

**_Solution_**:

Global variables are accessible throughout your entire program and become properties of the global object (window in browsers or global in Node.js).
It's best practice to avoid using global variables wherever possible due to risks like name collisions and unintended side effects. Use local variables or module-scoped variables to maintain better control over your code.

**_Question 4:_** Global Context

**_Soltuion_**:

The global context is the default scope for JavaScript code that runs outside of any function or block.
Global variables and functions are accessible anywhere in the code and are properties of the global object (window in browsers or global in Node.js).
Care should be taken when using global variables to avoid naming collisions and unintended side effects, especially in larger codebases or when integrating multiple scripts.

**_Question 5:_**
console.log(a, b, c);

let a = 10;
var b = 20;
const c = 30;

**_Solution_:** Output will be undefined in var and reference error in let and const.

**_Question 6:_** We have two variables of any value, swap the values of the variable without using third variable.

**_Solution_:**
let a = 5;
let b = 10;

a = a + b; // a now becomes 15
b = a - b; // b becomes 5 (original value of a)
a = a - b; // a becomes 10 (original value of b)

console.log(a, b); // Output: 10 5

**_Question 7:_** What will be the output?

let a = [1,2,3]
let b = a

b.push(4)
console.log(a,b)

**_Solution_:**
[1,2,3,4], [1,2,3,4]

Both a and b will be affected because b is not a copy of a; it is a reference to the same array in memory. So when you modify b, you're also modifying a, since they both point to the same array. to only change the array **B** we need to create a copy of array at B for that we can use:
.slice()
[...a]
.form()
.concat()

**_Question 8:_** How many data types are there in javascript?
**_Solution_**:

Primitive:

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

Non-primitive

1. Object
2. Array
3. Function

In JavaScript, both plain objects ({}) and arrays ([]) are considered objects because they share the fundamental characteristic of being reference types that can store collections of values. The typeof operator will return "object" for both.

**How to Differentiate Between Objects and Arrays:**
While typeof returns "object" for both arrays and objects, you can use the following methods to differentiate them:

1. Array.isArray
2. Object.prototype.toString.call(obj)

**_Question 9:_**What are closures?
**_Solution_**: A closure is a function that retains access to variables from its parent scope, even after the parent function has executed.

**_Question 10:_**What are lexical scope?
**_Solution_**: Lexical Scope means that a function can access variables defined in its parent scope, even if the function is executed outside that scope.
🔹 Lexical refers to the position where variables and functions are declared in the code.

**REACT QUESTIONS**

**_Question 1:_** What is the basic difference between Class and functional components in react, Why functional components are introduced? What was the drawback in class components in React.

**_Solution_**:

**Why Functional Components Were Introduced**

1. Simplified Syntax: Functional Components are easier to read and write, which improves code clarity and maintainability.
2. Reduced Boilerplate: They require less code to set up and use, with no need for constructor or binding this for event handlers.
3. Hooks: React Hooks provide powerful features for managing state (useState), lifecycle (useEffect), and other functionalities (e.g., useContext, useReducer) in Functional Components.
4. Encouraging Functional Programming: Functional Components encourage a more functional programming approach, which aligns well with React's component-based, declarative philosophy.

**Drawbacks of Class Components**

1. Complex State and Lifecycle Management:
   Class Components use lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount), which often led to complex code when dealing with side effects and component updates.
   Managing state and side effects across multiple lifecycle methods can result in harder-to-read code and increase the risk of bugs.

2. Performance Considerations:
   Although not significantly slower, Class Components require more memory and may perform additional tasks due to the this binding and lifecycle methods.

3. Less Intuitive Syntax:
   Class Components require this to reference state and props, which can be confusing, especially for developers new to JavaScript or React.
   this binding often leads to unexpected behavior, especially in event handlers, requiring additional boilerplate code to bind functions properly in the constructor.

4. Limited Reusability Without Hooks:
   Before Hooks, it was difficult to share stateful logic between components, often resulting in complex higher-order components (HOCs) or render props. Hooks introduced a way to extract and reuse logic more cleanly.

**_Question 2:_** I have two sibling components <ABC /> and <XYZ />, How I can pass the data from one component to another? I cannot use state management library and also couldn't use parent component.

**_Solution_** To pass data between two sibling components (<ABC /> and <XYZ />) without using the parent component, you can use React Context. React Context allows you to create a shared context that both components can access directly without going through the parent.

**_Question 3:_** Why do we have different folders of utils and hooks in react?

**_Solution_**: We cannot use react contect hooks i.e useState and useEffect in utility functions. That's why we maintain these function in different folders.

**CHATGPT INTERVIEW QUESTIONS**

1. What is JavaScript?
   JavaScript is a lightweight, interpreted programming language used to create dynamic web applications.

2. What are the data types in JavaScript?
   JavaScript has 7 primitive types: String, Number, Boolean, Undefined, Null, BigInt, Symbol, and 1 non-primitive type: Object.

3. What is the difference between == and ===?
   == checks value only (type coercion), whereas === checks both value and type (strict equality).

4. What is the difference between var, let, and const?
   var: Function-scoped, hoisted, can be redeclared.
   let: Block-scoped, hoisted but not initialized.
   const: Block-scoped, cannot be reassigned.

5. What is hoisting in JavaScript?
   Hoisting moves function and variable declarations to the top of their scope before execution.

6. What is closure in JavaScript?
   A closure is a function that remembers variables from its lexical scope, even after the parent function has executed.

7. What is lexical scope?
   Lexical scope means a function can access variables from its parent scope due to static scoping.

8. What is the difference between function declaration and function expression?
   Function Declaration: Named function, hoisted.
   Function Expression: Anonymous function assigned to a variable, not hoisted.

9. What is the difference between null and undefined?
   null: A deliberate non-value.
   undefined: A variable that has been declared but not assigned a value.

10. What is an Immediately Invoked Function Expression (IIFE)?
    An IIFE is a function that executes immediately after being defined:

(function() { console.log("IIFE"); })();

11. What is the difference between map(), forEach(), and filter()?
    map(): Returns a new array with transformed elements.
    forEach(): Iterates but doesn’t return a new array.
    filter(): Returns a new array with elements that meet a condition.

12. What is the difference between slice() and splice()?
    slice(): Returns a new array without modifying the original.
    splice(): Modifies the original array by adding/removing elements.

13. What is the difference between synchronous and asynchronous JavaScript?
    Synchronous: Executes line by line.
    Asynchronous: Executes tasks in the background (via callbacks, promises, async/await).

14. What are Promises in JavaScript?
    A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

15. What are async and await?
    async makes a function return a Promise, and await pauses execution until the Promise resolves.

16. What is event bubbling and event capturing?
    Bubbling: Event moves from child to parent.
    Capturing (Trickling): Event moves from parent to child.

17. What is the this keyword in JavaScript?
    this refers to the object that is executing the function, and its value depends on where it is called.

18. How does bind(), call(), and apply() work?
    bind(): Returns a new function with this set to a specific object.
    call(): Calls the function with a specific this value and arguments.
    apply(): Same as call() but takes arguments as an array.

19. What is memoization?
    Memoization is an optimization technique that stores function results to avoid redundant computations.

20. What is the difference between deep copy and shallow copy?
    Shallow copy: Copies only references to objects (Object.assign, spread operator).
    Deep copy: Recursively copies all properties (JSON.parse(JSON.stringify(obj)), structuredClone()).

21. What is the event loop in JavaScript?
    The event loop allows JavaScript to handle asynchronous tasks by pushing them from the callback queue to the call stack when it's empty.

22. What is debouncing and throttling?
    Debouncing: Delays function execution until after a specified delay.
    Throttling: Limits function execution to once in a specified time frame.

23. What is the difference between localStorage, sessionStorage, and cookies?
    localStorage: Persistent storage, no expiration.
    sessionStorage: Clears when the session ends.
    cookies: Small, can be sent with HTTP requests, has an expiration date.

24. What is JSON.stringify() and JSON.parse()?
    JSON.stringify(): Converts an object to a JSON string.
    JSON.parse(): Converts a JSON string back to an object.

25. How do you make an API call in JavaScript?
    Using fetch() or axios:
    fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));

26. What is a higher-order function?
    A function that takes another function as an argument or returns a function.

27. What is destructuring in JavaScript?
    A way to extract values from arrays/objects into variables:
    const { name, age } = person;

28. What is the difference between setTimeout and setInterval?
    setTimeout: Executes a function once after a delay.
    setInterval: Executes a function repeatedly at fixed intervals.

29. How does JavaScript handle memory management?
    JavaScript uses garbage collection (mark-and-sweep algorithm) to free memory used by unreachable objects.

30. What is use strict in JavaScript?
    "use strict" enforces stricter parsing and error handling to prevent silent bugs.
