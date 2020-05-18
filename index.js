const fetch = require("node-fetch") 
const discord = require("discord.js") 
function checkPlace(){ 
    fetch("https://games.roblox.com/v1/games/4932772345/servers/public") 
        .then(async function(res){ 
            let json = await res.json()
            let data = json.data
            console.log(data, data.length)
            let table = data.shift()
        });
    } ;
setInterval(checkPlace, 10000)