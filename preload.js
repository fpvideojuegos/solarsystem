class Preload extends Phaser.Scene {
    constructor() {
        super("preload");
    }

    ///////////  PRECARGA  ///////////
    preload() {

        /*Imagen Background
        this.load.image("Back01", "assets/images/Back01.png");
        */


        /*Crea la barra de carga
        this.fullBar = this.add.graphics();
        this.fullBar.fillStyle(0x660066, 1);
        this.fullBar.fillRect((this.cameras.main.width / 4)-2,(this.cameras.main.height /2) - 18, (this.cameras.main.width / 2) + 4, 20);
        this.progress = this.add.graphics();
        //Progreso de la barra de carga
        this.load.on('progress', function (value) {
            this.progress.clear();
            this.progress.fillStyle(0x990099, 1);
            this.progress.fillRect((this.cameras.main.width / 4), (this.cameras.main.height /2) - 16, (this.cameras.main.width / 2) * value, 16);
        }, this);
        //Eliminar la barra de carga
        this.load.on('complete', function () {
            this.progress.destroy();
            this.fullBar.destroy();
        }, this);
        */


        /*Plantilla creacion de sprites
        this.load.spritesheet("NombreSprite", "assets/spritesheets/imagen.png",{
            frameWidth: 128,  // Ancho
            frameHeight: 20   // Largo
        });
        */

        /*Plantilla Audios
        this.load.audio("NombreAudio", ["assets/sounds/Audio.ogg", "assets/sounds/Audio.mp3"]);
        */
        
        // Fuente pixelada "Fuente" (Cambiar)
        this.load.bitmapFont("Fuente", "assets/font/font.png", "assets/font/font.xml");
        
    } //FINAL PRELOAD


    ///////////  CREACION  ///////////
    create() {
        
        this.scene.start("nivel1"); //Primera escena del juego

        /*Plantilla Animación
        this.anims.create({
            key: "",                                             //Nombre de la animación
            frames: this.anims.generateFrameNumbers("player", {  //Nombre del sprite
                start: 0,
                end: 1,
            }),
            frameRate: 20,  //frames por segundo
            repeat: -1      //Infinito
        });
        */
    }
}
