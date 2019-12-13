class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2");
    }

    create() {

        ///// ASSETS //////
        this.Background = this.add.tileSprite(0, 0, config.width, config.height, "bgSaturn").setOrigin(0, 0).setScale(4);
        //Music
        this.music = this.sound.add("MusLevel2");
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.music.play(musicConfig);

        ///// PARAMS /////
        localStorage.setItem('pts', 0);

        ///// GROUPS //////
        //Group of Enemies
        this.enemies = this.add.group();
        //Group of Players
        this.players = this.add.group();
        //Group of Shoots
        this.shoots = this.add.group();

        this.NumEne = 20;
        this.enemyFactory(this.NumEne);


        ////// PLAYER1 //////
        this.player = new Player({
            scene: this,
            x: config.width / 2 - 50,
            y: config.height / 2,
            key: "player",
            anim: "playerR"
        });

        //Normal shoot
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.player.updateScore(this, 0);
        this.player.updateLives(this, 0);
        if (this.registry.get("MultiPlay")) {
            this.friend.updateScore(this, 0);
            this.friend.updateLives(this, 0);
        }

        ////// INTERACTIONS //////
        //Shoot enemies
        this.physics.add.overlap(this.shoots, this.enemies, this.hitEnemy, null, this);
        //Shoot Boss
        this.physics.add.overlap(this.shoots, this.boss, this.hitBoss, null, this);

    }  //Fin del Create

    update() {

        this.Background.tilePositionY -= 0.3;
        this.player.movePlayerManagerCursorKeys();

        if (!this.boss) {
            this.finalBoss();

            //Enemies movement
            this.enemies.getChildren().forEach(function (enemy) {
                enemy.moveEnemy();
            }, this);

            this.shoots.getChildren().forEach(function (shoot) {
                shoot.deleteShoot();
            }, this);

        } else {
            this.boss.moveBoss();
        }

        //Normal shoot
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.Player_Shoot(this.player);
        }

    }  //Fin del Update

    //Crea un disparo en la posición del jugador
    Player_Shoot(player) {
        //Shoot
        this.shoot = new Shoot(this, player);
    }

    enemyFactory(num) {
        for (var i = 0; i < num; i++) {
            this.enemy = new Zero({
                scene: this,
                x: config.width / 2 - 50,
                y: config.height,
                key: "Enemy",
                anim: "Enemy",
                value: 50,
                speed: (Math.random() * 2) + 1
            });
        }
    }

    hitEnemy(shoot, enemy) {
        localStorage.setItem('pts', parseInt(localStorage.getItem("pts")) + enemy.value);
        shoot.destroy();
        enemy.destroy();
        console.log(localStorage.getItem("pts"));
        this.player.updateScore(this, parseInt(localStorage.getItem("pts")));
    }

    hitBoss(shoot, boss) {
        localStorage.setItem('pts', parseInt(localStorage.getItem("pts")) + boss.value);
        shoot.destroy();
        boss.destroy();
        console.log(localStorage.getItem("pts"));
        this.player.updateScore(this, parseInt(localStorage.getItem("pts")));
    }

    finalBoss() {
        console.log("Puntos de player: " + parseInt(localStorage.getItem("pts")));

        if (parseInt(localStorage.getItem("pts")) > 500) {

            console.log("Boss entry");

            this.enemies.clear(true); // Remove all Children.

            this.boss = new Boss({
                scene: this,
                x: config.width / 2 - 50,
                y: config.height - 350,
                key: "Boss",
                anim: "Boss",
                value: 1000,
                speed: (Math.random() * 2) + 1
            });

        }
    }

}