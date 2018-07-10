/*

Stack Machine Interpretation

A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

Consider a MULT operation in a stack-and-register language. It multiplies the stack value with the register value, removes the value from the stack, and stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation transforms the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is transformed to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

    n : Place a value, n, in the register. Do not modify the stack.
    PUSH : Push the register value onto the stack. Leave the value in the register.
    ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
    SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
    MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
    DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
    MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
    POP : Remove the topmost item from the stack and place it in the register.
    PRINT : Print the register value.

All operations are integer operations (which is only important with DIV and MOD).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

*/

/*
input: string of operations, separated by white space

output: result of the operations performed from left to right

algorithm:
  - initialize stack and register variables to [] and 0.
  - split the input str to individual operations: opArr
  - loop through the opArr
    - check if opArr[i] is a number, if so, copy it to register
      - String(Number(opArr[i])) === opArr[i]
    - else, execute a switch statement for (PUSH, POP, ADD, SUB, MULT, DIV, MOD, PRINT)

*/
var register;
var stack;

function minilang(str) {
  register = 0;
  stack = [];
  var opArr = str.toUpperCase().split(/\s+/);
  opArr.forEach(elm => operate(elm));
}

function operate(elm) {
  if (String(Number(elm)) === elm) {
    register = Number(elm);
    return;
  }

  switch (elm) {
    case 'PUSH':
      stack.push(register);
      return;
    case 'POP':
      register = stack.pop();
      return (isNaN(register) ? console.log('POP ERROR!!!') : undefined);
    case 'ADD':
      register += stack.pop();
      return (isNaN(register) ? console.log('ADD ERROR!!!') : undefined);
    case 'SUB':
      register -= stack.pop();
      return (isNaN(register) ? console.log('SUB ERROR!!!') : undefined);
    case 'MULT':
      register *= stack.pop();
      return (isNaN(register) ? console.log('MULT ERROR!!!') : undefined);
    case 'DIV':
      register = Math.floor(register / stack.pop());
      return (isNaN(register) ? console.log('DIV ERROR!!!') : undefined);
    case 'MOD':
      register %= stack.pop();
      return (isNaN(register) ? console.log('MOD ERROR!!!') : undefined);
    case 'PRINT':
      if (!(isNaN(register))) console.log(register);
      return (isNaN(register) ? console.log('PRINT ERROR!!!') : undefined);
    default:
      console.log('ERROR!!!');
      return;
  }
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('POP');
// POP ERROR!!!

minilang('5 PUSH ADD PRINT POP PRINT');
// 10
// POP ERROR!!!
// PRINT ERROR!!!
