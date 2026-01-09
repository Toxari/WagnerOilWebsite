let money = document.querySelector('.money-count')
let parsedMoney = parseFloat(money.innerHTML)

let bBCost = document.querySelector('.bB-cost')
let parsedBBCost = parseFloat(bBCost.innerHTML)
let bBLevel = document.querySelector(".bB-level")
let bBIncrease = document.querySelector(".bB-increase")
let parsedBBIncr = parseFloat(bBIncrease.innerHTML)

let mpc = 1;

function incrementMoney() {

    money.innerHTML = Math.round(parsedMoney += mpc);
}

function buyBB() {
    if (parsedMoney >= parsedBBCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedBBCost);

        bBLevel.innerHTML ++

        parsedBBIncr = parseFloat((parsedBBIncr * 1.03).toFixed(2))
        bBIncrease.innerHTML =  parsedBBIncr
        mpc += parsedBBIncr

        parsedBBCost *= 1.18;
        bBCost.innerHTML = Math.round(parsedBBCost)
    }
}