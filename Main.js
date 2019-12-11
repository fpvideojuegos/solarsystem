class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    create() {


        //Level 1
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