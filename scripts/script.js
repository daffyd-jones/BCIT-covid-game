let capstone = "................................................................\n" +
    ".##############################################################.\n" +
    ".#............................................................#.\n";

let foundation = ".#............................................................#.\n" +
    ".##############################################################.\n" +
    "................................................................";

let playerTile = [
    [
        "....................",
        "....................",
        "....................",
        "....................",
        "........@...........",
        "....................",
        "....................",
        "....................",
        "....................",
        "...................."
    ],
    [
        "o.o..o.....o.o#...o.",
        "...o.###...####o.o..",
        "o.o.o#o..oo.oo..o..o",
        ".####o....o.o...o.o.",
        ".o.o.o.o#...=.######",
        "o.o.o.o.#o.o.o#o.o.o",
        ".########.o.o.#.o.o.",
        ".o.o.&.o#=....#o.o.o",
        "..o@o.o.#........=.#",
        "...o.o.o..o.o.o.o..."
    ],
    [
        "...o.o.....#..o.....",
        ".#@.o.o...######..##",
        "..#####o..|.#.o....o",
        "..oo.o#.o....o....o.",
        ".oo.o.#o.....o...o.o",
        "###o.o#.o..#o.o|..o.",
        "o.#.o....=#######..#",
        ".o#o.o....o.o#.o...o",
        "..#####....=.#o..o..",
        ".o.o.o.......#..o.o."
    ],
    [
        "...o.o.#............",
        ".o########.....=.###",
        "..#+o.o.o.o.o.#o.o..",
        ".o#o.o.o.....=#.o...",
        ".@o.o.#o.o.o#####+..",
        ".o.o.+#=.....#o.o...",
        "#########o.o.#.o.o..",
        "..o+#+.o....+#o.o...",
        ".o.o#.o.o#=..o.o.o#..",
        "..o.#..o....o.o.o.#."
    ]
]

