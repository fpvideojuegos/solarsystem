class Preload extends Phaser.Scene {
    constructor() {
        super("preload");
    }

    ///////////  PRECARGA  ///////////
    preload() {

        ////// BACKGROUNDS //////
        //Mercury
        this.load.image("bgMercury", "assets/images/bgMercury.png");
        //Saturn
        this.load.image("bgSaturn", "assets/images/bgSaturn.png");

        ////// FONTS //////
        //this.load.bitmapFont("pixelFont", "assets/font/fonPixel.png", "assets/font/fonPixel.fnt"); //Desactivada por falta numeros
        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml"); //Por defecto


        /////// LOADING BAR //////
        this.fullBar = this.add.graphics();
        this.fullBar.fillStyle(0x660066, 1);
        this.fullBar.fillRect((this.cameras.main.width / 4) - 2, (this.cameras.main.height / 2) - 18, (this.cameras.main.width / 2) + 4, 20);
        this.progress = this.add.graphics();
        //Progress
        this.load.on('progress', function (value) {
            this.progress.clear();
            this.progress.fillStyle(0x990099, 1);
            this.progress.fillRect((this.cameras.main.width / 4), (this.cameras.main.height / 2) - 16, (this.cameras.main.width / 2) * value, 16);
        }, this);
        //Delete Loading Bar
        this.load.on('complete', function () {
            this.progress.destroy();
            this.fullBar.destroy();
        }, this);

        //// SPRITESHEETS ////
        //Player
        this.load.spritesheet("player", "assets/spritesheets/nave.png", {
            frameWidth: 24,
            frameHeight: 24
        });

        //Basic
        this.load.spritesheet("Enemy", "assets/spritesheets/enemy.png", {
            frameWidth: 24,
            frameHeight: 24
        });

        //Jet-Z
        this.load.spritesheet("JetZ", "assets/spritesheets/lemon.png", {
            frameWidth: 32,
            frameHeight: 32
        });

        //Bounty hunter
        this.load.spritesheet("hunter", "assets/spritesheets/boss.png", {
            frameWidth: 68,
            frameHeight: 68
        });

        //Shoot
        this.load.spritesheet("Shoot", "assets/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        //Tittle
        this.load.spritesheet("Tittle", "assets/spritesheets/Titulo.png", {
            frameWidth: 128,
            frameHeight: 20
        });

        //Mercury
        this.load.spritesheet("Mercurio", "assets/images/mercury.png", {
            frameWidth: 60,
            frameHeight: 60
        });

        //Saturn
        this.load.spritesheet("Saturno", "assets/images/saturn.png", {
            frameWidth: 120,
            frameHeight: 200
        });

        ////AUDIO////
        //Main Menu
        this.load.audio("MusMenu", ["assets/sounds/Mus_Menu.ogg", "assets/sounds/Mus_Menu.mp3"]);
        //Main Menu
        this.load.audio("MusLevel1", ["assets/sounds/Mus_Nivel1.ogg", "assets/sounds/Mus_Nivel1.mp3"]);
        //Main Menu
        this.load.audio("MusLevel2", ["assets/sounds/Mus_Nivel2.ogg", "assets/sounds/Mus_Nivel2.mp3"]);
        //Explosion Audio
        this.load.audio("SndExplosion", ["assets/sounds/Snd_Explosion.ogg", "assets/sounds/Snd_Explosion.mp3"]);
        //PowerUp Audio
        this.load.audio("SndPowerup", ["assets/sounds/Snd_Powerup.ogg", "assets/sounds/Snd_Powerup.mp3"]);
        //shoot Audio
        this.load.audio("SndShoot", ["assets/sounds/Snd_Shoot.ogg", "assets/sounds/Snd_Shoot.mp3"]);
        //shoot Audio
        this.load.audio("MusLose", ["assets/sounds/Mus_Game_Over.ogg", "assets/sounds/Mus_Game_Over.mp3"]);

    } //FINAL PRELOAD


    ///////////  CREATE  ///////////
    create() {

        this.scene.start("Menu"); //Primera escena del juego

        //Animation player red
        this.anims.create({
            key: "playerR",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 2,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Animation player green
        this.anims.create({
            key: "playerG",
            frames: this.anims.generateFrameNumbers("player", {
                start: 2,
                end: 3,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Ship Animation
        this.anims.create({
            key: "Enemy",
            frames: this.anims.generateFrameNumbers("Enemy", {
                start: 0,
                end: 3,
            }),
            frameRate: 20,
            repeat: -1
        });

        //jet-Z Animation
        this.anims.create({
            key: "AnimJetZLeft",
            frames: this.anims.generateFrameNumbers("JetZ", {
                start: 0,
                end: 1,
            }),
            frameRate: 20,
            repeat: -1
        });
        //jet-Z Animation
        this.anims.create({
            key: "AnimJetZRight",
            frames: this.anims.generateFrameNumbers("JetZ", {
                start: 2,
                end: 3,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Boss Animation
        this.anims.create({
            key: "Boss",
            frames: this.anims.generateFrameNumbers("hunter", {
                start: 0,
                end: 0,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Shoot Animation
        this.anims.create({
            key: "Shoot",
            frames: this.anims.generateFrameNumbers("Shoot", {
                start: 0,
                end: 1,
            }),
            frameRate: 20,
            repeat: -1
        });

        //Tittle Animation
        this.anims.create({
            key: "Tittle",
            frames: this.anims.generateFrameNumbers("Tittle", {
                start: 0,
                end: 1,
            }),
            frameRate: 10,
            repeat: -1
        });
    }
}
