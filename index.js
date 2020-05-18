// Constants
const fetch = require("node-fetch") 
const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client()
// Import Functions
import { setPlace, setChannel } from "./functions.js";
// Discord Functions
client.on("ready", function(){
    console.log(`Discord logged in as ${client.user.tag}`)
    client.user.setActivity("bases playercounts", {type: "WATCHING"})
    .catch(err => console.log(err))
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.author.id != message.guild.ownerId){
        message.channel.send("Only the owner of the server may use these commands.")
        return;
    };
    if (message.content.indexOf(prefix) !== 0) return;
    
    let args = message.content.split(/[ ]+/)
    let text = message.content.toLowerCase()
    let serverId = message.guild.id

    if (text.startsWith()){

    }
})

function checkPlace(){ 
    fetch("https://games.roblox.com/v1/games/4932772345/servers/public") 
        .then(async function(res){ 
            let json = await res.json()
            let data = json.data
            console.log(data, data.length)
            let firstServer = data.shift()
        });
    };
setInterval(checkPlace, 10000)

client.login(config.token)