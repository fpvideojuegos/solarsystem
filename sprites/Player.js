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

    //Animación especifica P1/P2
    if (config.key == "player") {
      this.play("player");
    } else {
      this.play("friend");
      this.setSize(16, 24);
    }


  }

  ///////////  FUNCIONES  ///////////        
  //Actualiza la puntuación
  updateScore(scene, pts){
    this.score = this.score + pts;
    scene.events.emit("scoreChange", this);
  }
  //Actualiza las vidas
  updateLives(scene, hp){
    this.lives = this.lives + (hp);
    scene.events.emit("livesChange", this);
  }

  //Transparencia e inmunidad
  hitted(scene, enemy) {
    if (this.alpha == 1) {
      enemy.resetShipPos();
      if (this.alpha < 1) {
        return;
      }
      this.alpha = 0.4;
      var explosion = new Explosion(scene, this.x, this.y);
      this.disableBody(true, true);

      scene.time.addEvent({
        delay: 1000,
        callback: () => {
          this.reset(scene);
        },
        callbackScope: this,
        loop: false
      });

      this.updateLives(scene, -1)
    }
  }

  //Animacion de aparición
  reset(scene){
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

  //Manejador de movimiento
  movePlayerManager() {
    this.body.setVelocity(0);

    if (this.key == "player") {                             //Movimiento Player 1
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
    } else {                                                //Movimiento Player 2
      if (this.scene.akey.isDown) {                           //Izquierda
        this.body.setVelocityX(-gameSettings.playerSpeed);
      } else if (this.scene.dkey.isDown) {                    //Derecha
        this.body.setVelocityX(gameSettings.playerSpeed);
      }
      if (this.scene.wkey.isDown) {                           //Arriba
        this.body.setVelocityY(-gameSettings.playerSpeed);
      } else if (this.scene.skey.isDown) {                    //Abajo
        this.body.setVelocityY(gameSettings.playerSpeed);
      }
    }
  }  //Fin del manejador de movimiento
}  //Fin de la clase





