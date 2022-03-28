
/* Passing .json file into javascript*/
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
  console.log(data.map(point=>point.translations[enteredKey].official));
} catch (error) {
  if (enteredKey == null) {
    console.log("Cannot translate variable")
  } else {
    console.log("Key cannot be empty");
  }
}

