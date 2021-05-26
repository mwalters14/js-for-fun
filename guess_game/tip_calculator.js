const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 
        ? bill * 0.15 : bill * 0.2
}

console.log(calcTip(125));