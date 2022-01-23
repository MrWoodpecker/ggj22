// GGJ 2022
// Licenses.js
// Licenses Pop Over
import Phaser from 'phaser';



class Licenses extends Phaser.Scene {
    constructor() {
        super({ key: 'Licenses' });
    }

    preload() {

    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.bg = this.add.rectangle(width / 2, height / 2, 600, 600, 20);
        this.bg.setOrigin(0.5, 0.5);

        this.closeButton = this.add.text(this.bg.getTopLeft().x, this.bg.getTopLeft().y, "X", { fill: 'white', backgroundColor: 'red', padding: 8, fontSize: 30 });
        this.closeButton.setInteractive();
        this.closeButton.on('pointerdown', this.onClick_close, this);

        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 50, 'Lizenzen', { fontFamily: 'GameFont', fontSize: '50px' });

        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 150, 'Font', { fontFamily: 'GameFont', fontSize: '30px' });
        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 190, 'Minecraft by Crafton Gaming', { fontFamily: 'GameFont', fontSize: '30px' });
        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 220, 'available at www.dafont.com', { fontFamily: 'GameFont', fontSize: '20px' });

        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 300, 'Music', { fontFamily: 'GameFont', fontSize: '30px' });
        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 340, 'Trench by Scanglobe', { fontFamily: 'GameFont', fontSize: '30px' });
        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 370, 'available at www.freemusicarchive.org', { fontFamily: 'GameFont', fontSize: '20px' });
        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 400, 'CC BY-NC-SA 4.0', { fontFamily: 'GameFont', fontSize: '20px' });
    }

    onClick_close() {
        this.scene.setVisible(false);
    }
}


export default Licenses;