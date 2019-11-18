//Class Shoot
class Shoot extends Phaser.GameObjects.Sprite{
    constructor(level, trigger){

        var x = trigger.x;
        var y = trigger.y;
    
        super(level, x, y, "shoot");

    //add to scene
    scene.add.existing(this);


    }
  
  }