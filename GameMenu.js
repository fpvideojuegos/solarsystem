class GameMenu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {
    
    //Music of this scene
    this.music = this.sound.add("MusMenu");
    var musMenu = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }
    this.music.play(musMenu); 
    
    this.tittle = this.add.image(config.width / 2, config.height / 5, 'Tittle').setScale(2.5);

    this.startButton = this.add.bitmapText(config.width / 2, config.height / 3, "pixelFont", "START GAME", 48).setOrigin(0.5, 0.5);

    this.startButton.setInteractive().on('pointerdown', () => {
      this.music.stop(musMenu); //Stop the musMenu music
      this.scene.start("Main"); //Start "Main" scene
    });

  }
}