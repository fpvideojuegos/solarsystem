class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  create() {

    this.Background = this.add.tileSprite(0, 0, config.width, config.height, "Back").setOrigin(0, 0);

    //Grupo Player
    this.player = this.add.group();

    //Player 1
    this.player = new Player({
      scene: this,
      x: config.width / 2 - 50,
      y: config.height / 2,
      key: "player",
      anim: "playerR"
    });

    //Controles Player 1
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    
  }  //Fin del Create


  update() {
    this.Background.tilePositionY -= 0.3;
    
    //Controla el movimiento de los jugadores
    this.player.movePlayerManager();
  
  }  //Fin del Update
}