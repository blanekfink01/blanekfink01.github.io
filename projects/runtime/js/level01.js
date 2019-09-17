var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY - 110},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'trashcan',x:750,y:groundY},
                {type: 'trashcan',x:970,y:groundY},
                {type: 'enemy',x:500,y:groundY-50},
                {type: 'enemy',x:700,y:groundY-75},
                {type: 'enemy',x:800,y:groundY-80},
                {type: 'coin',x:1000,y:groundY-50} 
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        function createCoin(x,y) {
            var coin = game.createGameItem(coin,25);
            var coinImage = draw.bitmap('img/coin.png');
            coin.addChild(coinImage);
            coin.x = x;
            coin.y = y;
            coin.velocityX = -1;
            coinImage.x = -25;
            coinImage.y = -25;
            game.addGameItem(coin);
            
            coin.onPlayerCollision = function() {
                game.changeIntegrity(100);
                coin.fadeOut();
            };
        }
        
        function createEnemy(x,y) {
            var enemy =  game.createGameItem('enemy',25);
            enemyImage = draw.bitmap('img/boo.png');
            enemy.addChild(enemyImage);
            enemyImage.x = -25;
            enemyImage.y = -25;
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            enemy.rotatonalVelocity = 10;
            game.addGameItem(enemy);
          
            enemy.onPlayerCollision = function() {
              console.log('The enemy has hit Halle');
              game.changeIntegrity(-25);
              enemy.fadeOut();
            };
         
            enemy.onProjectileCollision = function() {
             console.log('Halle has hit the enemy');
             game.increaseScore(100);
             enemy.fadeOut();
            };
        } 
         
         function createTrashCan(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 15;
            var  myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y - 25;
            var obstacleImage = draw.bitmap('img/trash.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -100;
            obstacleImage.y = -75;
            game.addGameItem(myObstacle);    
             
             
         }
    
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var  myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            game.addGameItem(myObstacle);    
        }    
        for (var i = 0; i < levelData.gameItems.length; i++) {
            if (levelData.gameItems[i].type === 'sawblade') {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if (levelData.gameItems[i].type === 'trashcan') {
                createTrashCan(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if (levelData.gameItems[i].type === 'enemy') {
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y);
                
            }
            if (levelData.gameItems[i].type === 'coin') {
                createCoin(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
        }
        
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}