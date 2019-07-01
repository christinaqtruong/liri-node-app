# LIRI
Link to Video of App:  https://www.screencast.com/t/SiP4uw5K0wG

### Overview
1. LIRI is a command line node app that takes in parameters and gives you back data. 
2. This app is organized into folders that contain the javascript, node modules and json packages. Keys.js contains the variables that hold the values to the spotify api key and liri.js holds the functions that run the app.  
3. To run the app, navigate to the folder containing the file liri.js. LIRI responds to four commands: 
   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
followed by what it is you want to search for.

In order to input a command, type: "node liri.js" followed by one of the commands into the terminal.

What Each Command Does:

* `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (formatted as "MM/DD/YYYY" by Moment.js)

* `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

* `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

* `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

6. Technologies used in LIRI include:
  * Bands in Town API
  * OMDB API
  * Npm node packages:
    * Spotify
    * Moment.js
    * .env
7. This app was written by Christina Truong