let tileMaps = [

    [
        "o.o..o.....o.o#...o.",
        "...o.###...####o.o..",
        "o.o.o#o..oo.oo..o..o",
        ".####o....o.o...o.o.",
        ".o.o.o.o#...=.######",
        "o.o.o.o.#o.o.o#o.o.o",
        ".########.o.o.#.o.o.",
        ".o.o.&.o#=....#o.o.o",
        "..o.o.o.#........=.#",
        "...o.o.o..o.o.o.o..."
    ],
    [
        "...o.o.....#..o.....",
        ".#o.o.o...######..##",
        "..#####o..|.#.o....o",
        "..oo.o#.o....o....o.",
        ".oo.o.#o.....o...o.o",
        "###o.o#.o..#o.o|..o.",
        "o.#.o....=#######..#",
        ".o#o.o....o.o#.o...o",
        "..#####....=.#o..o..",
        ".o.o.o.......#..o.o."
    ],
    [
        "...o.o.#............",
        ".o########.....=.###",
        "..#+o.o.o.o.o.#o.o..",
        ".o#o.o.o.....=#.o...",
        "..o.o.#o.o.o#####+..",
        ".o.o.+#=.....#o.o...",
        "#########o.o.#.o.o..",
        "..o+#+.o....+#o.o...",
        ".o.o#.o.o#=..o.o.o#..",
        "..o.#..o....o.o.o.#."
    ],
    [
        "##.............#o.o.",
        "....o.o.o#=....#.o.o",
        "...o.o.o.#o.o.o.o.o.",
        ".#o.o.o.o#......=#.o",
        ".#####..#####..#####",
        ".o.#+o...o.o....o.o.",
        "..o#o........o.o....",
        "####.....=#..###o...",
        "o.o...#####...o#.o..",
        ".......o.o.....#o..."
    ],
    [
        "..#...o...#...o.o..o",
        "..#.o..o.o.o...o..o.",
        "###o.o..o.o.o#..o..o",
        "..#####..#######..##",
        "...o#.o..o.o#o.o....",
        "..o.#o.o..o.#.o....o",
        ".########....o.#..o.",
        "..o.#o.o...|o.o..o.o",
        "...o#.o...######..o.",
        "............#o.o...o"
    ],
    [
        "o.o.o..o.#.o.o.#.o..",
        "#####...o#o.....o.o.",
        ".o.o...#####...o.o.o",
        "o.o.o...o.o...######",
        "######...=....#o.o.o",
        ".o.o....o.#o.o#.o.o.",
        "o.o.o..o.o#.o.......",
        ".o.o.######o.o.|o.o.",
        "..o..o#o.o#########.",
        "....o.#....o.o.o.o.."
    ],
    [
        "o.o....o.#..........",
        ".o.o....o#.....o.o..",
        "o.o....o.#o.oo#####.",
        "####..####oo.o#o.o..",
        "..o.o..o.o####|.....",
        "...o.o..............",
        "..######........=#.o",
        "...o#o....o.o#...#o.",
        "..o.#.o...#########.",
        "...o#o....#o.o.o.o.."
    ],
    [
        ".o.o#o.o....o.o.o...",
        ".####.....=######...",
        ".o.o...#o..#o.o.....",
        "o.o....o#......=####",
        ".o.o#o.......o....o.",
        "..o.#.o....#o.o..o.o",
        ".######...=####...o.",
        ".o.o.o....o#o.o#|o.o",
        "..........o#.o.o#...",
        "......#............."
    ],
    [
        ".o.o....o.o.o...o.o.",
        "###...#####...#o.o.o",
        ".o#o....#....#######",
        "o.#....=#=....o#o.o.",
        ".o#o.........o.#.o..",
        ".##..#o.o.....o#o.o.",
        "..o..#####..######..",
        ".o.o.#o.o....o#o.o..",
        "..o.o#.o.....o#.o...",
        ".....#o.o....o.o...."
    ],
    [
        ".o.o.#....=##....=#.",
        "o.o.o#+.o.o..o.o#...",
        ".#####...o..=###.o..",
        "....o.o.o..+#o.o..o.",
        ".o#=.o.o.o..#.o..o.o",
        "..+#####..####..|###",
        "..o.#&.o..o.o#..#++.",
        ".o.o#o.o.o.o.#..o.o.",
        "#####...=#=...#...=#",
        ".o.+.o..o.oo...o.o#."
    ],
    [
        "............#.......",
        ".o.o.o.....####..#.o",
        "######.o..o#o.o..#o.",
        "..o.o#o..o.#.o...###",
        "...o.#.o..o#o.......",
        "..o.o#o....o#o.o....",
        ".|#######...o####|##",
        ".#o.o#.o........#.#.",
        "....o#=....#....=#..",
        "..oo.o.o...oo.oo...."
    ],
    [
        ".......###..........",
        "..............o.#.o.",
        "..+#.o.o.o.....o#o..",
        ".o.#o.o.o.o...o.#.o.",
        "..o#########..#####.",
        ".o.#o.o.o......#.o..",
        "#####o.o.......#o...",
        ".o.o#...=#=....#.o..",
        "..o......#...###...#",
        "....o.o..#..ooo....."
    ],
    [
        "..............#.....",
        "#####...=#.=..#.o...",
        ".o.o#.o....o.o#.o...",
        "..o.#o.o..#######.o.",
        ".o.o#####..o.o.o####",
        ".#o.o.o#.......=#.o.",
        ".#.o.o.#.o.o#.o.#o.o",
        ".#++.......=#.o.o.o.",
        ".#####...####o.o.o.o",
        "..#+......o.o........"
    ],
    [
        "..........o.o..#....",
        "....o.o#o...........",
        "..o.######+.....o.o.",
        ".o.o#o.o.#....=#####",
        "..o.#.o.o.......o.o.",
        ".o.o#o.o.....+#o....",
        "#########....=#o....",
        ".o.o.o#.o.....+.....",
        "..o.o.#o........=#+.",
        ".............o#....."
    ],
    [
        "......#....o.o......",
        "..########..........",
        ".o#oo.o#++...=#.o...",
        "..#.........=####o..",
        ".o#o.o........o.#.o.",
        ".#####o.|....o.o#o..",
        ".|.o.######..#######",
        "..o.o#o.o.o...o#o.o.",
        "..####.o.o....o#.o..",
        "......o.o.o...o#o.o."
    ],
    [
        "...o.o#...o.o.o.....",
        "...####=...o.o..#++.",
        "...o.o#.o.o....o####",
        "..o.o.#o.o.o..o.#.o.",
        "#######...=#.o.o#o.o",
        ".o.o#.o.o.o######+..",
        "..o.#o=o.o.#.o......",
        ".o.o#.o.o.o#o.o.....",
        "...=#o.o.o.#####....",
        "............o.o....."
    ],
    [
        "..o.o#=.....++#.....",
        ".#####o......o#o.o..",
        ".|.o.#.o....o.#.o.o.",
        "..o.o#o.o....o#o.o..",
        "...#######..#######.",
        "...o.oo.o...o#.o..|.",
        ".#.........o.#o.o...",
        ".o.#=....#########..",
        ".o.#.......o.o.#.o..",
        "...................."
    ],
    [
        "...................",
        "..o.o..o.o....o.#.o.",
        ".|####o.o.o...o.####",
        "..o.o######++.....=#",
        "...o.#o.&.o#+.......",
        "..o.o#.....=...o#...",
        "######o.o.o.o.o.#.o.",
        ".o.#.o.o..o######.o.",
        ".o.#.o..o.#o.o.o....",
        "........o.#.o......."
    ],
    [
        "....#+..............",
        "..o.#+..........o.o.",
        ".o.o#=........+#####",
        "####.o.......o.#o.o.",
        ".o.#o.o.....o.o#.o..",
        ".o.####....=###.o.o.",
        ".........#...o.o.o..",
        "...o.o.o.#+.........",
        "..########+...#o.o..",
        ".............+#....."
    ],
    [
        "....................",
        "#=.......+######.o..",
        "..o#.o....#.o.o#o.o.",
        ".o.#o.oo#=.o.o.#####",
        "o.o#####..#.o.o#o.o.",
        ".o.#o.o....#.o.#.o..",
        "o.o#.o...+#=....#...",
        "####o.....#+......=#",
        ".o.o...|.o....o.o.o.",
        "......##o.o....o.o.."
    ]

];

