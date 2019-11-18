class Enemy extends Phaser.GameObjects.Sprite {
  constructor(config) {
    
    super(config.scene, config.x, config.y, config.key, config.anim);

    this.key = config.key;
    
    config.scene.physics.world.enable(this);
    
    config.scene.add.existing(this);
    
    this.play(config.anim);

    this.setInteractive();

    config.scene.ships.add(this);
  }

  moveEnemy(speed) {

    this.y += speed;
    
    if (this.y > config.height) {
     
      this.resetShipPos(this);
    
    }

  }

  resetEnemyPos() {
    
    this.y = 0;
    
    var randomX = Phaser.Math.Between(0, config.width);
    
    this.x = randomX;
  }

}