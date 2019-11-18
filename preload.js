class Preload extends Phaser.Scene {
    constructor() {
        super("preload");
    }

    ///////////  PRECARGA  ///////////
    preload() {

        //Background Image
        this.load.image("Back", "assets/images/Back.png");

        //Create Loading Bar
        this.fullBar = this.add.graphics();
        this.fullBar.fillStyle(0x660066, 1);
        this.fullBar.fillRect((this.cameras.main.width / 4)-2,(this.cameras.main.height /2) - 18, (this.cameras.main.width / 2) + 4, 20);
        this.progress = this.add.graphics();
        //Progress
        this.load.on('progress', function (value) {
            this.progress.clear();
            this.progress.fillStyle(0x990099, 1);
            this.progress.fillRect((this.cameras.main.width / 4), (this.cameras.main.height /2) - 16, (this.cameras.main.width / 2) * value, 16);
        }, this);
        //Delete Loading Bar
        this.load.on('complete', function () {
            this.progress.destroy();
            this.fullBar.destroy();
        }, this);

        //Player Spritesheet
        this.load.spritesheet("player", "assets/spritesheets/player.png",{
            frameWidth: 16,
            frameHeight: 24
        });

        //Enemy Spritesheet
        this.load.spritesheet("ship", "assets/spritesheets/player.png",{
            frameWidth: 16,
            frameHeight: 16
        });

        //Menu Audios
        this.load.audio("menuMusic", ["assets/sounds/menu_music.ogg", "assets/sounds/menu_music.mp3"]);
        
        /* Fuente pixelada "Fuente"
        this.load.bitmapFont("Fuente", "assets/font/font.png", "assets/font/font.xml");
        */

    } //FINAL PRELOAD


    ///////////  CREACION  ///////////
    create() {
        
        this.scene.start("Level1"); //Primera escena del juego

        //Animación Player rojo
        this.anims.create({
            key: "playerR",
            frames: this.anims.generateFrameNumbers("player", { 
                start: 0,
                end: 1,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Animación Player verde
        this.anims.create({
            key: "playerG",
            frames: this.anims.generateFrameNumbers("player", {
                start: 2,
                end: 3,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Animación Ship
        this.anims.create({
            key: "ship",                                             
            frames: this.anims.generateFrameNumbers("ship", { 
                start: 0,
                end: 1,
            }),
            frameRate: 20,
            repeat: -1      
        });
    }
}
