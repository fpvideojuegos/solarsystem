class Boss extends Phaser.GameObjects.Sprite {
    constructor(config) {
  
      super(config.scene, config.x, config.y, config.key, config.anim);
  
      ///// PARAMS /////
      this.key = config.key;
      this.value = config.value;
      this.scene = config.scene;
      this.speed = config.speed;
  
      //Physics
      config.scene.physics.world.enable(this);
      config.scene.add.existing(this);
      this.setInteractive();
  
      //Animation
      this.play(config.anim);

    }
  
    moveBoss() {
  
      this.y += this.speed;
  
      if (this.y > config.height) {
        this.scene.time.addEvent({
          delay: 2000,
          callback: () => {
            this.resetEnemy();
          },
          callbackScope: this,
          loop: false
        });
      }
  
    }
  
    resetBoss() {
  
      this.y = -25;
  
      var randomX = Phaser.Math.Between(0, config.width);
  
      this.x = randomX;
    }
  
  }