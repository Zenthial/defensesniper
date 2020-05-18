// Constants
const firebase = require('firebase')
// Variables
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
firebase.initializeApp(firebaseConfig)
let database = firebase.database();

async function setPlace(serverId, placeId){

}

async function setChannel(serverId, channelId){

}

async function setPrefix(serverId, prefix){

}

function getPlaces(serverId){

}

function getChannel(serverId){

}

function getPrefix(serverId){

}

export { setPlace, setChannel, setPrefix, getPlaces, getChannel, getPrefix };