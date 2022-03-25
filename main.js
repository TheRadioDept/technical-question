const data = require('/home/farkhad/progs/JS/countries.json'); /* Passing a .json file into javascript*/

var keys = ['cym','deu','fra','hrv','ita','jpn','nld','por','rus','spa'];  /* creating an array of translation keys */
const keys1 = keys.toString().toLowerCase();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question('Please enter the translation key:  ', (key) => {
        if (keys1.includes(key)){
            console.log(data.map(point=>point.translations[key]));
        }
    else {
        console.log("Translation key is not supported. ");
    }
  rl.close();
});
(${answer})){ 
    
    console.log(data.map(point=>point.translations.deu.official));  /* printing official name of the country depending on the translation key inserted 
}
else{ 
    console.log("Translation key is not supported");
} 
*/