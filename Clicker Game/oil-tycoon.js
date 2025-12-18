let money = document.querySelector('.money-count')
let parsedMoney = parseFloat(money.innerHTML)

let oilFountainCost = document.querySelector('.oil-fountain-cost')
let parsedOilFntnCost = parseFloat(oilFountainCost.innerHTML)
let oilFntnLevel = document.querySelector(".oilFntn-level")
let oilFntnIncrease = document.querySelector(".oilFntn-increase")
let parsedOilFntnIncr = parseFloat(oilFntnIncrease.innerHTML)

let mpc = 1;

function incrementMoney() {

    money.innerHTML = Math.round(parsedMoney += mpc);
}

function buyOilFntn() {
    if (parsedMoney >= parsedOilFntnCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedOilFntnCost);

        oilFntnLevel.innerHTML ++

        parsedOilFntnIncr = parseFloat((parsedOilFntnIncr * 1.03).toFixed(2))
        oilFntnIncrease.innerHTML =  parsedOilFntnIncr
        mpc += parsedOilFntnIncr

        parsedOilFntnCost *= 1.18;
        oilFountainCost.innerHTML = Math.round(parsedOilFntnCost)
    }
}