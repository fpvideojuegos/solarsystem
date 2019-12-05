class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    create() {
        this.planet = this.add.text(70, 330, "MERCURY");

        this.planet.setInteractive().on('pointerdown', () => {
            this.scene.launch("HUD");
            //this.scene.start("Level1");
            this.scene.start("Level2");
        });


    }
}