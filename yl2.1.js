const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage temperatuur: `, temprature => {
    if (temprature < 4.0){ 
        console.log(`Ei ole jäätumise ohtu`)
    } else{
        console.log(`On jäätumise oht`)
    }
    rl.close();
});

