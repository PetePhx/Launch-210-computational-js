/*
Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.
*/

/*
Input: string: length <= 76 (screen width 80)
Output: log the str within a box.

Algo:
  * initialize vars dashedLine and padLine to ''
  * loop through the str.length,
    * add '-' and ' ' to deshedLine, padLine, in each iteration
  * add '+-' and '-+' to dashedLine
  * add '| ' and ' |' to padLine
  * log everthing
*/

function logInBox(str) {
  var dashes = '';
  var padding = '';

  for (var i = 0; i < str.length; i++) {
    dashes += '-';
    padding += ' ';
  }

  dashes = '+-' + dashes + '-+';
  padding = '| ' + padding + ' |';

  console.log(dashes);
  console.log(padding);
  console.log('| ' + str + ' |');
  console.log(padding);
  console.log(dashes);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

/*
Further Exploration

Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.
*/

function logInBoxLen(str, maxLen) {
  var dashes = '';
  var padding = '';

  maxLen = maxLen || (str.length + 4);
  if (str.length > maxLen - 4) str = str.slice(0, maxLen - 4);

  for (var i = 0; i < str.length; i++) {
    dashes += '-';
    padding += ' ';
  }

  dashes = '+-' + dashes + '-+';
  padding = '| ' + padding + ' |';

  console.log(dashes);
  console.log(padding);
  console.log('| ' + str + ' |');
  console.log(padding);
  console.log(dashes);

}

logInBoxLen('To boldly go where no one has gone before.', 20);
/*
+------------------+
|                  |
| To boldly go whe |
|                  |
+------------------+
*/
