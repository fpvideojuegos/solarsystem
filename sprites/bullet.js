class Bullet extends Enemy {
    constructor(config) {
        super(config);

        //Animation
        this.play(config.anim);
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
        this.destroy();

    }
} 