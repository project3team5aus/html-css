// PULL IN DATA FROM JSON OBJECT. CURRENTLY HARD-CODED DATA.JS FILE
// Assign the data from `data.js` to a descriptive variable
// data file is imported in the html file
var gamesData = data;

// Console.log whole data set from data.js to confirm it's been read correctly
console.log(gamesData);


// select container for today's games
// delete existing rows in container

var gameContainer = d3.select("div#today_games");
d3.selectAll("div#today_games > *").remove();

// creates new game row, and first div column with game time
gameContainer
    .append('div')
    .classed('row no-gutters', true)
    .append('div')
    .classed('col-sm-2 vert_align', true)
    .append('h6')
    .classed('text-center', true)
    .text("INSERT GAME TIME HERE");

// adding the second line to the game details div for the game location is not working. :(
d3.select("div.col-sm-2 vert_align")
    .append('h6');
    // .classed('text-center', true)
    // .text("INSERT GAME LOCATION HERE");   

// // create new Div rows for each game object
// gameContainer.selectAll("div")
//     .data(gamesData)
//     .enter()
//     .append('div')
//     .html('<div class="row no-gutters"></div><hr>');


// // create div col sections
// var gameColumns = ["details", "Road Team", "Home Team"]
// var games = d3.selectAll("div.row no-gutters");
// games.append('div')
//     .text('game details')
//     .classed('col-sm-2 vert_align', true);

// games.append('div')
//     .text('Road team');

// use condional on "road_win_prediction" = Win|Loss




// loop through game objects in data
gamesData.forEach(function(game) {
    console.log(game);
});


// select H4 header text for "Today's Date" by id #today_date
// update existing text with the date from one of the game objects
var headerDate = d3.select("#today_date");
// console.log(headerDate);
// This line will be the default if no game objects availble
headerDate.text("no games available");
// This override the above with the date from the first game object
headerDate.text(gamesData[0].date);
