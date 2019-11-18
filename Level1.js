class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  init(mode){
    this.mode = mode;
  }

  create() {

    this.Background = this.add.tileSprite(0, 0, config.width, config.height, "Back").setOrigin(0, 0);

    const holaMundo = this.add.bitmapText(config.width / 2 - 90, config.height / 2, "Fuente", "Hello World", 40);
    holaMundo.setTint(0x8888ff);  //azul claro

    //Grupo Player
    this.ships = this.add.group();

    //Player 1
    this.player1 = new Player({
      scene: this,
      x: config.width / 2 - 50,
      y: config.height / 2,
      key: "player",
      anim: "player"
    });

  }  //Fin del Create


  update() {
    this.Background.tilePositionY -= 0.3;
    this.player1.movePlayerManagerCursorKeys();

  }  //Fin del Update
}