let GAME_LEVELS = [
    '......................\n' +
    '.###################..\n' +
    '.#..............=..#..\n' +
    '.#.&........|......#..\n' +
    '.#......o..........#..\n' +
    '.#.@...............#..\n' +
    '.#.................#..\n' +
    '.###################..\n' +
    '......................\n',

];

FACT_ARRAY = [
    "Coronaviruses are a large family of viruses which may cause illness in animals " +
    "or humans. In humans several coronaviruses are known to cause respratory infections " +
    "ranging from the comon cold to more severe diseases",

    "COVID-19 spreads primarily from person to person through small droplets from the nose or " +
    "mouth, which are expelled when an infected person coughs, sneezes or speaks. These " +
    "droplets are relatively heavy and do not travel far.",

    "COVID-19 can be caught by someone with only a mild cough, many people with covid only " +
    "experience mild symptoms",

    "Practicing hand and respratory hygiene is the best way to protect yourself and others. " +
    "When possible maintain at least a 1 metre (3 feet) distance between yourself and others.",

    "Those who are experiencing fever, cough or other COVID-19 symptoms should self-isolate for  " +
    "2 weeks, monitering their symptoms daily. if they develop difficulty breathing, " +
    "contact your healthcare providor immediately.",

    "Children and adolescents have just as likely of a chance of becoming infected as an adult " +
    "They are less likely however to become severely sick.",

    "Avoid touching your eyes, nose and mouth. This is an easy way for viruses to enter your " +
    "body from your hands",

    "Avoid going to crowded places. Doing so will increase the chance of exposure to someone " +
    "who has COVID-19",

    "There is no vaccine or cure against COVID-19 yet. Possible vaccines and some specific " +
    "drug treatments are under investigation.",

    "The time between exposure to COVID-19 and the moment symptoms start is commonly around " +
    "five to six days but can range from 1 - 14 days.",

    "It has been proven that cats and dogs can catch COVID-19 from their owners, but there is " +
    "no edidence that these animals can transmit infections to humans.",

    "COVID-19 can survive for up to 72 hours on plastic and stainless steel, less than 24 on " +
    "cardboard and less than 4 on copper. Though COVID-19 can be cleaned from surfaces using " +
    "a disinfectant.",

    "Antibiotics do not help protect from COVID-19, antibiotics work against bacterial infections",

    "Older adults and people of any age who have serious underlying medical conditions may be at " +
    "higher risk for more serious complications form COVID-19",

    "Someone who has completed quaretine or has been released form isolation does not pose a risk " +
    "of infection to other people",

    "Face coverings are recommended while in public, this may reduce your exposure to the virus " +
    "and will help prevent you from passing your infection to others if you are non-symptomatic. " +
    "Face masks should be washed regularly",

    "Cover your sneezes and coughs with your elbow, or preferably a tissue that is immediately disposed of",

    "COVID-19 symptoms to look for are: fever, cough and shortness of breath.",

    "Other coronaviruses include Middle East Respratory Syndrome (MERS), and Severe Acute Respriratory " +
    "Syndrome (SARS)"
];

