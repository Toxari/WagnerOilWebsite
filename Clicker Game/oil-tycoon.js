let money = document.querySelector('.money-count')
let parsedMoney = parseFloat(money.innerHTML)

let bBCost = document.querySelector('.bB-cost')
let parsedBBCost = parseFloat(bBCost.innerHTML)
let bBLevel = document.querySelector(".bB-level")
let bBIncrease = document.querySelector(".bB-increase")
let parsedBBIncr = parseFloat(bBIncrease.innerHTML)

let rGCost = document.querySelector('.rG-cost')
let parsedRGCost = parseFloat(rGCost.innerHTML)
let rGLevel = document.querySelector(".rG-level")
let rGIncrease = document.querySelector(".rG-increase")
let parsedRGIncr = parseFloat(rGIncrease.innerHTML)

let oilFntnCost = document.querySelector('.oil-fountain-cost')
let parsedOilFntnCost = parseFloat(oilFntnCost.innerHTML)
let oilFntnLevel = document.querySelector(".oilFntn-level")
let oilFntnIncrease = document.querySelector(".oilFntn-increase")
let parsedOilFntnIncr = parseFloat(oilFntnIncrease.innerHTML)

let mpcText = document.getElementById("mpc-text")
let mpsText = document.getElementById("mps-text")

let bucketContainer = document.querySelector('.bucket-container')

let mpc = 1;

let mps = 0;

function incrementMoney(event) {

    money.innerHTML = Math.round(parsedMoney += mpc);

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = `+${Math.round(mpc)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none`
    bucketContainer.appendChild(div)

    div.classList.add('fade-up')

    timeout(div)
}

const timeout = (div) => {
    setTimeout(()=> {
        div.remove()
    }, 800)
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

function buyRG() {
    if (parsedMoney >= parsedRGCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedRGCost);

        rGLevel.innerHTML ++

        parsedRGIncr = parseFloat((parsedRGIncr * 1.03).toFixed(2))
        rGIncrease.innerHTML =  parsedRGIncr
        mps += parsedRGIncr

        parsedRGCost *= 1.18;
        rGCost.innerHTML = Math.round(parsedRGCost)
    }
}

function buyOilFntn() {
    if (parsedMoney >= parsedOilFntnCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedOilFntnCost);

        oilFntnLevel.innerHTML ++

        parsedOilFntnIncr = parseFloat((parsedOilFntnIncr * 1.03).toFixed(2))
        oilFntnIncrease.innerHTML =  parsedOilFntnIncr
        mps += parsedOilFntnIncr

        parsedOilFntnCost *= 1.18;
        oilFntnCost.innerHTML = Math.round(parsedOilFntnCost)
    }
}


setInterval(() => {
    parsedMoney += mps / 10
    money.innerHTML = Math.round(parsedMoney)
    mpcText.innerHTML = Math.round(mpc)
    mpsText.innerHTML = Math.round(mps);
}, 100)