// Please predict the output of the following programs, and explain why they output what they do.

// Problem 1

var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// will log 'outer', 'inner', 'outer',
// since the outer scope does not access the inner scope variable, but the inner scope variable declaration shadows the outer scope variable

// Problem 2

var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// wil log 'outer', 'inner', 'inner'
// Since the function inner scope accesses the outer variable and reassigns a new value to it.

// Problem 3

var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

// will log: 'empty', 'play station', 'computer'
// Due to overwriting of the outer scope variable in shop1() and shop2() and variable shadowing in shop3()

// Problem 4

function hello() {
  a = 'hello';
}

hello();
console.log(a);

// 'hello'
// Since a global variable 'a' is created during `hello()` execution.

// Problem 5

function hello() {
  var a = 'hello';
}

hello();
console.log(a);

// will raise a ReferenceError for not defined variable a. The outer scope can not access the function's inner scope variable `a`.

// Problem 6

console.log(a);

var a = 1;

// undefined
// due to hoisting of the variable declaration

// Problem 7

console.log(a);

function hello() {
  a = 1;
}

// will raise ReferenceError for not defined a, since even after function definition hoisting the variable a is still not defined.
