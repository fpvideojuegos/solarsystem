var gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
  }
  
  var config = {
    width: 300,
    height: 400,
    backgroundColor: 0x000000 ,
    scene: [Preload, Nivel1],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    }
  }
  
  
  var game = new Phaser.Game(config);
  