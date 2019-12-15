class test3 extends Phaser.Scene {
    constructor() {
        super("Test3");
    }

    create() {

        ///// ASSETS //////
        //Background
        this.Background = this.add.tileSprite(0, 0, config.width, config.height, "bgMercury").setOrigin(0, 0);
        //Music
        this.music = this.sound.add("MusLevel2");
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);


        ///// GROUPS //////
        //Group of Ship1
        this.enemies = this.add.group();
        //Group of Players
        this.players = this.add.group();
        //Group of Shoots
        this.shoots = this.add.group();

        ////// PLAYER //////
        //Creation
        this.player = new Player({
            scene: this,
            x: config.width / 2 - 50,
            y: config.height / 2,
            key: "player",
            anim: "playerR"
        });
        //Management
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //Score
        this.player.updateScore(this, 0);
        //Lives
        this.player.updateLives(this, 0);

        ////// INTERACTIONS //////
        //Shoot enemies
        this.physics.add.overlap(this.shoots, this.enemies, this.hitEnemy, null, this);


        this.enemyZigzag(1);

    }  //Fin del Create

    update() {

        //Background movement
        this.Background.tilePositionY -= 0.3;

        this.player.movePlayerManagerCursorKeys();

        //Enemies movement
        this.enemies.getChildren().forEach(function (enemy) {
            enemy.moveEnemy();
        }, this);

        this.shoots.getChildren().forEach(function (shoot) {
            shoot.deleteShoot();
        }, this);


        //Jugador 1 dispara
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.Player_Shoot(this.player);
        }
        enemy.arrowShoot();

    }  //Fin del Update

    
    //Crea un disparo en la posición del jugador
    Player_Shoot(player) {
        //Shoot
        this.shoot = new Shoot(this, player);
    }

    enemyZigzag(num) {
        for (var i = 0; i < num; i++) {
            this.time.addEvent({
                delay: 500*i,
                callback: () => {
                    this.createJet(1);
                    this.createJet(0);
                },
                callbackScope: this,
                loop: false
            });
        }
    }

    createJet(val) {
        this.enemy = new Arrow({
            scene: this,
            x: config.width / 2 - 50,
            y: config.height,
            key: "Enemy",
            anim: "Enemy",
            value: 50,
            speed: 2,
            posi: val
        });
    }

    hitEnemy(shoot, enemy) {
        localStorage.setItem('pts', parseInt(localStorage.getItem("pts")) + enemy.value);
        shoot.destroy();
        enemy.destroy();
        console.log(localStorage.getItem("pts"));
    }

}