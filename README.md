# Liri-Node-App

Liri is a one-stop command line node app that takes in paramenters for songs, bands, and movies and returns data

This app makes calls to the Spotify API, BandsInTown API,  and OMDB API search results

When running this app in your command line, you may use the following to find your desired data:
'spotify-this-song', 'concert-this', 'movie-this', and 'do-what-it-says'.


***NOTE: If you would like to clone this repo, you will have to include your own.env file with your own unique Spotify ID and Secret. The format of your .env shoul look like below. Make sure to use your unique Spotify ID and Spotify Secret directly following the "-" below with no extra spaces.



It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)



# Liri Node 
 
*Collaborators:* 
 
*Ana Davis* 
 
## About 
 
Liri is an app like iPhone's Siri, however, LIRI is a Language Interpretation and Recognition Interface, therefore LIRI is a command line node app which takes in parameters that will give you back data. The app will make use of Spotify API, BandsInTown API, and OMDB API 
## Index 
 
[Expected Outcome](#Expected-Outcome) 

 
### The LIRI Bot was designed to produce search results based on the following commands:
 
  * node liri.js concert-this
 
  * node liri.js spotify-this-song 
      
 
  * node liri.js movie-this 
      
 
  * node liri.js do-what-it-says
 

 ### The results produced from the search are as below:

  * node liri.js concert-this "artist/band name"
    * name of venue
    * venue location
    * date of event
  * node liri.js spotify-this-song "song/track name"
    * Artist
    * Song
    * Spotify song preview url
    * Album
  * node liri.js movie-this "movie title"
    * tile of the movie
    * year the movie came out
    * IMBD rating of the movie
    * country where the movie was produced
    * language of the movie
    * plot of the movie
    * actors in the movie
  * node liri.js do-what-it says
    * display the Spotify results for "I want it that way" stored in the random.txt file

## Code by Command

    ### concert-this

    The use of concert-this was processed by using the Bands in Town API
```
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
```
    ![Alt text](/liri-node-app/images/concert-this.jpg?raw=true "Optional Title")


### spotify-this-song
    In order for spotify-this-song, we used Spotify API

    ```
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
```

    [[https://github.com/Users/anaceci01/Desktop/bootcamp/liri-node-app/images/spotify-this.jpg|alt=octocat]]


### movie-this 
This command used the omdb API. An axios.get sent the search request and the results were console.logged.

```
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
```
    [[https://github.com/Users/anaceci01/Desktop/bootcamp/liri-node-app/images/movie.this.jpg]]

### do-what-it-says





 [Back to top](#)