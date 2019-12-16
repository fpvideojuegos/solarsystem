class Win extends Phaser.Scene {
    constructor() {
      super("Win");
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
  
      this.startButton = this.add.bitmapText(config.width / 2, config.height / 3, "pixelFont", "You win!", 48).setOrigin(0.5, 0.5);
  
    }
  }