//audio import, load and volume adjustments
//////////
let bgAudio = new Audio("sounds/Ssong.wav");
let coinAudio = new Audio("sounds/Coin.wav");
let loseAudio = new Audio("sounds/Lose.wav");
let winAudio = new Audio("sounds/Win.wav");
let oneUpAudio = new Audio("sounds/1Up.wav");
bgAudio.load();
bgAudio.volume = 0.4;
bgAudio.loop = "true";
coinAudio.load();
coinAudio.volume = 0.2;
loseAudio.load();
loseAudio.volume = 0.2;
winAudio.load();
winAudio.volume = 0.2;
oneUpAudio.load();
oneUpAudio.volume = 0.2;
//////////

//global level var and lives var
let levelNum = 0
let lives = 0;

//button toggles for D-pad
let leftButt = false;
let rightButt = false;
let upButt = false;
let downButt = false;
let aButt = false;

//functions for toggling
//////////
function aButtT() {
    aButt = true;
}

function aButtF() {
    aButt = false;
}

function rightButtT() {
    rightButt = true;
}

function rightButtF() {
    rightButt = false;
}

function leftButtT() {
    leftButt = true;
}

function leftButtF() {
    leftButt = false;
}

function upButtT() {
    upButt = true;
}

function upButtF() {
    upButt = false;
}

function downButtT() {
    downButt = true;
}

function downButtF() {
    downButt = false;
}
/////////

function next() {
    wait = false;
}

//makes a psudo-random map using preset tiles
function chooseGen() {
    let genMap;
    let rand = Math.floor(Math.random() * 5);
    switch (rand) {
        case 0:
            genMap = genSmall();
            console.log("gen 0");
            break;
        case 1:
            genMap = genSmall();
            console.log("gen 1");

            break;
        case 2:
            genMap = genMedium();
            console.log("gen 2");

            break;
        case 3:
            genMap = genMedium();
            console.log("gen 3");

            break;
        case 4:
            genMap = genLarge();
            console.log("gen 4");

            break;
        default:
            genMap = genSmall();
            console.log("gen d");

    }
    return genMap;
}

function genSmall() {
    let finalMap = "";

    let tileOrder = [];
    let genPlayer = Math.floor(Math.random() * 4);
    tileOrder.push(playerTile[genPlayer]);

    for (let j = 1; j < 4; j++) {

        let gen = Math.floor(Math.random() * 10);
        console.log("adding tile " + gen + " to map")
        tileOrder.push(tileMaps[gen]);
    }

    finalMap += capstone;

    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 0; i < 2; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }
    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 2; i < 4; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }

    finalMap += foundation;

    return finalMap;
    console.log("\n\n" + finalMap);
}

function genMedium() {
    let finalMap = "";

    let tileOrder = [];
    let genPlayer = Math.floor(Math.random() * 4);
    tileOrder.push(playerTile[genPlayer]);

    for (let j = 1; j < 6; j++) {

        let gen = Math.floor(Math.random() * 10);
        console.log("adding tile " + gen + " to map")
        tileOrder.push(tileMaps[gen]);
    }

    finalMap += capstone;

    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 0; i < 3; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }
    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 3; i < 6; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }

    finalMap += foundation;

    return finalMap;
    console.log("\n\n" + finalMap);
}

function genLarge() {
    let finalMap = "";

    let tileOrder = [];
    let genPlayer = Math.floor(Math.random() * 4);
    tileOrder.push(playerTile[genPlayer]);

    for (let j = 1; j < 9; j++) {

        let gen = Math.floor(Math.random() * 10);
        console.log("adding tile " + gen + " to map")
        tileOrder.push(tileMaps[gen]);
    }

    finalMap += capstone;

    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 0; i < 3; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }
    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 3; i < 6; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }
    for (let k = 0; k < 10; k++) {
        finalMap += ".#";
        for (let i = 6; i < 9; i++) {

            finalMap += tileOrder[i][k];
        }
        finalMap += "#.\n";
    }

    finalMap += foundation;

    return finalMap;
    console.log("\n\n" + finalMap);
}

//fx audio mute toggle
let fxBool = true;

