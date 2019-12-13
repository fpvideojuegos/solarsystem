class Enemy extends Phaser.GameObjects.Sprite {
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

    //Enemy group
    config.scene.enemies.add(this);
  }

}