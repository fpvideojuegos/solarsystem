class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2");
    }

    create() {

        ///// ASSETS //////
        this.Background = this.add.tileSprite(0, 0, config.width, config.height, "Back").setOrigin(0, 0);
        //Music
        this.music = this.sound.add("MusMenu");
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
        //Group of Ship1
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

        //Controles Player 1
        //this.cursorKeys = this.input.keyboard.createCursorKeys();
        //this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); //Disparar
        this.player.updateScore(this, 0);
        this.player.updateLives(this, 0);
        if (this.registry.get("MultiPlay")) {
            this.friend.updateScore(this, 0);
            this.friend.updateLives(this, 0);
        }

        ////// INTERACTIONS //////
        //Shoot enemies
        this.physics.add.overlap(this.shoots, this.enemies, this.hitEnemy, null, this);

    }  //Fin del Create

    update() {
        this.Background.tilePositionY -= 0.3;
        this.player.movePlayerManagerCursorKeys();

        //Enemies movement
        this.enemies.getChildren().forEach(function (enemy) {
            enemy.moveEnemy();
        }, this);

        if (this.enemies.getLength() == 0) {
            this.enemyFactory(this.NumEne);
            this.NumEne += 2;
        };

        this.shoots.getChildren().forEach(function (shoot) {
            shoot.deleteShoot();
        }, this);


        //Jugador 1 dispara
        //Phaser.Input.Keyboard.JustDown(this.spacebar)
        if (this.player.spacebar.isDown) {
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
            this.enemy = new Enemy({
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



}