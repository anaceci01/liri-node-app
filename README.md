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

![image of concert this code](/liri-node-app/images/concert-this.jpg?raw=true "Concert This Code")


### spotify-this-song
In order for spotify-this-song, we used Spotify API
    
![image of spotify this code](/liri-node-app/images/spotify-this.jpg?raw=true "Spotify This Code")


### movie-this 
This command used the omdb API. An axios.get sent the search request and the results were console.logged.

![image of movie this code](/liri-node-app/images/movie-this.jpg?raw=true "Movie This Code")

### do-what-it-says

liri-node-app/images/spotify-this.jpg

![Image of Yaktocat](https://octodex.github.com/liri-node-app/images/spotify-this.jpg)

 [Back to top](#)