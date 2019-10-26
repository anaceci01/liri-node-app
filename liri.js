
// Depenencies - DOTENV 
require('dotenv').config();

//Add the code required to import the `keys.js` file and store it in a variable.var keys = require("./keys");
var keys = require("./keys.js");
let axios = require('axios');
let Spotify = require ('node-spotify-api');
let fs = require ('fs');
let moment = require ('moment');
let spotifyKeys = require('./keys.js');
let spotify = new Spotify (keys.spotify);


var appCommand = process.argv [2];
var userSearch = process.argv.slice(3).join(" ");
//console.log("userSearch: " + appCommand ");


// Make it so liri.js can take in one of the following commands:
function liriStart(appCommand, userSearch) {
    switch (appCommand) {
        //spotify-this-song
        case "spotify-this-song":
            getSpotify(userSearch);
            break;
            //concert-this
        case "concert-this":
            getBandsInTown(userSearch);
            break;
            //movie-this
        case "movie-this":
            getOMBD(userSearch);
            break;
            do-what-it-says
        case "do-what-it-says":
            getRandom();
            break;
        default:
            console.log("To continue, type one of the following commands: 'concert-this, 'spotify-this-song', 'movie-this', 'do-what-it-says' ");
    }
};

// ------------------- Function to search Spotify API -------------------
function getSpotify(songName) {
    
    if (songName === undefined){
        songName = ""
    }

    spotify.search(
        {
            type: "track", 
            query: songName, limit
        })
}

`node liri.js concert-this <artist/band name here>`
