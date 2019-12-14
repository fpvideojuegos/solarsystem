class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    create() {

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



        ////// MERCURY //////
        this.mercurio = this.add.image(config.width / 4.8, config.height / 1.8, 'Mercurio').setScale(2.5);
        this.planet = this.add.text(70, 430, "MERCURY");
        this.planet.setInteractive().on('pointerdown', () => {
            this.scene.launch("HUD");
            this.scene.start("Level1");
            // this.scene.start("Level2");
        });

        //Level 2
        this.saturno = this.add.image(config.width / 3.4, config.height / 4, 'Saturno').setScale(0.4);

        this.planet2 = this.add.text(120, 230, "SATURN");

        this.planet2.setInteractive().on('pointerdown', () => {
            this.scene.launch("HUD");
            //this.scene.start("Level1");
            this.scene.start("Level2");
        });

    }
}