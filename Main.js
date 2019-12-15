class Main extends Phaser.Scene {
    constructor() {
        super("Main");
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

        ////// MERCURY //////
        this.mercurio = this.add.image(config.width / 4.8, config.height / 1.8, 'Mercurio').setScale(2.5);
        this.planet = this.add.text(70, 430, "MERCURY");
        this.planet.setInteractive().on('pointerdown', () => {
            this.music.stop(musMenu);   //Stop the musMenu music
            this.scene.launch("HUD");   //Launch "HUD"
            this.scene.start("Level1"); //Start "Level1" scene alias "MERCURY"
        });

        ////// SATURN //////
        this.saturno = this.add.image(config.width / 3.4, config.height / 4, 'Saturno').setScale(0.4);

        this.planet2 = this.add.text(120, 230, "SATURN");

        this.planet2.setInteractive().on('pointerdown', () => {
            this.music.stop(musMenu);   //Stop the musMenu music
            this.scene.launch("HUD");   //Launch "HUD"
            this.scene.start("Level2"); //Start "Level2" scene alias "SATURN"
        });

        /*  NEW ENEMIES TESTING {DISABLED TESTING}
        //Enemy horde
        this.test1 = this.add.bitmapText(config.width / 2 + 100, (config.height / 5) * 1, "pixelFont", "horde", 48).setOrigin(0.5, 0.5);
        this.test1.setInteractive().on('pointerdown', () => {
            this.scene.start("Test1");
        });

        //Enemy zigzag
        this.test2 = this.add.bitmapText(config.width / 2 + 100, (config.height / 5) * 2, "pixelFont", "jet-Z", 48).setOrigin(0.5, 0.5);
        this.test2.setInteractive().on('pointerdown', () => {
            this.scene.start("Test2");
        });
        */
    }
}