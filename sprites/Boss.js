class Boss extends Enemy {
  constructor(config) {

    super(config);

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
        delay: 1000,
        callback: () => {
          this.resetEnemy();
        },
        callbackScope: this,
        loop: false
      });
    }
  }

  resetEnemy() {

    this.y = -50;

    var randomX = Phaser.Math.Between(0, config.width);

    this.x = randomX;
  }

}
