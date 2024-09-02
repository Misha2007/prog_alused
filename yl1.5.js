const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage ainepunktide arv: `, ainepunkt => {
  rl.question(`Sisestage nädalate arv: `, nädal => {
        console.log(Math.round(ainepunkt * 26 / nädal));
        rl.close();
  })
});

