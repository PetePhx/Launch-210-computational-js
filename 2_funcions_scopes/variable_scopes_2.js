// Please predict the output of the following programs, and explain why they output what they do.

// Problem 1
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// `undefined`
// since the variable declaration is hoisted, but the assignment never takes place.

// Problem 2

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// 'hello', REferenceError Raised
// The variable declaration within the if statement is hoisted to the top of the function, and then it is assigned 'hello'. Since we have the variable declared, it won't generate a global variable, hence the error in the last line of the program.

// Problem 3

var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);

// 4
// since variable is is reaasigned after each iteration of the loop. the declaration has no effect as it is redundant to the first line.

// Problem 4

var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);

// 4, 3
// execution of foo() returns bar() execution result, which is 4.
// a is reassigned within bar() execution.

// Problem 5

var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);

// 'superNested', 'global'
// superNested execution will overwrite the upper level variables, which is returned
// variable a is declared in checkScope, so it won't overwrite the global `a`.

// Problem 6

var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// 'outer', 'outer', 'outer', 'inner'
// variable a passed in as an argument being reassigned within the function won't have any effect in the outer scope. reassigning `b` will overwrite the outer scope.

// Problem 7

var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

// 50, 60, 15
// executing incrementby() will access the outer variable `total` and increment the amount by 10.


// Problem 8

var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

// 'outer', then Raises TypeError for an undefined function setScope(), since the function expression is not hoisted, only the variable setScope declaration.
