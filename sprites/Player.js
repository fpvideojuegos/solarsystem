class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    ///////////  PARAMETROS  ///////////        
    //Nombre
    this.key = config.key;
    //Velocidad
    this.speed = 1;
    //Vidas
    this.lives = 3;

    //Configuración
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);
    this.body.setCollideWorldBounds(true);

    //Animación
    this.play("playerR");
  }

  
  //Manejador de movimiento
  movePlayerManager() {
    this.body.setVelocity(0);

    //Movimiento Player 1
    if (this.scene.cursorKeys.left.isDown) {                //Izquierda
      this.body.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.scene.cursorKeys.right.isDown) {        //Derecha
      this.body.setVelocityX(gameSettings.playerSpeed);
    }
    if (this.scene.cursorKeys.up.isDown) {                  //Arriba
      this.body.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.scene.cursorKeys.down.isDown) {         //Abajo
      this.body.setVelocityY(gameSettings.playerSpeed);
    }
  }  //Fin del manejador de movimiento


}  //Fin de la clase





