class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }

    create() {
        var mercury;
      mercury=this.add.sprite(120, 300,'mercury').setScale(5);
        this.planet = this.add.text(70, 330, "MERCURY");

        this.planet.setInteractive().on('pointerdown', () => {
            this.scene.launch("HUD");
            //this.scene.start("Level1");
            this.scene.start("Level2");
        });


    }
}