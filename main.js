const data = require('./countries.json');

/* creating an array of translation keys */
const keys = [];
data.forEach((element) => {
  Object.keys(element.translations).forEach((item) => {
    keys.push(item);
  });
});

/**
 *Removes all duplicate translation keys
 *@param {1} keys of translation keys
 *@return {unique} a unique array of translation keys
*/
function removeDuplicates(keys) {
  const unique = [];
  keys.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
/* Using terminal parameter as an argument and store it inside an array */
const enteredKey = process.argv.slice(2);
console.log('Key is : ', enteredKey);

/* Checking if entered translation key is supported by.json file.*/
try {
  if (removeDuplicates(keys).includes(enteredKey[0])) {
    console.log(data.map(point => point.translations[enteredKey]
      ? point.translations[enteredKey].official: `No translation for ${enteredKey}.`));
  } else {
    console.log('Translation key is not supported');
  }
} catch (error) {
  console.log('Cannot translate variable');
}
