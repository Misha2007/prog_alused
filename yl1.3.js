const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage astme alus: `, alus => {
  rl.question(`Sisestage astendja: `, astendaja => {
    console.log(astendaja ** alus);
    rl.close();
  })
});