function fxTogg() {
    if (fxBool) {
        coinAudio.volume = 0;
        loseAudio.volume = 0;
        winAudio.volume = 0;
        oneUpAudio.volume = 0;
        fxBool = false;
    } else if (!fxBool) {
        coinAudio.volume = 0.2;
        loseAudio.volume = 0.2;
        winAudio.volume = 0.2;
        oneUpAudio.volume = 0.2;
        fxBool = true;
    }
}
//background music mute toggle
let musicBool = true;

function musicTogg() {
    if (musicBool) {
        bgAudio.volume = 0;
        musicBool = false;
    } else if (!musicBool) {
        bgAudio.volume = 0.5;
        musicBool = true;
    }
}

//toggles full screen
//source "https://developers.google.com/web/fundamentals/native-hardware/fullscreen"
function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}









//level class
//manages and builds level properties
class Level {
    constructor(plan) {
        //takes in level string and creates a matrix of symbols
        let mapMatrix = plan.trim().split("\n").map(i => [...i]);
        //height
        this.height = mapMatrix.length;
        //width
        this.width = mapMatrix[0].length;
        //contains moving Objects
        this.objArray = [];

        //goes through the matrix and checks the current symbol against the array "levelChars"
        //if the symbol represents a background object it returns the type of background object
        //else it creates an object related to the symbol and stores it in the "objArray" array
        //then returns empty so that the background is displayed
        this.mapMatrix = mapMatrix.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if (type == "puzbox") console.log("its Puzzzz")
                if (type == "puzbox") {
                    type = PuzBox;
                    let gg = type.create(new Vec(x, y), ch);
                    this.objArray.push(gg);
                    return "puzchk";
                }
                if (typeof type == "string") {
                    return type;
                }
                let gg = type.create(new Vec(x, y), ch);
                this.objArray.push(gg);
                return "empty";

            });
        });
    }
}
//State Class
//-used to track and alter the gameplay state
//stores level, object array of moving objects
//-status can be playing, win or lose
//-start returns state cotatining the current level, its objecs
//and the status playing
//-get player returns player grom objects array
class State {
    constructor(level, objects, status) {
        this.level = level;
        this.objects = objects;
        this.status = status;
    }
    static start(level) {
        return new State(level, level.objArray, "playing");
    }
    get player() {
        return this.objects.find(a => a.type == "player");
    }
}
//Vector Class
//-used to represent a vector
//-x and y store positions
//-plus method adds this Vec object's x and y values and 
//another Vec objects values
//-times method preforms multiplication on this Vec objects 
// x and y values using the incoming factor value
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }
}

//Player Class
//-stores this object's position as a Vec
//-stores speed value
//-get type returns player
//-creata method returns new player object 
class Player {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }
    get type() {
        return "player";
    }
    static create(pos) {
        return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
    }
}
Player.prototype.size = new Vec(0.8, 1.5);

//Box/Virus Class
//-stores posiction as Vec
//-stores movement speed
//-stores reset value
//-get type returns box
//-create returns new box object 
//-if incoming char is a = the new object moves along the x axis
//-if incoming char is a | the new object moves along the y axis
class Box {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }
    get type() {
        return "box";
    }
    static create(pos, ch) {
        if (ch == "=") {
            return new Box(pos, new Vec(2, 0));
        } else if (ch == "|") {
            return new Box(pos, new Vec(0, 2));
        }
    }
}
Box.prototype.size = new Vec(1, 1);

//UpBox Class
//-stores position as Vec
//-stores speed
//-stores reset value
//-stores count bool
class UpBox {
    constructor(pos, speed, reset, count) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
        this.count = count;
    }
    upCount() {
        this.count = false;
    }
    get type() {
        return "upbox";
    }
    static create(pos, ch) {
        if (ch == "&") {
            return new UpBox(pos, new Vec(0, 0), 0, true);
        }
    }
}
UpBox.prototype.size = new Vec(1, 1);
//for future version of the game
class PuzBox {
    constructor(pos, speed, reset, count) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
        this.count = count;
    }
    upCount() {
        this.count = false;
    }
    get type() {
        return "puzbox";
    }
    static create(pos, ch) {
        if (ch == "p") {
            return new PuzBox(pos, new Vec(0, 0), 0, true);
        }
    }
}
PuzBox.prototype.size = new Vec(1, 1);

