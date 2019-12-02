class GameMenu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {

    this.tittle = this.add.image(config.width / 2, config.height / 5, 'Tittle').setScale(2.5);


    this.button1 = this.add.text(70, 330, "1 PLAYER");
    this.button1.setFontFamily('Fuente');
    this.button1.setFontSize(22);
    this.button2 = this.add.text(290, 330, "2 PLAYER", 35);
    this.button2.setFontFamily('Fuente');
    this.button2.setFontSize(22);
    this.buttonSG = this.add.text(config.width / 5, 200, "EMPEZAR PARTIDA!!", 50);
    this.buttonSG.setFontFamily('Fuente');
    this.buttonSG.setFontSize(30);
    this.button1.setTint(0xfe6234);
    this.button2.setTint(0xfe6234);
    this.buttonSG.setTint(0xff0000);

    this.buttonSG.setInteractive().on('pointerdown', () => {
      this.scene.start("Main");
    });
    this.button1.setInteractive().on('pointerdown', () => {
      this.button1.setTint(0xfebe34);
      this.button2.setTint(0xfe6234);
      this.registry.set("players");

    });
    this.button2.setInteractive().on('pointerdown', () => {
      this.button1.setTint(0xfe6234);
      this.button2.setTint(0xfebe34);
      this.registry.set("friend"); // se pueden guardar objetos en el 2
    });
  }
}