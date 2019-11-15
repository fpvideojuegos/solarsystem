var gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
  }
  
  var config = {
    width: 500,
    height: 700,
    backgroundColor: 0x000000 ,
<<<<<<< HEAD
    scene: [Preload, Level1],
=======
    scene: [Preload,GameMenu],
>>>>>>> 2f18bb2f9003154608d20534ac5df4a79b2aeb5d
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    }
  }
  
  
  var game = new Phaser.Game(config);
  