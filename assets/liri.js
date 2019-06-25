require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

console.log(keys);
var spotify = new Spotify(keys.spotify);

var fs = require("fs");
var moment = require("moment");

var command = process.argv[2];
var input = process.argv.slice(3).join(' ');

if (command == 'concert-this'){
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";


    axios.get(queryUrl).then(
        function(response){
        console.log("Venue Name: " + response.data[0].venue.name);
        console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
        console.log("Concert Date: " + moment(response.data[0].datetime).format('MM/DD/YY'));
        }
    ).catch(function(error){
        if (error.response) {
            console.log("-----Data-----");
            console.log(error.response.data);
            console.log("-----Status-----")
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request){
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })

} 
else if (command == 'spotify-this-song'){
    spotify.search({ type: 'track', query: input }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    //   console.log(JSON.stringify(data.tracks.items[0].album, null, 2));

        console.log("Artist: " + data.tracks.items[0].artists[0].name); 
        console.log("Song Name: " + data.tracks.items[0].name); 
        console.log("Preview: " + data.tracks.items[0].artists[0].external_urls.spotify); 
        console.log("Album: " + data.tracks.items[0].album.name); 
    });
} 
else if ((command == 'movie-this') && (input)){
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response){
            
            console.log("Movie Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Released);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Metascore);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    ).catch(function(error){
        if (error.response) {
            console.log("-----Data-----");
            console.log(error.response.data);
            console.log("-----Status-----")
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request){
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
    
}
    else if ((command == 'movie-this') && (!input)){
        var queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
    
        axios.get(queryUrl).then(
            function(response){
                
                console.log("Movie Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Released);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Metascore);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        ).catch(function(error){
            if (error.response) {
                console.log("-----Data-----");
                console.log(error.response.data);
                console.log("-----Status-----")
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request){
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
} 

else if (command == 'do-what-it-says'){
    fs.readFile("random.txt", "utf8", function(error, text){
        if (error){
            return console.log(error);
        }
        
        spotify.search({ type: 'track', query: text}, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
          console.log(query);
          console.log("Artist: " + data.tracks.items[0].artists[0].name); 
          console.log("Song Name: " + data.tracks.items[0].name); 
          console.log("Artist: " + data.tracks.items[0].artists[0].name); 
        });
    });
}
