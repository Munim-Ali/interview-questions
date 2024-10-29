[Interview Questions Javascript](https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-is-an-event-loop)

**KODERLABS INTERVIEW QUESTIONS**

**_Question 1_**: What is Event Loop?

**_Solution_**:

The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.

Note: The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.

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

**_Solution_:** Output will be undefined

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
