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


// loop through game objects in data
gamesData.forEach(function(game) {
    console.log(game);
});
// wrap the below game builder inside the loop

// ============================================================
// // create new Div rows for each game object

// creates new game row, 
game0 = gameContainer
    .append('div')
    .attr('id', 'game0')
    .classed('row no-gutters', true);

// divider between game div rows
gameContainer.append('hr');

// add first child div column with game time and location
game0.append('div')
    .attr('id', 'timeLoc0')
    .classed('col-sm-2 vert_align', true)
    // add heading tag for game time
    .append('h6')
    .attr('id', 'time0')
    .classed('text-center', true)
    .text("INSERT GAME TIME HERE");

// update the time text
d3.select('h6#time0').text(gamesData[0].date);

// adding the second line to the game details div for the game location is not working.
d3.select("div#timeLoc0")
    .append('h6')    
    .attr('id', 'loc0')
    .classed('text-center', true)
    .text("INSERT GAME LOCATION HERE");

// update the time text
d3.select('h6#loc0').text(gamesData[0].location);

// create road team div
game0.append('div')
    .attr('id', 'roadTeam0')
    .classed('col-sm', true)
    .append('figure')
    .attr('id','roadFig0')
    .classed('figure center', true)
    .append('img')
    .attr('id', 'roadLogo0')
    .classed('center team-logo', true);

d3.select('figure#roadFig0').append('figcaption')
    .classed('figure-caption text-center', true)
    .text(gamesData[0].road_team);

// update the image
d3.select('img#roadLogo0').attr('src', gamesData[0].road_team_logo);


// "-- AT --" divider
game0.append('div')
    .classed('col-sm-2 vert_align', true)
    .append('p')
    .classed('text-center', true)
    .text('-- AT --');


// create home team div
game0.append('div')
    .attr('id', 'homeTeam0')
    .classed('col-sm', true)
    .append('figure')
    .attr('id','homeFig0')
    .classed('figure center', true)
    .append('img')
    .attr('id', 'homeLogo0')
    .classed('center team-logo', true);

d3.select('figure#homeFig0').append('figcaption')
    .classed('figure-caption text-center', true)
    .text(gamesData[0].home_team);

// update the image
d3.select('img#homeLogo0').attr('src', gamesData[0].home_team_logo);

// conditional statment to update team logos with win prediction
// if road_win_prediction === "Win" then update as:
// d3.select('figure#roadFig0').attr('class','figure center rounded border border-success')
// else:
// d3.select('figure#homeFig0').attr('class','figure center rounded border border-success')

// ==================================================================================



// select H4 header text for "Today's Date" by id #today_date
// update existing text with the date from one of the game objects
var headerDate = d3.select("#today_date");
// console.log(headerDate);
// This line will be the default if no game objects availble
headerDate.text("no games available");
// This override the above with the date from the first game object
headerDate.text(gamesData[0].date);
