const readline = require('readline');

/* Passing .json file into javascript*/
const data = require('../JS/countries.json');

/* creating an array of translation keys */
const keys = [];
data.forEach((element) => {
  Object.keys(element.translations).forEach((item) => {
    keys.push(item);
  });
});

/**
 * Removes all duplicate translation keys
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

console.log('Supported translation keys: \n' + removeDuplicates(keys));

/* creating an interface for user's input. */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout});

// Requesting User to enter the translation key
rl.question('Please enter the translation key to see countries names: ', (translationKey) => {
/* Checking if entered translation key is supported by.json file.*/
  if (removeDuplicates(keys).includes(translationKey)) {
    /* printing every country name depend on the entered translation key. */
    console.log(data.map(point=>point.translations[translationKey].official)); }
  else {
    console.log('Translation key is not supported.');
  }
  rl.close();
});

