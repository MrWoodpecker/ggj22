// GGJ 2022
// Settings.js
// Settings Pop Over
import Phaser from 'phaser';



class Settings extends Phaser.Scene {
    constructor() {
        super({ key: 'Settings' });
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

        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 50, 'Einstellungen', { fontFamily: 'GameFont', fontSize: '50px' });

        this.add.text(this.bg.getTopLeft().x + 70, this.bg.getTopLeft().y + 150, 'Musik', { fontFamily: 'GameFont', fontSize: '30px' });
        this.setting_music = this.add.text(this.bg.getTopLeft().x + 270, this.bg.getTopLeft().y + 150, 'an', { fontFamily: 'GameFont', fontSize: '30px' });
        this.setting_music.setInteractive();
        this.setting_music.on('pointerdown', this.onClick_music, this);
    }

    onClick_music() {
        if(this.setting_music.text === 'an') {
            this.setting_music.setText('aus');
            this.sound.pauseAll();
        } else {
            this.setting_music.setText('an');
            this.sound.play('bg_music');
        }
    }

    onClick_close() {
        this.scene.setVisible(false);
    }
}


export default Settings;