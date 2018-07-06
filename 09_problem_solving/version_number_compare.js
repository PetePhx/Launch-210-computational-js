/*

An Example Problem: Comparing Version Numbers

To look at the steps of this problem solving approach in depth, we will work through a problem and see how to apply each step in the process. The problem we will look at compares software version numbers.

While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

    If version1 > version2, we should return 1.
    If version1 < version2, we should return -1.
    If version1 === version2, we should return 0.
    If either version number contains characters other than digits and the . character, we should return null.

Here is an example of version number ordering:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
*/

/*
Inputs: two version strings. each series of numbers dot-separated

Ouput: the result of comparison of version numbers.

Rules: Compare major numbers first.
          if un-equal, return result,
          if equal, compare minor versions numbers. continue likewise
       Missing parts are equivalent to 0.

       if non-digit-non-dot character, return null (invalid input)
       if not starting and ending with perion, or double-period etc. return null (invalid)

Algorithm:
  - split ver1, ver2 to arrays of numbers.
  - if ver1.length > ver2.length, pad ver2 with zero elements
    - similarly if ver2.length > ver1.length
      - can be factored in a function (padArraysZero)
  - loop through ver1 indices
    - if ver1[idx] > ver2[idx] return 1
    - if ver1[idx] < ver2[idx] return -1
  - return 0
*/

function compareVersions(ver1, ver2) {
  var re = /^\d+(\.\d+)*$/;
  if (!re.test(ver1) || !re.test(ver2)) return null; //invalid sequences

  var arr1 = ver1.split('.').map(Number);
  var arr2 = ver2.split('.').map(Number);
  var i;

  padArraysZero(arr1, arr2);

  for(i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) return 1;
    if (arr2[i] > arr1[i]) return -1;
  }

  return 0;
}

function padArraysZero(arr1, arr2) {
  if (arr1.length > arr2.length) {
    arr2.push(...Array(arr1.length - arr2.length).fill(0));
  } else if (arr2.length > arr1.length) {
    arr1.push(...Array(arr2.length - arr1.length).fill(0));
  }
  return;
}

console.log(compareVersions('1', '1.0'));         // 0
console.log(compareVersions('0.1', '1.0'));       // -1
console.log(compareVersions('1.2.0', '1.18.0'));  // -1
console.log(compareVersions('1.', '1.0'));        // null
console.log(compareVersions('1.1', '1.a'));       // null