//Coin/TP Class
//-stores position as a Vec
class Coin {
    constructor(pos, basePos, wobble) {
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
    }
    get type() {
        return "coin";
    }
    static create(pos) {
        let basePos = pos.plus(new Vec(0.2, 0.1));
        return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
    }
}
Coin.prototype.size = new Vec(0.6, 0.6);
//used by level class to determine what is in grid position
const levelChars = {
    ".": "empty",
    "#": "wall",
    "+": "infected",
    "@": Player,
    "o": Coin,
    "=": Box,
    "|": Box,
    "&": UpBox
}
//makes things gives them attributes and appends children to them
function eleMake(name, attrs, ...children) {
    let dom = document.createElement(name);
    for (let attr of Object.keys(attrs)) {
        dom.setAttribute(attr, attrs[attr]);
    }
    for (let child of children) {
        dom.appendChild(child);
    }
    return dom;
}
//makes parent div and appends it to gameDiv in html
class GameDisplay {
    constructor(parent, level) {
        this.dom = eleMake("div", {
            class: "game"
        }, drawGrid(level));
        this.objLayer = null;
        document.getElementById("gameDiv").appendChild(this.dom);
    }
    clear() {
        this.dom.remove();
    }
}

//px scale for grid
const scale = 25;

//draws table based on level array
function drawGrid(level) {
    return eleMake("table", {
        class: "background",
        id: "gameBack",
        style: `width: ${level.width * scale}px`
    }, ...level.mapMatrix.map(row =>
        eleMake("tr", {
                style: `height: ${scale}px`
            },
            ...row.map(type => eleMake("td", {
                class: type
            })))
    ));
}
//reads objArray and adds divs with
//the objects type as class
function drawObj(objArr) {
    return eleMake("div", {}, ...objArr.map(obj => {
        let divv = eleMake("div", {
            class: `actor ${obj.type}`
        });
        divv.style.width = `${obj.size.x * scale}px`;
        divv.style.height = `${obj.size.y * scale}px`;
        divv.style.left = `${obj.pos.x * scale}px`;
        divv.style.top = `${obj.pos.y * scale}px`;
        return divv;
    }));
}

//replaces objects and runs sroll function
GameDisplay.prototype.syncState = function (state) {
    if (this.objLayer) this.objLayer.remove();
    this.objLayer = drawObj(state.objects);
    this.dom.appendChild(this.objLayer);
    this.dom.className = `game ${state.status}`;
    this.centerPlayer(state);
};

