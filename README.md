# technical question
 solution for the technical interview question
Solution to the programming interview question. For the language I chosed Javascript. Json file was parsed as an array into the array.

To run the progam using Linux machine please excecute `node main.js` from the terminal. Keep in mind that you have to download .json file and specify the path to it inside your code.

The solution was implemented using Javascript. 
Please download .json file before running code and change the direction to it in `require()` function, since I wrote it for my local machine. 
My idea was converting the data from .json into an array and use .map to return specific parameter/index. 

`function removeDuplicates(keys)` was implemented to remove duplicates from original array of translation keys. Since few countries have some specific keys, usage of `[0]` to get keys from first country was not a good idea. 
