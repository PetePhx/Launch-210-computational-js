/*

Practice Problem: Formatting Bands

We have the following Array of information for some popular bands:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

There are problems with this data, though, so we first have to clean it up before we can use it:

    The band countries are wrong: all the bands should have 'Canada' as the country.
    The band name should have all words capitalized.
    Remove all dots from the band names.

Write a function that can process the input band Array and return an Array that contains the fixed information:

*/

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return bands.map(function (bnd) {
    return { name: bnd.name.replace(/\./g, '')
                           .replace(/\b(\w)/g, chr => chr.toUpperCase()),
             country: 'Canada',
             active: bnd.active };
  })
}

processBands(bands);

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
