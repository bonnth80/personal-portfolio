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
   pdlFile:       array of files for download (portfolio download file) - removeFeature
******************************************************************************/

var hTextList = [
    "iCodeForFun", "b-guh?", "will you run a touch() event on me?", "there's lollercopters in my underwear!!!",
    "was it something I said?", "1337!", "You can't handle the - well, maybe..", "^_^",
    "4, 8, 15, 16, 23, 42", "2C00L", "it's dangerous to go alone", "cats and dogs living together!",
    "in the pipe, five-by-five", "get to the choppa!", "prepare for... ludicrous speed!", "engage",
    "make it so", "for science!", "do science to it", "are you the gatekeeper?", "I'm Zero Cool!",
    "covfefe", "they're here", "oh I'm sorry, did I break our concentration", "we don't need no stinking badges",
    "why are you still clicking this?", "whaddya mean I'm funny?", "would you like to play a game?",
    "I'm sorry, I can't do that, Dave", "Why is Gamora?!", "We are Groot", "For you...", "Hasta la vista, baby",
    "Let off some steam, Bennett!", "Ekki Ekki Ekki Ekki Ptang Zoom Boing!", "There are 10 types of people...",
    "I understood that reference", "Tank you", "so gentlemen, we meet again", "He chose... poorly", "Winter is coming",
    "The Dude abides", "I\'m a Dapper Dan man!", "You know what ol Jack Burton always says", "iddqd", "idkfa",
    "how do you turn this on?", "1.21 Gigawatts?!", "radio free zerg", "there is no cow level", "retliculating splines...",
    "removed Herobrine", "B A B A ↑ ↓ B A → ← B A start", "OMG, you killed Kenny!", "I am very confusing!",
    "yep, that's a cow alright", ""
 ]
 
var portfolio=[];

var elTrack = 0; // used to keep track of p elements, so if we rearrange or insert new
                  // elements, we don't have to reassing a ton of new element indexes

                  

// GoL CPP
portfolio[elTrack++] = {
   pid: "golcpp",
   pTitle: "Game of Life C++",
   pHeading: "Game of Life in C++",
   discipline: "programming",
   tType: "C++, Windows GDI",
   pDesc: `Another Conway's Game of Life project. Written in C++ using the Windows API and WinGDI. This was the first project I used to learn the Windows API and basic graphics programming.`,
   ptCode: `void CensusController::stepForward() {
	std::vector<Cell *> toggleList;
	int nCounter = 0;

	Cell *c;
	for (int y = 0; y < GridHeight_; y++) {
		for (int x = 0; x < GridWidth_; x++) {
			nCounter = 0;
			c = CellGrid_[y]->getCellAt(x);

			for (int n = 0; n < 8; n++)
				nCounter += (c->getNeighbor(n) != nullptr && c->getNeighbor(n)->getIsAlive());

			if ((c->getIsAlive() && (nCounter < 2 || nCounter > 3))
				|| (!(c->getIsAlive()) && nCounter == 3))
					toggleList.push_back(c);
		}
	}

	for (unsigned int t = 0; t < toggleList.size(); t++) {
		toggleList[t]->toggleIsAlive();
	}
}`,
   pImage: null,
   ghLink: "https://github.com/bonnth80/gol-cpp",
   demoLink: "",
   dlLink: "https://github.com/bonnth80/gol-cpp/raw/master/exe/GoLPP.exe"
}

// Conway's Game of Life
portfolio[elTrack++] = {
   pid: "gol",
   pTitle: "Game of Life JS",
   pHeading: "Conway's Game of Life JavaScript",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: "Another Conway's Game of Life in JavaScript. Learn more about <a href=\"https://en.wikipedia.org/wiki/Game_of_Life\">Conway's Game of Life.</a>",
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
   dlLink: ""
}

