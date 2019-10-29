
// Depenencies - DOTENV 
require('dotenv').config();

//Add the code required to import the `keys.js` file and store it in a variable.var keys = require("./keys");
var keys = require("./keys.js");
let axios = require('axios');
let Spotify = require('node-spotify-api');
let fs = require('fs');
let moment = require('moment');
let spotifyKeys = require('./keys.js');


var appCommand = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");
//console.log("userSearch: " + appCommand ");


// Make it so liri.js can take in one of the following commands:
function liriStart(appCommand, userSearch) {
    switch (appCommand) {
        //spotify-this-song
        case "spotify-this-song":
            spotifySong(userSearch);
            break;
        //concert-this
        case "concert-this":
            getBandsInTown(userSearch);
            break;
        //movie-this
        case "movie-this":
            getOMBD(userSearch);
            break;
        case "do-what-it-says":
            getRandom();
            break;
        default:
            console.log("To continue, type one of the following commands: 'concert-this, 'spotify-this-song', 'movie-this', 'do-what-it-says' ");
    }
};

// ------------------- Function to search Spotify API -------------------
function spotifySong(songName) {
    let spotify = new Spotify(keys.spotify);
    //console.log("Spotify key: " + spotify);

    if (!songName) {
        songName = "The Sign";
    };

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                return console.log('An error occurred: ' + err);
            }

            var songs = data.tracks.items
            for (var i = 0; i < songs.length; i++) {
                var spotifyResults =
                "-----------------------------------------------------------------" +
                    "Artist Name: " + data.tracks.items[i].album.artists[0].name +
                    "Song Name: " + data.tracks.items[i].name +
                    "Song Preview Link: " + data.tracks.items[i].href +
                    "Album: " + data.tracks.items[i].album.name +
                    console.log(spotifyResults);
            }
        })

function getBandsInTown(artist) {
    var artist = userSearch;
    var banQueryURL = "https://bandsintwon.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios
    .get(bandQueryURL)
    .then(function(response){
        console.log ("---------------------");
        console.log("Name of venue: " + response.data)
        var jsonData = 
    })
}

