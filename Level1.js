class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
    }

    create() {

        ///// ASSETS //////

        //Background
        this.Background = this.add.tileSprite(0, 0, config.width, config.height, "bgMercury").setOrigin(0, 0);

        ///////////  AUDIO  ///////////
        //Sounds
        this.SndShoot = this.sound.add("SndShoot");
        this.SndExplosion = this.sound.add("SndExplosion");
        this.pickupSound = this.sound.add("SndPowerup");

        //Music
        this.music = this.sound.add("MusLevel1");

        //Music Configuration
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        //Sound Configuration
        this.soundConfig = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }

        //Plays Level1 theme
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
        //hit player
        this.physics.add.overlap(this.players, this.enemies, this.hitted, null, this);

        this.phase1(11);

    }  //Fin del Create

    update() {
        //Background movement
        this.Background.tilePositionY -= 0.3;
        this.player.movePlayerManagerCursorKeys();

        //Enemies movement
        this.enemies.getChildren().forEach(function (enemy) {
            enemy.moveEnemy();
        }, this);

        if (localStorage.getItem("pts") > 500 && this.enemies.getLength() == 0) {
            console.log("hi")
            this.phase2(10);
        }

        this.shoots.getChildren().forEach(function (shoot) {
            shoot.deleteShoot();
        }, this);


        //Jugador 1 dispara
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.Player_Shoot(this.player);
        }

    }  //Fin del Update

    //Crea un disparo en la posición del jugador
    Player_Shoot(player) {
        //Shoot
        this.shoot = new Shoot(this, player);
        //Shoot sound
        this.SndShoot.play(this.soundConfig);
    }

    phase1(num) {
        for (var i = 0; i < num; i++) {
            this.enemy = new Zero({
                scene: this,
                x: config.width / 2 - 50,
                y: config.height,
                key: "Enemy",
                value: 50,
                speed: (Math.random() * 2) + 1
            });
        }
    }

    phase2(num) {

        for (var i = 0; i < num; i++) {
            this.enemy = new JetZ({
                scene: this,
                x: config.width / 2 - 50,
                y: config.height,
                key: "Enemy",
                value: 50,
                speed: (Math.random() * 2) + 1,
                position: 1
            });
            this.enemy = new JetZ({
                scene: this,
                x: config.width / 2 - 50,
                y: config.height,
                key: "Enemy",
                value: 50,
                speed: (Math.random() * 2) + 1,
                position: 0
            });
        }
    }

    hitted(player, enemy) {
        this.SndExplosion.play(this.soundConfig);

        player.hitted(this, enemy);
    }

    hitEnemy(shoot, enemy) {
        localStorage.setItem('pts', parseInt(localStorage.getItem("pts")) + enemy.value);
        shoot.destroy();
        enemy.destroy();
        console.log(localStorage.getItem("pts"));

        //Destroy Enemy sound
        this.SndExplosion.play(this.soundConfig);
    }

}