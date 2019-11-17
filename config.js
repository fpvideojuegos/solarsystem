var gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
  }
  
  var config = {
    width: 500,
    height: 700,
    backgroundColor: 0x000000 ,
    scene: [Preload, Level1, GameMenu],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    }
  }
  
  
  var game = new Phaser.Game(config);
  