//detects the players position, and if the position is a third
//away from the edge of the viewport the dom content is scrolled through.
GameDisplay.prototype.centerPlayer = function (state) {
    let width = this.dom.clientWidth;
    let height = this.dom.clientHeight;
    let margin = width / 3;
    let left = this.dom.scrollLeft,
        right = left + width;
    let top = this.dom.scrollTop,
        bottom = top + height;
    let player = state.player;
    let center = player.pos.plus(player.size.times(0.5)).times(scale);

    if (center.x < left + margin) {
        this.dom.scrollLeft = center.x - margin;
    } else if (center.x > right - margin) {
        this.dom.scrollLeft = center.x + margin - width;
    }
    if (center.y < top + margin) {
        this.dom.scrollTop = center.y - margin;
    } else if (center.y > bottom - margin) {
        this.dom.scrollTop = center.y + margin - height;
    }
};
//is used to check whether the player is touching something
Level.prototype.touches = function (pos, size, type) {
    let xS = Math.floor(pos.x);
    let xE = Math.ceil(pos.x + size.x);
    let yS = Math.floor(pos.y);
    let yE = Math.ceil(pos.y + size.y);

    for (let y = yS; y < yE; y++) {
        for (let x = xS; x < xE; x++) {
            let isOutside = x < 0 || x >= this.width ||
                y < 0 || y >= this.height;
            let here = isOutside ? "wall" : this.mapMatrix[y][x];
            if (here == type) return true;
        }
    }
    return false;
};
//checks whether objects overlap
function overlap(obj1, obj2) {
    return obj1.pos.x + obj1.size.x > obj2.pos.x &&
        obj1.pos.x < obj2.pos.x + obj2.size.x &&
        obj1.pos.y + obj1.size.y > obj2.pos.y &&
        obj1.pos.y < obj2.pos.y + obj2.size.y;
}
//box/virus collision method
//plays lose audio and reduces life count
//returns new state with lost status for map reset
Box.prototype.collision = function (state) {
    loseAudio.play();
    lives -= 1;
    return new State(state.level, state.objects, "lost");
};
//oneUp box collision method
//if the box hasnt been used before, the life count is
//increased by one, upCount is used to signify that the box 
//has been used, and the oneUp audio is played
//returns current state
UpBox.prototype.collision = function (state) {
    if (this.count) {
        lives += 1;
        this.upCount();
        oneUpAudio.play();
    }
    console.log("Upbox count: " + this.count)
    document.getElementById("livesText").innerHTML = "Lives: " + lives;
    return new State(state.level, state.objects, "playing");
};
//puzzle box feature that is for future version of the game
PuzBox.prototype.collision = function (state) {
    return new State(state.level, state.objects, "playing");
};
//coin collision method
//has since become toilet paper
//sets coin sound to beginning and plays sound
//removes this coin object from objects array
//checks to see if there are any more coin objects
//if there arent a state is returned with  a win status
//otherwise the current status is returned
Coin.prototype.collision = function (state) {
    coinAudio.currentTime = 0;
    coinAudio.play();
    let filt = state.objects.filter(a => a != this);
    let status = state.status;
    if (!filt.some(a => a.type == "coin")) status = "won";
    return new State(state.level, filt, status);
};
//box update method
//creates new position based on previous plus the movement 
//rate of the box object
//checks to see if the next space is a wall then returns a new box
//in that position. else resets position or changes the direction 
//of box movement
Box.prototype.update = function (time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
        return new Box(newPos, this.speed, this.reset);
    } else if (this.reset) {
        return new Box(this.reset, this.speed, this.reset);
    } else {
        return new Box(this.pos, this.speed.times(-1));
    }
};
//oneUp update method
//creates new position and chaecks to see if new position 
//is a wall then creates new oneUp object in that position
//speed for oneUp is 0
UpBox.prototype.update = function (time, state, keys) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
        return new UpBox(newPos, this.speed, this.reset, this.count);
    }
};
//feature for future version of the game
PuzBox.prototype.update = function (time, state, keys) {
    let player = state.player;
    if (state.level.touches2(player.pos, player.size, this)) {
        console.log("in moveboxxxxx")
        let newPos = player.pos.plus(player.size);
        return new PuzBox(newPuz, this.speed, this.reset, this.count);
    }
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
        return new PuzBox(newPos, this.speed, this.reset, this.count);
    }
};
//wobble speed and distance for coin animation
const wobbleSpeed = 8;
const wobbleDist = 0.07;
//coin update method
//sets movement speed and uses a Math.sin function to control 
//position, returns new position of the coin object
Coin.prototype.update = function (time) {
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;
    return new Coin(this.basePos.plus(new Vec(0, wobblePos)), this.basePos, wobble);
};
//movement rate of the player object
const playerSpeed = 5;
//player update method
//creates x speed variable and checks to see whether a left or right arrow key or touch button is held down
//if so player speed is added or removed from s apeed variable and the player div background image is changed
//current position of player object is called, new x position is current plus movement speed
//if new x position is not in wall space, pos takes new x value. 
//the same is done with the y direction minus the player div background change
//returns new player object at new position
Player.prototype.update = function (time, state, keys) {
    let xSpeed = 0;
    if (keys.ArrowLeft || leftButt) {
        xSpeed -= playerSpeed;
        document.getElementsByClassName('player')[0].style.background = "url('images/playerLeft.png')";
        document.getElementsByClassName('player')[0].setAttribute('id', 'plyrLeft');
        let x = document.getElementById('plyrLeft');
        console.log(x);
    }
    if (keys.ArrowRight || rightButt) {
        xSpeed += playerSpeed;
        document.getElementsByClassName('player')[0].style.background = "url('images/playerRight.png')";
        document.getElementsByClassName('player')[0].setAttribute('id', 'plyrRight');
        let x = document.getElementById('plyrRight');
        console.log(x);
    }
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, "wall") && !state.level.touches(movedX, this.size, "puzchk")) {
        pos = movedX;
    }
    let ySpeed = 0;
    if (keys.ArrowUp || upButt) {
        ySpeed -= playerSpeed;
        //allFalse();
    }
    if (keys.ArrowDown || downButt) {
        ySpeed += playerSpeed;
        //allFalse();
    }
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, "wall") && !state.level.touches(movedY, this.size, "puzchk")) {
        pos = movedY;
    }
    return new Player(pos, new Vec(xSpeed, ySpeed));

};
//updates objects, sets new state, if new state isnt playing newState is returned
//get player, check if player is touching infected item
//check if player is touching box, check if player touching upbox
//check if player overlaps with object, runs collison function if true
State.prototype.update = function (time, keys) {
    let objects = this.objects.map(object => object.update(time, this, keys));
    let newState = new State(this.level, objects, this.status);
    console.log("in the State.update: " + newState.status);
    if (newState.status != "playing") return newState;

    let player = newState.player;
    if (this.level.touches(player.pos, player.size, "infected")) {
        loseAudio.play();
        lives -= 1;
        return new State(this.level, objects, "lost");
    } else if (this.level.touches(player.pos, player.size, "box")) {
        return new State(this.level, objects, "lost");
    } else if (this.level.touches(player.pos, player.size, "upbox")) {
        lives += 1;
        return new State(this.level, objects, "playing");
    }

    for (let obj of objects) {
        if (obj != player && overlap(obj, player)) {
            if (obj.type == "puzbox") gg++;
            console.log("actor type: " + obj.type);
            newState = obj.collision(newState);
        }
    }
    return newState;
};
//tracks key down and up states to continue movement while held down
function keys(keys) {
    let down = Object.create(null);

    function track(event) {
        if (keys.includes(event.key)) {
            down[event.key] = event.type == "keydown";
            event.preventDefault();
        }
    }
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
    return down;
}
//keys is used to track whether an arrow button is pressed
const arrowKeys = keys(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "KeyA"]);

