
# About

Technical solution for an interview question provided by Kalvad. Co. 

## How it works?  

User must provide a translation key using CLI. Javascript code, written in `main.js` will access `countries.json` and return official translations under that key. 

## Installing 

 1. First, you need to clone this repository to your local machine. 

```bash
git clone https://github.com/TheRadioDept/technical-question.git
```
2. Access cloned repository to work with it. 

```bash
cd technical-question
```

## Executing

To execute program:  
```bash
node main.js {{parameter}} 
```
`{{parameter}}` refers to translation key entered by the user. Please find complete list of supported keys below: 

```
 ['cym','deu','fra','hrv','ita','jpn','nld','por','rus','spa']
 ```

## Tests 

You can run test script to see if program works. Execute `npm test`. The result should be a list of official counties names. 

To test "eslint", please execute `npm run eslint`. 

## Notes 

1. You can install "eslint" by executing following command in your terminal : `npm install eslint --save-dev`
2. Execute `npm init @eslint/config` to configure "eslint" usage in your project. 
3. Execute `npx eslint yourCode.js` to run it. 













