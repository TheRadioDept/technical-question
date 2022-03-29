# technical question
# Introduction

Technical solution for an interview question provided by Kalvad. Co.

## Execution

 1. First, you need to clone this repository to your local machine. 

```bash
git clone https://github.com/TheRadioDept/technical-question.git
```
2. Access cloned repository to work with it. 

```bash
cd technical-question
```
3. Execute program. 
```bash
node main.js {{parameter}} 
```














Solution for the technical interview question
Solution to the programming interview question. For the language I chose Javascript. Json file was parsed as an array into the array.

To run the program:  
1.Please clone this repository on your local machine `git clone https://github.com/TheRadioDept/technical-question.git`.

2.Access the cloned repository  `cd technical-question`.

3.Execute `node main.js {{translationKey}}`, where `translationKey` = `['cym','deu','fra','hrv','ita','jpn','nld','por','rus','spa']`, in your terminal. 

NOTES:
`function removeDuplicates(keys)` was implemented to remove duplicates from original array of translation keys. Since few countries have some specific keys, usage of `[0]` to get keys from first country was not a good idea. 

The code has been formatted using the "ESLINT" standard.

