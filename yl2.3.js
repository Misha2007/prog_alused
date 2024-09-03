const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`Sisestage enda vanus: `, vanus => {
    rl.question(`Sisestage enda sugu (M, m või N, n): `, sugu => {
        rl.question(`Sisestage treeningu tüüp (1, 2 or 3): `, type => {
            if (sugu == "M" || sugu == "m"){ 
                let pulss = 220 - vanus  
                if (type == "1"){
                    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(pulss * 0.5)} kuni ${Math.round(pulss * 0.7)}`)
                } else if (type == "2"){
                    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(pulss * 0.7)} kuni ${Math.round(pulss * 0.8)}`)
                } else if (type == "3"){
                    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(pulss * 0.8)} kuni ${Math.round(pulss * 0.87)}`)
                }
            } else if (sugu || "N" && sugu == "n") {
                let pulss = 206 - 0.88 * vanus
                if (type == "1"){
                    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(pulss * 0.5)} kuni ${Math.round(pulss * 0.7)}`)
                } else if (type == "2"){
                    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(pulss * 0.7)} kuni ${Math.round(pulss * 0.8)}`)
                } else if (type == "3"){
                    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(pulss * 0.8)} kuni ${Math.round(pulss * 0.87)}`)
                }
            } 
            rl.close();
        })
    })
});