function runAnimation(frameFunc) {
    let lastTime = null;

    function frame(time) {
        if (lastTime != null) {
            let timeStep = Math.min(time - lastTime, 100) / 1000;
            if (frameFunc(timeStep) === false) return;
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}
//sets current level to 0 on page load
let curLev = 0;
//level run function
function runLevel(level, Display) {
    //creats new game layout using GameDisplay
    let display = new Display(document.body, level);
    //sets new state using start method
    let state = State.start(level);
    //endTime used to provide the user with a moment to see 
    //why level is changing
    let endTime = 1;
    return new Promise(resolve => {
        //promice is used to run runAnimation function
        runAnimation(time => {
            //state is updated to set objects at new positions
            state = state.update(time, arrowKeys);
            //syncState is used to reset display using new positions
            display.syncState(state);
            if (state.status == "playing") {
                //if the current status is playing the promise is run again
                return true;
            } else if (endTime > 0) {
                //else if endTime is more than 0, endtime is decreased and the promise re run
                endTime -= time;
                return true;
            } else {
                //else the board is cleared and the current status is used to resolve the promise
                display.clear();
                resolve(state.status);
                return false;
            }
        });
    });
}
//run Game gunction
async function runGame(plans, Display) {
    //sets lives amt to 5
    lives = 5;
    //removes landing and lose dom elements and displays game elements
    document.getElementById('homeDiv').style.display = "none";
    document.getElementById('loseDiv').style.display = "none";
    document.getElementById('buttonDiv').style.visibility = "visible";
    document.getElementById('scoreDiv').style.visibility = "visible";
    document.getElementById('otherScoreDiv').style.visibility = "visible";
    //plays background audio
    bgAudio.play();
    //loop is used to continually run the runLevel function
    for (let level = 0; level < plans.length;) {
        //displays facts from fact array and updates lives and level display
        let fact = Math.floor(Math.random() * FACT_ARRAY.length);
        console.log("fact number: " + fact);
        document.getElementById("factText").innerHTML = FACT_ARRAY[fact];
        document.getElementById("otherFactText").innerHTML = FACT_ARRAY[fact];
        document.getElementById("levelText").innerHTML = "Level: " + (level + 1);
        document.getElementById("livesText").innerHTML = "Lives: " + lives;
        console.log("Level: " + (level + 1));
        console.log("lives: " + lives);
        //map gen function run, runLevel is run and returns the status returned by its promise
        let randMap = chooseGen();
        let status = await runLevel(new Level(randMap), Display);
        //let status = await runLevel(new Level(plans[level]), Display);
        //if the level is won the level is raised -- (since the map gen was introduced 
        //this only affects win display)
        if (status == "won") level++;
        //if lives is equal to zero, the loop is broken and the lose display is shown
        else if (lives == 0) {
            console.log("You Lose");
            break
        }
    }
    document.getElementById('loseDiv').style.display = "block";

}


//landing page function
//shows landing screen and hides gameplay elements
function main() {
    document.getElementById('homeDiv').style.display = "block";
    document.getElementById('loseDiv').style.display = "none";
    document.getElementById('scoreDiv').style.visibility = "hidden";
    document.getElementById('buttonDiv').style.visibility = "hidden ";
    document.getElementById('otherScoreDiv').style.visibility = "hidden ";

}
main();