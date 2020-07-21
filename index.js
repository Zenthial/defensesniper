// Constants
const fetch = require("node-fetch") ;
const Discord = require("discord.js");
const config = require("./config.json");
const express = require("express");
const client = new Discord.Client();
const firebase = require("firebase");
require("firebase/firestore");
// Variables
let app = express()
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
                        let embed = new Discord.MessageEmbed()
                            .setTitle("Possible Defense Detected")
                            .setURL(`https://www.roblox.com/games/${id}/`)
                            .setImage(idTable[id].thumbnail)
                            .setDescription(`Possible raid detected at ${idTable[id].name}. There are ${server.playing} out of ${server.maxPlayers} in the server. The ping of the server is ${server.ping}`)
                        notifierChannel.send(embed)
                    }
                }
            }
        })
}

var firebaseConfig = {
    apiKey: "AIzaSyCOR-lzCtdPcbycq6LSpWzyse1FARa3yBw",
    authDomain: "defense-sniper.firebaseapp.com",
    databaseURL: "https://defense-sniper.firebaseio.com",
    projectId: "defense-sniper",
    storageBucket: "defense-sniper.appspot.com",
    messagingSenderId: "73818203182",
    appId: "1:73818203182:web:7128dea0b8d053b187ebbf",
    measurementId: "G-61SP914R23"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
// Discord Functions
client.on("ready", function(){
    console.log(`Discord logged in as ${client.user.tag}`)
    client.user.setActivity("bases playercounts", {type: "WATCHING"})
    .catch(err => console.log(err))
});

client.on("guildCreate", async guild => {
    console.log(`Joined new guild ${guild.name}`)
    guild.channels.create("raid-notifier")
    database.collection("guilds").doc(guild.id).set({
        prefix: "!",
        notifierChannel: "raid-notifier",
        placeIds: []
    })
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

app.use(bodyparser.json())

app.get("/", (req, res) => {
    res.json("The bot is online!")
});
app.get("/", (req, res) => {
    res.sendStatus(200)
});

app.listen(process.env.PORT)