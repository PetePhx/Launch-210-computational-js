/*
Code Review: Longest Sentence

Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. Log the longest sentence and its word count to the console.

Post your solution as a Code Review in this lesson's forum.

*/

/*
- input: string (text)
- output: the longest sentence in the text.

- algorithm:
  - split the text an array of strings, each a sentence: sentArr
    - sentences start with non-space character, end with: ., !, ?
  - map the sentArr to an array of numbers, lenArr (number of words in sentence)
    - trim the sentence (get rid of the \n, \s, etc)
    - split on blank space (one or more \s) to an array of words
    - filter out words that are zero length (if any)
    - get the length of the arrays: lenArr
  - find the index of the maximum of the lenArr (idx), get the longest sentence from sentArr[idx]
  - find the punctuation by matching text against /[.!?]/, concat the idx'th item to the longest array.
*/

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  var sentArr = text.match(/\b[^.?!]*(\.|\?|\!)/g);           // boundary, 0/more non-punctuation, punctuation
  var lenArr = sentArr.map(sent => sent.split(/\s+/).length); // split sentences to words, return length
  var maxLen = Math.max(...lenArr);
  var longestArr = sentArr.filter((_, idx) => lenArr[idx] === maxLen); // select sentence(s) with max length

  longestArr.forEach(sentence => console.log(sentence));               // log the longest setnece(s)
  console.log();

  if (longestArr.length === 1) {
    console.log('The longest sentence has ' + maxLen + ' word' + (maxLen === 1 ? '.' : 's.'));
  } else {
    console.log('The longest sentences each have ' + maxLen + ' word' + (maxLen === 1 ? '.' : 's.'));
  }
}

longestSentence(longText);

// console output

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence('hello? hello? HELLOOOO!');

// hello?
// hello?
// HELLOOOO!
//
// The longest sentences each have 1 word.
