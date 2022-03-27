# technical question
 solution for the technical interview question
Solution to the programming interview question. For the language I chosed Javascript. Json file was parsed as an array into the array.

To run the program please execute `node main.js {translationKey}` in your linux terminal. `{translationKeys}` is an parameter used to define a specific key for the translation of countries names. For example `node main.js rus` will print all countries names translated using russian language.
All supported keys are `keys=['cym','deu','fra','hrv','ita','jpn','nld','por','rus','spa']`

`function removeDuplicates(keys)` was implemented to remove duplicates from original array of translation keys. Since few countries have some specific keys, usage of `[0]` to get keys from first country was not a good idea. 

The code was formatted using "eslint" standarts. 
