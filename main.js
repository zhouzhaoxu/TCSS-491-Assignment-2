var AM = new AssetManager();
var gameEngine = new GameEngine();
//the "main" code begins here
var friction = 1;
var acceleration = 1000000;
var game_Over = false;
//var maxSpeed = 300;

//function loadAssets() {
	AM.queueDownload("./img/health bar_BW.png");
	AM.queueDownload("./img/Game_Over.png");
	//AM.downloadAll(startGame);
//}

AM.downloadAll(function () {
	console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
 
    //var base = new Base(gameEngine, 0);
    //base.setIt();
    //gameEngine.addEntity(circle);
    end = new GameOver(gameEngine, AM.getAsset("./img/Game_Over.png"));
    gameEngine.addEntity(end);
    for (var i = 0; i < 2; i++) {
    	base = new Base(gameEngine, i, AM.getAsset("./img/health bar_BW.png"));
    	base.setColor(i);
        gameEngine.addEntity(base);
    }
    gameEngine.init(ctx);
    gameEngine.start();
});
