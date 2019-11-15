class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.type);

    this.key = config.key;
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);

    this.play("thrust");
    this.body.setCollideWorldBounds(true);

    this.lives = 3;

    config.scene.players.add(this);

    this.type = config.type;

    if (this.type == "coop") {

      this.WASD = this.scene.input.keyboard.addKeys({
        WASD_UP: Phaser.Input.Keyboard.KeyCodes.W,
        WASD_DOWN: Phaser.Input.Keyboard.KeyCodes.S,
        WASD_LEFT: Phaser.Input.Keyboard.KeyCodes.A,
        WASD_RIGHT: Phaser.Input.Keyboard.KeyCodes.D,
      });

      this.c = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);;

      this.cursorKeys = this.scene.input.keyboard.createCursorKeys();
      this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    } else {

      this.cursorKeys = this.scene.input.keyboard.createCursorKeys();
      this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
  }

  movePlayerManagerCursorKeys() {

    this.body.setVelocity(0);

    if (this.cursorKeys.left.isDown) {

      this.body.setVelocityX(-gameSettings.playerSpeed);
    
    } else if (this.cursorKeys.right.isDown) {
    
      this.body.setVelocityX(gameSettings.playerSpeed);
    
    }

    if (this.cursorKeys.up.isDown) {

      this.body.setVelocityY(-gameSettings.playerSpeed);
    
    } else if (this.cursorKeys.down.isDown) {
    
      this.body.setVelocityY(gameSettings.playerSpeed);
    
    }
  }

  movePlayerManagerWithWasd() {

    this.body.setVelocity(0);

    if (this.WASD.WASD_LEFT.isDown) {
      
      this.body.setVelocityX(-gameSettings.playerSpeed);
    
    } else if (this.WASD.WASD_RIGHT.isDown) {
    
      this.body.setVelocityX(gameSettings.playerSpeed);
    
    }

    if (this.WASD.WASD_UP.isDown) {
    
      this.body.setVelocityY(-gameSettings.playerSpeed);
    
    } else if (this.WASD.WASD_DOWN.isDown) {
    
      this.body.setVelocityY(gameSettings.playerSpeed);
    
    }
  }
}