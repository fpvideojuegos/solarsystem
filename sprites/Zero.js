class Zero extends Enemy {
    constructor(config) {
        super(config);

        //Animation
        this.play("Enemy");
    }

    moveEnemy() {
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
        this.y = -25;
        var randomX = Phaser.Math.Between(0, config.width);
        this.x = randomX;
    }
} 