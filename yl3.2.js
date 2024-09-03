const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Sisestage ringide arv: `, arv => {
    let porgand = 0
    for (let i = 0; i <= arv; i++) {
        if (i % 2 == 0) {
            porgand +=  i
        }
    }
    console.log(`Sisestage porgandite koguarvu on ${porgand}`);
    rl.close();
});

