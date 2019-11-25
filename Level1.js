class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  init(mode) {
    this.mode = mode;
  }

  create() {

    this.Background = this.add.tileSprite(0, 0, config.width, config.height, "Back").setOrigin(0, 0);

    //Music
    this.music = this.sound.add("MusMenu");

    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }

    this.music.play(musicConfig);

    //Group of Ships
    this.enemies = this.add.group();

    //Set the scale of the enemies
    this.enemy = new Enemy({ scene: this, x: config.width / 2 - 50, y: config.height / 2, key: "Enemy", anim: "Enemy" }).setScale(2);

    //Group Player
    this.ships = this.add.group();

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
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); //Disparar

  }  //Fin del Create

  update() {
    this.Background.tilePositionY -= 0.3;
    this.player.movePlayerManagerCursorKeys();

    //Jugador 1 dispara
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.Player_Shoot(this.player);
    }

  }  //Fin del Update

  //Crea un disparo en la posición del jugador
  Player_Shoot(player) {

    //Group of Shoots
    this.shoots = this.add.group();

    //Shoot
    this.shoot = new Shoot(this, player);
  }

}