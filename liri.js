// DOTENV 
require('dotenv').config();

//VARIABLES 
var keys = require("./keys");
let axios = require('axios');
let Spotify = require ('node-spotify-api');
let fs = require ('fs');
let spotifyKeys = require('./keys.js');
let spotify = new Spotify (spotifyKeys.spotify);
let moment = require ('moment');


//Function will take a song title and pull up 5 tracks from Spotify with that title, showing the artist, song name, Spotify preview lin, and the album.
function spotifySong(songName) {
    spotify.search({type: "track", query: songName, limit})
}


