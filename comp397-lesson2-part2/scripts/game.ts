/// <reference path="typings/easeljs/easeljs.d.ts" /> 
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />


//game framework variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var assets: createjs.LoadQueue;
var manifest = [{ id: "button", src: "assets/images/button.jpg" }
    ];

//game variables
var helloLabel: createjs.Text; //create a reference
var button: createjs.Bitmap;

function preload()
{
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //setup statistics object
    setupStats();
}

function init()
{
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); //framerate for game
    //event listener triggers 60 times every second 
    createjs.Ticker.on("tick", gameloop);

     main();
}

function setupStats() {

    stats = new Stats();
    stats.setMode(0); //set to FPS

    //align to top left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);
}



//our main game loop
function gameloop()
{
    stats.begin();// begin measuring

    stage.update();

    stats.end(); //end measuring
}

//callback function that allows to respond to clicks of the button
function buttonClicked(event: createjs.MouseEvent) {
    console.log("clicked");
}

//changes the alpha transparency of the button
function buttonOver() {
    button.alpha = 0.8;
}
function buttonOut() {
    button.alpha = 1.0;
}

     //main function
function main()
{
    console.log("Game is running");
    helloLabel = new createjs.Text("Hello world", "40px Consolas", "#a0a0a0");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 160;
    helloLabel.y = 200;

    stage.addChild(helloLabel);

    button = new createjs.Bitmap(assets.getResult("button"));
    button.regX = button.getBounds().width * 0.5;
    button.regY = button.getBounds().height * 0.5;
    button.x = 140;
    button.y = 250;
    stage.addChild(button);
    button.on("click", buttonClicked);
    button.on("mouseover", buttonOver);
    button.on("mouseout" , buttonOut);
}