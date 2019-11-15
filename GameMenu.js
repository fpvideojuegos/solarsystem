class GameMenu extends Phaser.Scene {
    constructor() {
      super("GameMenu");     
    }

    create(){        
      //  const menuButton = this.add.bitmapText(config.width / 2 - 75, config.height / 2, "pixelFont", "START " , 40); 
     //  this.add.bitmapText(config.width / 2 - 75, config.height / 2, "pixelFont", "START " , 40); 
       /* menuButton.setInteractive().on('pointerdown', () => { 
            this.scene.start("playGame");
        }); */
        this.button1 = this.add.bitmapText(10, 200, "Fuente", "1 Player" , 30); 
        this.button2 = this.add.bitmapText(140, 200, "Fuente", "2 Player" , 30); 

        this.button1.setInteractive().on('pointerdown', () => { 
          this.scene.launch('HUD');
          this.scene.start("playGame");
        this.registry.set("players", 1);
      }); 
      this.button2.setInteractive().on('pointerdown', () => { 
        this.scene.launch('HUD');
        this.scene.start("playGame");
      this.registry.set("players",2); // se pueden guardar objetos en el 2
    }); 
      // this.input.on("pointerdown",() => this.scene.start("playGame"));
    }
}