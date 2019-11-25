//Class Shoot
class Shoot extends Phaser.GameObjects.Sprite {
    constructor(scene, player) {

        console.log("Shoot")

        var x = player.x;
        var y = player.y - 16;

        super(scene, x, y, "Shoot");

        // 3.2 add to scene
        scene.add.existing(this);

        // 3.3
        this.play("Shoot");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 250;


        // 4.2 add the beam to the projectiles group
        scene.shoots.add(this);

    }


    update() {

        // 3.4 Frustum culling
        if (this.y < 32) {
            this.destroy();
        }
    }

}