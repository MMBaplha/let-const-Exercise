ES5 Global Constants:
var PI = 3.14;
PI = 42; // stop me from doing this!


ES2015 Global Constants:

const PI = 3.14

if(true){
    let PI = 3.14;
}

 **Quiz**

1. What is the difference between var and let?

- var can redeclare and reassign its value and let can only reassign but not redeclare. 

2. What is the difference between var and const?

- var can both reassign and redeclare but, const can't do either beacuse const is constant in the every scope.

3. What is the difference between let and const?

- let can reassign it value whereas const can't reassign it value.  

4. What is hoisting?

- hoisting is when a variables are used before they are declared. Only var can cause this sencrio but let and const will quickly send a error. 