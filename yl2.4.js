const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`kas ta soovite istekoha valida (ise) või loosida (loos) `, ise_loos => {
    if (ise_loos == "loos"){
        if (Math.round(Math.random()) == 1) {
            console.log(`Istekoht lositi Aknakoht`)
        } else {
            console.log(`Istekoht lositi Vahekäigukoht`)
        }
        rl.close();
    } else if (ise_loos == "ise") {
        rl.question(`kas ta soovite istuda akna ääres (aken) või mitte (muu)? `, valik => {
                if (valik == "aken") { 
                    console.log(`Valisite ise. Aknakoht`)
                } else if (valik == "muu") { 
                    console.log(`Valisite ise. Vahekäigukoht`)
                } 
                rl.close();
            })
    }
});

