const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage oma nimi: `, nimi => {
  rl.question(`Sisestage lubatud kiirus (km/h): `, lubatud_kiirus => {
    rl.question(`Sisestage tegelik kiirus (km/h): `, tegelik_kiirus => { 
        if (lubatud_kiirus > tegelik_kiirus){ 
            console.log(`${nimi} Lähme sõidame`)
        } else{
            console.log(`${nimi} kiiruse ületamise eest on teie trahv ${(tegelik_kiirus - lubatud_kiirus) * 3} eurot.`)
        }
        rl.close();
      })
  })
});

