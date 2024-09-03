const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Sisestage kirja suurus: `, suurus => {
    rl.question(`Sisestage kirja teema pealkiri: `, pealkiri => {
        rl.question(`Kas kirjaga on kaasas fail: `, fail => {
            if (suurus > 1 && fail == "jah" || pealkiri == ""){ 
                console.log(`Kiri on spämm`)
            } else {
                console.log('Kiri ei ole spämm')
            }
            rl.close();
        })
    })
});

