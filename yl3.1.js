const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Sisestage mitu korda äratada: `, kord => {
    for (let i = 0; i < kord; i++) {
        console.log("Touse ja sara");
    }
    rl.close();
});

