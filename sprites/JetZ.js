<<<<<<< HEAD
class JetZ extends Enemy {
    constructor(config) {
        super(config);

        this.position = config.posi;

        //Animation
        this.play("AnimJetZLeft");
    }

    //Movimiento de la nave
    moveEnemy() {
        this.y += this.speed;

        if(parseInt(this.y/50) % 2 == 0){
            this.play("AnimJetZLeft");
            this.x += this.speed;
        }else{
            this.play("AnimJetZRight");
            this.x -= this.speed;
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
        this.y = -30;
        if(this.position == 1){
            this.x = 75;
        }else{
            this.x = config.width-175;
        }
    }
=======
class JetZ extends Enemy {
    constructor(config) {
        super(config);

        this.position = config.posi;

        //Animation
        this.play("AnimJetZLeft");
    }

    //Movimiento de la nave
    moveEnemy() {
        this.y += this.speed;

        if(parseInt(this.y/50) % 2 == 0){
            this.play("AnimJetZLeft");
            this.x += this.speed;
        }else{
            this.play("AnimJetZRight");
            this.x -= this.speed;
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
        this.y = -30;
        if(this.position == 1){
            this.x = 75;
        }else{
            this.x = config.width-175;
        }
    }
>>>>>>> Antonio
} 