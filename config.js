var gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
  }
  
  var config = {
    width: 500,
    height: 700,
    backgroundColor: 0x000000 ,
    scene: [Preload,GameMenu, Level1, Level2, test1, test2, test3, HUD, Main, Win, Lose],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    }
  }
  
  
  var game = new Phaser.Game(config);
  