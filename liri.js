
// Depenencies - DOTENV 
require("dotenv").config();

//Add the code required to import the `keys.js` file and store it in a variable.var keys = require("./keys");
var keys = require("./keys");
let axios = require("axios");
let Spotify = require('node-spotify-api');
let fs = require("fs");
let moment = require("moment");
let spotify = new Spotify(keys.spotify);


//No song entered function
var getRandom = function () {
    fs.readFile("random.txt", "utf8", function(err,data){
        console.log(data);

    })
}

var appCommand = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");


// Make it so liri.js can take in one of the following commands:
var choices = function (appCommand, userSearch) {
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
            getRandom();
            break;
        default:
            console.log("To continue, type one of the following commands: 'concert-this, 'spotify-this-song', 'movie-this', 'do-what-it-says' ");
    }
};


// ------------------- Function to search Spotify API -------------------
function spotifySong(songName) {
    //console.log("Spotify key: " + spotify);

    if (!userSearch) {
        userSearch = "The Sign";
    }

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

//     function getBandsInTown(artist) {
//         axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
//             .then(function (response) {
//                 for (var i = 0; i < response.data.length; i++) {

//                     var datetime = response.data[i].datetime
//                     var dateArr = datetime.split('T');

//                     var concertResults =
//                         "-----------------------------------------------------------------" +
//                         "\nVenue Name: " + response.data[i].venue.name +
//                         "\nVenue Location: " + response.data[i].venue.city +
//                         "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYY");
//                     console.log(concertResults);
//                 }
//             })
//             .catch(function(err){ 
//                 console.log(err);
//             });
//     }
//     function movieThis()
 }

