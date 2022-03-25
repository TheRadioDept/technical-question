const data = require('/home/farkhad/progs/JS/countries.json');          /* Passing .json file into javascript*/
const readline = require('readline');

var keys = ['cym', 'deu', 'fra', 'hrv', 'ita', 'jpn', 'nld', 'por', 'rus', 'spa'];  /* creating an array of translation keys */
const keys1 = keys.toString().toLowerCase();        /*Since .includes() is key sensitive, I had to use .toString() and .toLowerCase();  */

console.log("Supported translation keys are: \n" + keys + "\n");


/*creating an interface for user's input. */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*Requesting User to enter the translation key. If Key is supported- program will print every country from .json file with specific translation key.*/

rl.question('Please enter the translation key to see countries names:  ', (key) => {
    if (keys1.includes(key)) {             /*Checking if entered translation key is supported and exsists in .json file.*/
        console.log(data.map(point => point.translations[key].official));        /*printing every country name depend on the entered translation key. */
    }
    else {
        console.log("Translation key is not supported. ");
    }
    rl.close();
});