class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    //Set key name
    this.key = config.key;

    //Set physics and add to scene
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);

    //Start with "Player" animation
    this.play("playerR");

    //Add collides
    this.body.setCollideWorldBounds(true);

    //Set lives
    this.lives = 3;

    //Add to group of ships
    config.scene.ships.add(this);

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
