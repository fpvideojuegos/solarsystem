class Arrow extends Enemy {
    constructor(config) {
        super(config);

        this.position = config.posi;
        console.log(this.position)

        //Animation
        this.play("AnimJetZ");
    }

    arrowShoot(){
        this.enemy = new Bullet(config.scene, this);
    }

    //Movimiento de la nave
    moveEnemy() {

        if (this.y > 100) {
            this.y += this.speed/5;

        } else {
            this.y += this.speed;
        }
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

    //Resetear posicion de la nave
    resetEnemy() {
        this.y = 0;
        if (this.position == 1) {
            this.x = 75;
        } else {
            this.x = config.width - 90;
        }
    }
} 