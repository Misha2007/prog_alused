const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Mitu pöialpoiss tahab õunu: `, arv => {
    let left = 0
    for (let i = 0; i < arv; i++) {
        let number = Math.floor(Math.random() * 2) + 1;
        console.log(number);
        left += number;
    }
    console.log(`Lumivalgekesele jäi ${14 - left} õuna!`);
    rl.close();
});