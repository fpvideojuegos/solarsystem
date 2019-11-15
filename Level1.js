class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  create() {

    const holaMundo = this.add.bitmapText(config.width / 2 - 90, config.height / 2, "Fuente", "Hello World", 40);
    holaMundo.setTint(0x8888ff);  //azul claro

  }  //Fin del Create
  update() {

  }  //Fin del Update
}