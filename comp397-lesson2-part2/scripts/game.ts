/// <reference path="typings/easeljs/easeljs.d.ts" /> 
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


//game framework variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;

//game variables
var helloLabel: createjs.Text; //create a reference

function init()
{
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); //framerate for game
    createjs.Ticker.on("tick", gameloop);

    main();
}


//our main game loop
function gameloop()
{
    stage.update();
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
}