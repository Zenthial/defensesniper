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

exports.initialSet = async function(serverId, channelName){
    let array = [0]
    database.ref(`${serverId}`).update({
        places: array,
        channel: channelName
    });
}

exports.setPlace = async function(serverId, placeId){
    let placeTable = getPlaces(serverId)
    placeTable = placeTable.push(placeId)
    database.ref(`${serverId}`).update({
        places: placeTable
    });
}

exports.setChannel = async function(serverId, channelId){

}

exports.setPrefix = async function(serverId, prefix){

}

exports.getPlaces = function(serverId){

}

exports.getChannel = function(serverId){

}

exports.getPrefix = function(serverId){

}