var gameState = "start"
var homeObj;
var singlePlrHome;
var level1Obj;
var bgImg;
var multiplayerBgImg;
var singleBgImg;
var multiHomeObj;

var multiGameState = 0;
var playerCount = 0;
var allPlayers;
var database;

var form, player, game;

var player1, player2;


function preload(){
bgImg = loadImage("Images/bgImg.jpg")
multiplayerBgImg = loadImage("Images/multiBgImg.jpg")
singleBgImg = loadImage("Images/singleImg.jpg")
}

function setup(){
    createCanvas(displayWidth - 0, displayHeight - 100)
    homeObj = new Home();
    homeObj.display();
    //singlePlrHome = new SinglePlayerHome();
    level1Obj = new Level1();

    database = firebase.database();
}

function draw(){
    if (gameState === "playLevel1") {
        background("orange")
        level1Obj.display()    
    }
    drawSprites();                   
}

//