// Constants
const fetch = require("node-fetch") ;
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
// Import Functions
let { initialSet, setPlace, setChannel, setPrefix, getPlaces, getChannel, getPrefix, idTable } = require("./module.js")
async function checkPlaceId(id){
    fetch(`https://games.roblox.com/v1/games/${id}/servers/public`) 
        .then(async function(res){
            let json = await res.json()
            let data = json.data
            console.log(data)
            for (let server of data){
                if (server.playing != undefined && server.playing >= 7){
                    if (idTable[id].toggle == false){
                        idTable[id].toggle = true
                        let res = await fetch(`https://thumbnails.roblox.com/v1/games/icons?universeIds=${id}&size=50x50&format=Png&isCircular=false`)
                        let imageJson = res.json()
                        let imageData = json.data.push()
                        let embed = new Discord.MessageEmbed()
                            .setTitle("Possible Defense Detected")
                            .setURL(`https://www.roblox.com/games/${id}/`)
                            .setThumbnail(idTable[id].thumbnail)
                            .addField(`Possible raid detected at ${idTable[id].name}. The ping of the server is ${server.ping}`)
                        notifierChannel.send(embed)
                    }
                }
            }
        })
}

let notifierChannel;
// Discord Functions
client.on("ready", function(){
    console.log(`Discord logged in as ${client.user.tag}`)
    client.channels.fetch('712034455102947339').then(chan => notifierChannel = chan)
    checkPlaceId(2130384126)
    client.user.setActivity("bases playercounts", {type: "WATCHING"})
    .catch(err => console.log(err))
});

client.on("guildCreate", async guild => {
    console.log(`Joined new guild ${guild.name}`)
    /*let channelName = "sniper-notifier"
    guild.channels.create(channelName)
    initialSet(guild.id, channelName)*/
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
/* Redo all of this so it's one function that takes place id inputs. Redo the array, make it a table
with a placeid and a notified value
*/

client.login(config.token)