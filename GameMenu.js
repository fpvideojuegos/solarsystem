class GameMenu extends Phaser.Scene {
    constructor() {
      super("Menu");     
    }

    create(){        
    
        this.button1 = this.add.text(70, 330, "1 Player"); 
        this.button1.setFont("Fuente");
        this.button2 = this.add.text(290, 330, "2 Player" , 35); 
        this.buttonSG = this.add.text(100, 200, "EMPEZAR PARTIDA!!" , 50); 
        
        this.button1.setTint(0xfe6234);
        this.button2.setTint(0xfe6234);
        this.buttonSG.setTint(0xff0000);

        this.buttonSG.setInteractive().on('pointerdown', () => { 
          this.scene.start("Level1");
          console.log("ILLYAAA");
      });
        this.button1.setInteractive().on('pointerdown', () => { 
          this.button1.setTint(0xfebe34);  
          this.button2.setTint(0xfe6234);
        this.registry.set("players");
        
        console.log("KUMIKO");
      }); 
      this.button2.setInteractive().on('pointerdown', () => { 
        this.button1.setTint(0xfe6234);  
        this.button2.setTint(0xfebe34);
      console.log("AGREAAAA 22");
      this.registry.set("friend"); // se pueden guardar objetos en el 2
    }); 
      // this.input.on("pointerdown",() => this.scene.start("playGame"));
    }
}