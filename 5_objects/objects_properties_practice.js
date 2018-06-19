// Practice Problems: Working with Object Properties

// 1. Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

function objectHasProperty(obj, str) {
  for (var prop in obj) {
    if (prop === str) return true;
  }

  return false;
}

// alternative using Object.keys()

function objectHasProperty(obj, str) {
  return (Object.keys(obj).indexOf(str) === -1 ? false : true);
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

// 2. Write a function named incrementProperty that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

function incrementProperty(obj, str) {
  if (Object.keys(obj).indexOf(str) !== -1) {
    obj[str]++;
  } else {
    obj[str] = 1;
  }

  return obj[str];
}

var wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }

// 3. Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

function copyProperties(obj1, obj2) {
  var count = 0;
  for (prop in obj1) {
    obj2[prop] = obj1[prop];
    count++;
  }
  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }

// 4. Write a function named wordCount that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(str) {
  var arr = str.split(' ');
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] === undefined ? obj[arr[i]] = 1 : obj[arr[i]]++;
  }

  return obj;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
