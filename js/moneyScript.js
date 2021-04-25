let sellUahUsd = 28
let sellUahEur = 33
let sellUahRur = 0.38
let sellUahBtc = null
const takeData = () => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            sellUahUsd = data[0]["sale"]
            sellUahEur = data[1]["sale"]
            sellUahRur = data[2]["sale"]
            sellUahBtc = data[3]["sale"]
            console.log("Successful")
        })
        .catch(function (error) {
            console.log(error)
        })
}
takeData()
const convertUahIntoUsd = (value) => {
    document.getElementById("uahSellUsdOutput").innerHTML = (value / sellUahUsd).toFixed(2).toString()
    document.getElementById("uahSellEurOutput").innerHTML = (value / sellUahEur).toFixed(2).toString()
    document.getElementById("uahSellRurOutput").innerHTML = (value / sellUahRur).toFixed(2).toString()
    document.getElementById("uahSellBtcOutput").innerHTML = (value / sellUahBtc).toFixed(6).toString()
}