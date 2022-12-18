var gameData = {
    temp: 0,
    tempPerClick: 1,
    tempPerClickCost: 10
}

function getTemp() {
    gameData.temp += gameData.tempPerClick
    document.getElementById("tempClicked").innerHTML = gameData.temp + " Temp Clicked"
}

function buyTempPerClick() {
    if (gameData.temp >= gameData.tempPerClickCost) {
        gameData.temp -= gameData.tempPerClickCost
        gameData.tempPerClick += 1
        gameData.tempPerClickCost *= 2
        document.getElementById("tempClicked").innerHTML = gameData.temp + " Temp Clicked"
        document.getElementById("perTempUpgrade").innerHTML = "Upgrade Temp (Level " + gameData.tempPerClick + ") Cost " + gameData.tempPerClickCost + " Temp"
    }
}

var mainGameLoop = window.setInterval(function() {
    getTemp()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("tempGameSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("tempGameSave"))
if (savegame !== null) {
    gameData = savegame
}