// Perlin Noise Generator
portfolio[elTrack++] = {
   pid: "perlin",
   pTitle: "Perlin Noise",
   pHeading: "Perlin Noise Generator",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: `This program generates random two dimensional perlin noise. You can learn about more about perlin noise here: <a href="https://en.wikipedia.org/wiki/Perlin_noise">https://en.wikipedia.org/wiki/Perlin_noise</a>`,
   ptCode: `function generateLayer(objectX) {
	var set = [];
	var nextVal = Math.floor(Math.random() * (objectX.max - objectX.min) + objectX.min);
	var currentVal = 0.0;
	set[0] = currentVal;

	for (var i = 0; i <= appController.numDataPoints; i += 1){		
		if (i % objectX.interval == 0){
			set[i] = currentVal = nextVal;
			nextVal = Math.floor(Math.random() * (objectX.max - objectX.min) + objectX.min);
		}
		else {			
			set[i] = lerp(currentVal,nextVal,(i % objectX.interval / objectX.interval));
		}
	}

	return set;
}`,
   pImage: null,
   ghLink: "https://github.com/bonnth80/perlin",
   demoLink: "http://tbonner.atwebpages.com/noise/index.html",
   dlLink: ""
}

// Ohm's Law
portfolio[elTrack++] = {
   pid: "ohm",
   pTitle: "Ohm's Law",
   pHeading: "Ohm's Law Calculator",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: `This program calculates circuit voltage, current, and resistance base on Ohm's Law, which you can learn more about here: <a href="https://en.wikipedia.org/wiki/Ohm%27s_law">Ohm's Law</a>`,
   ptCode: `//update values
   function updateValues(preserveElement) {
      switch (preserveElement.id) {
            case "input-power":
               console.log("script.js: updateValues() - Invalid update");
               break;
            case "input-current":
               current = preserveElement.value;
               btnRefreshButtons[0].unhide();
               btnRefreshButtons[2].unhide();
               break;
            case "input-resistance":
               resistance = preserveElement.value;
               btnRefreshButtons[0].unhide();
               btnRefreshButtons[1].unhide();
               break;
            case "input-voltage":
               voltage = preserveElement.value;
               btnRefreshButtons[1].unhide();
               btnRefreshButtons[2].unhide();
               break;
            default:
               alert("You can't see this window because it will never appear.");
               break;
      }
   
      modifiedValue = preserveElement;
   }`,
   pImage: null,
   ghLink: "https://github.com/bonnth80/ohms-law",
   demoLink: "http://tbonner.atwebpages.com/Ohmslaw/index.html",
   dlLink: ""
}

// Resistor Decoder
portfolio[elTrack++] = {
   pid: "resistor",
   pTitle: "Resistor Decoder",
   pHeading: "Resistor Color Code Decoder",
   discipline: "programming",
   tType: "JavaScript",
   pDesc: `This is a resistor color band decoder/encoder/interpreter. You can learn more about resistor color bands here: <a href="https://en.wikipedia.org/wiki/Electronic_color_code">Resistor Code</a>`,
   ptCode: `var resistance = {
    val: 4700,
    fromENot: function(eNot){        
        var baseVal = 0.0;
        try{
            baseVal = parseFloat(eNot);
        } catch(e) {
            console.warn("script.js: Could not parse Notation field.");
            console.warn("script.js: " + e);
            return NaN;
        }
        
        for (var i = 0; i < eNot.length; i++) {
            if (isNaN(eNot[i])){
                
                switch (eNot[i]) {
                    case 'G':
                        baseVal *= 1000;
                    case 'M':
                        baseVal *= 1000;
                    case 'k':
                        baseVal *= 1000;
                    case ' ':
                    case '.':
                        break;
                    default:
                        console.warn("script.js: resistance: could not parse notation field, baseVal: " + baseVal);
                        console.warn("script.js: resistance: last element evaluate: " + i + " on " + eNot + ": " + eNot[i]);
                        return NaN;
                }
            }
        }

        this.val = baseVal;

        return this.val;
    },
    fromMM: function(min, max){
        this.val = (min + max)/2
        return this.val;
    },
    fromBands: function(band1, band2, band3){
        this.val = ((band1 *10) + band2)*(band3);
        return this.val;
    }
}`,
   pImage: null,
   ghLink: "https://github.com/bonnth80/resistor",
   demoLink: "http://tbonner.atwebpages.com/resistance/index.html",
   dlLink: ""
}