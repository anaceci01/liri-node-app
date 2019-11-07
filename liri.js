
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

function liriRun(appCommand, userSearch) {
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
        default:
            console.log("Please make a selection: 'concert-this, 'spotify-this-song, 'movie-this, 'do-what-it-says' in order to continue");
    }
};


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
    var spotify = new Spotify(keys.spotify);
    if (!userSearch) {
        userSearch = "The Sign";
    };

    spotify.search(
        {
            type: "track",
            query: userSearch
        }, function (err, data) {
            if (err) {
                return console.log('Opps! something is wrong ' + err);
            }
            // Data Search from API
            console.log("================================");
            console.log("Artist(s) Name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
            console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
            console.log("Preview Link: " + data.tracks.items[0].href + "\r\n");
            console.log("Album Name: " + data.tracks.items[0].album + "\r\n");

            //Append text into log.tx file
            var songReq = "===Spotify Requests===" +
                "\nArtist: " + data.tracks.items[0].album.artists[0].name +
                "\nSong Name: " + data.tracks.items[0].name +
                "\nPreview Link: " + data.tracks.items[0].href +
                "\nAlbum Name: " + data.tracks.items[0].album.name +
                "\n====End====" +
                "\n";

            fs.appendFile("random.txt", songReq, function (err) {
                if (err) throw (err);
            });
        });
}

// ------------------- Function to search OMBD -------------------
function getOMBD(userSearch) {
    if (!userSearch) {
        userSearch = "Mr Nobody";
    }
    var movieURL = "https://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";
    axios.request(movieURL).then(function (response) {
        console.log("================================");
        console.log("Movie Title: " + response.data.Title + "\r\n");
        console.log("Year: " + response.data.Year + "\r\n");
        console.log("IMBD Rating: " + response.data.imbdRating + "\r\n");
        console.log("Country: " + response.data.Country + "\r\n");
        console.log("Language: " + response.data.Language + "\r\n");
        console.log("Plot: " + response.data.Plot + "\r\n");
        console.log("Actors: " + response.data.Actors + "\r\n");

        var movieReq = "===Movie Requests===" +
            "\nMovie Title: " + response.data.Title +
            "\nYear: + " + response.data.Year +
            "\nIMBD Rating: " + response.data.imbdRating +
            "\nCountry: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors: " + response.data.Actors +
            "\n";

        fs.appendFile("log.txt", "utf8", function (error, data) {
            if (err) throw err;
        });
    });

};
// ------------------- Function to Get Random -------------------
function getRandom() {
    fs.readFile("random.txt", "UTF8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        else {
            console.log(data);
            var randomData = data.split(",");
            liriRun(randomData[0], randomData[1]);
        }
    });
};

// ------------------- Function to Log The Results -------------------
function logData(data) {
    fs.appendFile("log.txt", data, function (err) {
        if (err) throw (err);
    });
};


liriRun(appCommand, userSearch);