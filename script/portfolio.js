console.log("portfolio.js: script connected");

/************************************************************************** 
   List of portfolio entries. Entry properties are: 
   pid:           individual id of the entry
   pTitle:        text shown in link list
   pHeading:      text shown in info heading bar
   discipline:    in development: may eventually be different ways to display info
                     depending on the discipline type
   tType:         for now, just text referring to what programming language is being used
   pDesc:         text displayed in the info body frame
   ptCode:        text displayed in the info code frame
   pImage:        image displayed in the info preview image
   ghLink:        github link
   demoLink:      demo link
   pdlFile:       array of files for download (portfolio download file)
******************************************************************************/
var portfolio=[];

var elTrack = 0; // used to keep track of p elements, so if we rearrange or insert new
                  // elements, we don't have to reassing a ton of new element indexes

// Conway's Game of Life
portfolio[elTrack++] = {
   pid: "gol",
   pTitle: "Game of Life",
   pHeading: "Conway's Game of Life",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: "This is Conway's Game of Life in JavaScript. Learn more about <a href=\"https://en.wikipedia.org/wiki/Game_of_Life\">Conway's Game of Life.</a>",
   ptCode: `function calcNextStep(censusManager = censusManager) {

      clearToggleList(censusManager);

      for (var x = 1; x < GRID_SIZEX - 1; x++) {
            for (var y = 1; y < GRID_SIZEY - 1; y++) {
                  // initialize live neighbor count
                  var liveAdj = 0;

                  // count live neighbors
                  if (censusManager.cellGrid[x - 1][y - 1] == true) liveAdj++;  // check NW neighbor
                  if (censusManager.cellGrid[x][y - 1] == true) liveAdj++;    // check N neighbor
                  if (censusManager.cellGrid[x + 1][y - 1] == true) liveAdj++;  // check NE neighbor
                  if (censusManager.cellGrid[x - 1][y] == true) liveAdj++;    // check W neighbor
                  if (censusManager.cellGrid[x + 1][y] == true) liveAdj++;    // check E neighbor
                  if (censusManager.cellGrid[x - 1][y + 1] == true) liveAdj++;  // check SW neighbor
                  if (censusManager.cellGrid[x][y + 1] == true) liveAdj++;    // check S neighbor
                  if (censusManager.cellGrid[x + 1][y + 1] == true) liveAdj++;  // check SE neighbor

                  // If this cell is alive AND live neighbors < 2 or > 3
                  if (((censusManager.cellGrid[x][y]) && ((liveAdj < 2) || (liveAdj > 3))) ||
                        // or if this cell is dead and live neighbors == 3
                        ((!censusManager.cellGrid[x][y]) && (liveAdj == 3)))
                        // Then toggle (spawn if dead, die if live)
                        censusManager.toggleList.push([x, y]);
            }
      }

      loadStep(censusManager);
}
`,
   pImage: null,
   ghLink: "https://github.com/bonnth80/game-of-life",
   demoLink: "http://tbonner.atwebpages.com/gol/gol.html",
   pdlFile: []
}

// Perlin Noise Generator
portfolio[elTrack++] = {
   pid: "perlineNoise",
   pTitle: "Perlin Noise",
   pHeading: "2d Perlin Noise Generator",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: "This is my perlin noise study. Learn more about <a href=\"https://en.wikipedia.org/wiki/Perlin_Noise\">Perlin Noise.</a>",
   ptCode: "",
   pImage: null,
   ghLink: "",
   demoLink: "",
   pdlFile: []
}

// Ohms Law
portfolio[elTrack++] = {
   pid: "ohmslaw",
   pTitle: "Ohm's Law",
   pHeading: "Ohm's Law",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: "Simple interface for gettin resistance, voltage, and current. Learn more about <a href=\"https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Ohm%27s_law\">Ohm's Law.</a>",
   ptCode: "",
   pImage: null,
   ghLink: "",
   demoLink: "",
   pdlFile: []
}

// Resistor Color Decoder
portfolio[elTrack++] = {
   pid: "resistance",
   pTitle: "Resistor Decoder",
   pHeading: "Resistor Color Code Decoder",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: "I got bored one day in DC class when the teacher was talking about resistor color codes and I wanted to see if I could design and develop this decoder within the time of the 3-hour class. I might have actually finishd it if I had started when the class started. Learn more about <a href=\"https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Electronic_color_code\">Resistor Codes.</a>",
   ptCode: "",
   pImage: null,
   ghLink: "",
   demoLink: "",
   pdlFile: []
}


