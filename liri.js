
// Depenencies - DOTENV 
require("dotenv").config();

//Add the code required to import the `keys.js` file and store it in a variable.var keys = require("./keys");
var keys = require("./keys");
let axios = require("axios");
let Spotify = require('node-spotify-api');
let fs = require("fs");
let moment = require("moment");
let spotify = new Spotify(keys.spotify);


var appCommand = process.argv[2];
var userSearch = process.argv[3];


// Make it so liri.js can take in one of the following commands:
switch (appCommand) {
    case "spotify-this-song":
        spotifySong(userSearch);
        break;
    case "concert-this":
        getBandsInTown(userSearch);
        break;
    case "movie-this":
        getOMBD(userSearch);
        break;
    case "do-what-it-says":
        getRandom(userSearch);
        break;
}

//// ------------------- Function to search Bands In Town -------------------
function getBandsInTown(userSearch) {
    axios.get("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var datetime = response.data[i].datetime;
                var dateArr = datetime.split('T');

                var concertResults =
                    "-----------------------------------------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYY");
                console.log(concertResults);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

// ------------------- Function to search Spotify API -------------------
function spotifySong(userSearch) {
    //console.log("Spotify key: " + spotify);

    if (!userSearch) {
        userSearch = "The Sign";
    }

    spotify.search(
        {
            type: "track",
            query: userSearch
        })
        .then(function (data) {
            for (var i = 0; i < 5; i++) {
                var spotifyResults =
                    "-----------------------------------------------------------------" +
                    "\nArtist Name: " + data.tracks.items[i].album.artists[0].name +
                    "\nSong Name: " + data.tracks.items[i].name +
                    "\nSong Preview Link: " + data.tracks.items[i].href +
                    "\nAlbum: " + data.tracks.items[i].album.name +
                    console.log(spotifyResults);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function getOMBD(userSearch) {
    if (!userSearch) {
        userSearch = "Mr Nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            var movieResults =
                "-----------------------------------------------------------------" +
                "\nMovie Title: " + response.data.Title +
                "\nYear of Release: " + response.data.Year +
                "\nIMDB Rating: " + response.data.imbdRating +
                "\nCountry where the movie was produced: " + response.data.Country +
                "\nLanguage of the movie: " + response.data.Language +
                "\nPlot of the movie: " + response.data.Plot +
                "\nActors in the movie: " + response.data.Actors +
                console.log(movieResults);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function doThis()
