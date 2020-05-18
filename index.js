// Constants
const fetch = require("node-fetch") ;
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const placeTable = ["1427493600"];
const idTable = [];
// Import Functions
let { initialSet, setPlace, setChannel, setPrefix, getPlaces, getChannel, getPrefix } = require("./functions.js")
// Discord Functions
client.on("ready", function(){
    console.log(`Discord logged in as ${client.user.tag}`)
    client.user.setActivity("bases playercounts", {type: "WATCHING"})
    .catch(err => console.log(err))
});

client.on("guildCreate", async guild => {
    console.log(`Joined new guild ${guild.name}`)
    let channelName = "sniper-notifier"
    guild.channels.create(channelName)
    initialSet(guild.id, channelName)
})

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
    let channel = client.channels.cache.find(ch => ch.name === config.channelName);
    for (let placeId of placeTable){
        fetch(`https://games.roblox.com/v1/games/${placeId}/servers/public`) 
            .then(async function(res){ 
                let json = await res.json()
                let data = json.data
                console.log(data)
                for (let server of data){
                    if (server.playing != undefined && server.playing >= 7){
                        for (let serverIds of server){
                            
                        }
                    }
                }
            });
    }
};
setInterval(checkPlace, 30000)

client.login(config.token)