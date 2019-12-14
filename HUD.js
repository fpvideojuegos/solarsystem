class HUD extends Phaser.Scene {
    constructor() {
        super({
            key: 'HUD'
        });
    }

    create() {

        
        ///////////  BACKGROUND  ///////////
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xdddddd);
        this.graphics.beginPath();
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(config.width, 0);
        this.graphics.lineTo(config.width, 20);
        this.graphics.lineTo(0, 20);
        this.graphics.lineTo(0, 0);
        this.graphics.closePath();
        this.graphics.fillPath();

        ///////////  TEXTOS  ///////////
        //Puntuaciones
        this.score1 = this.add.bitmapText(170, 4, "pixelFont", "AAAA", 20);

        //Nombres
        this.p1 = this.add.bitmapText(75, 4, "pixelFont", "PLAYER 1", 16);

        //Vidas
        this.live1 = this.add.bitmapText(5, 4, "pixelFont", "", 16);

        ///////////  EVENTOS  ///////////
        const le = this.scene.get('Level2');
        le.events.on("scoreChange", this.updateScore, this);
        le.events.on("livesChange", this.updateLives, this);
        le.events.on("gameOver", this.gameOver, this);
        console.log("PSVITa");
    }

    ///////////  FUNCIONES  ///////////
    //Actualiza la puntuacion
    updateScore(player) {
        var sc = this.zeroPad(player.score, 6);
        if (player.key == "player") {
            this.score1.setText(`SCORE ${sc}`);
        } else {
            this.score2.setText(`SCORE ${sc}`);
        }
    }
    //Formatea la puntuación
    zeroPad(number, size) {
        var stringNumber = String(number);
        while (stringNumber.length < (size || 2)) {
            stringNumber = "0" + stringNumber;
        }
        return stringNumber;
    }

    //Actualiza las vidas
    updateLives(player) {
        if (player.key == "player") {
            this.live1.setText(`LIVES ${player.lives}`);
        } else {
            this.live2.setText(`LIVES ${player.lives}`);
        }
    }

    //Destruye el HUD
    gameOver() {
        this.graphics.destroy();
        this.score1.destroy();
        this.p1.destroy();
        this.live1.destroy();

        if (this.registry.get("MultiPlay")) {
            this.score2.destroy();
            this.p2.destroy();
            this.live2.destroy();
        }
    }
}