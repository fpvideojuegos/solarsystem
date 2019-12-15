class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    //Set key name
    this.key = config.key;

    //Set physics and add to scene
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);

    //Start with "PlayerR" animation
    this.play("playerR");

    //Add collides
    this.body.setCollideWorldBounds(true);

    //Set lives
    this.lives = 3;

    //Set score
    this.score = 0;

    //Add to group of players
    config.scene.players.add(this);

    //Set the mode for use 1p or 2p
    this.type = config.type;

    //Define keys for 1p or 2p
    if (this.type == "coop") {

      //Define for 1p
      //Adding cursor keys
      this.cursorKeys = this.scene.input.keyboard.createCursorKeys();

      //This key to shoot
      this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

      //--------------------------------------------------------------------------------------//

      //Define for 2p
      //Adding keys WASD
      this.WASD = this.scene.input.keyboard.addKeys({
        WASD_UP: Phaser.Input.Keyboard.KeyCodes.W,
        WASD_DOWN: Phaser.Input.Keyboard.KeyCodes.S,
        WASD_LEFT: Phaser.Input.Keyboard.KeyCodes.A,
        WASD_RIGHT: Phaser.Input.Keyboard.KeyCodes.D,
      });

      //This key to shoot
      this.c = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);;

    } else {

      this.cursorKeys = this.scene.input.keyboard.createCursorKeys();
      this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
  }

  updateScore(scene, pts) {
    this.score = this.score + pts;
    scene.events.emit("scoreChange", this);
  }

  updateLives(scene, hp) {
    this.lives = this.lives + (hp);
    scene.events.emit("livesChange", this);
  }
  //Configure cursor key movements
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

  hitted(scene, enemy) {
    if (this.alpha == 1) {
      enemy.resetEnemy();
      if (this.alpha < 1) {
        return;
      }
      this.alpha = 0.4;
      this.disableBody(true, true);

      scene.time.addEvent({
        delay: 1000,
        callback: () => {
          this.reset(scene);
        },
        callbackScope: this,
        loop: false
      });

      //Actualiza las vidas
      this.updateLives(scene, -1)
    }
  }

  //Animacion de aparición
  reset(scene) {
    if (this.lives > 0) {
      var x = config.width / 2 - 8;
      var y = config.height + 64;
      this.enableBody(true, x, y, true, true);

      this.alpha = 0.5;

      var tween = scene.tweens.add({
        targets: this,
        y: config.height - 64,
        ease: 'Power1',
        duration: 1500,
        repeat: 0,
        onComplete: function () {
          this.alpha = 1;
        },
        callbackScope: this
      });
    }
  }

  //Configure WASD movements
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
};
