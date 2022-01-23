// GGJ 2022
// Main.js
// Main Menu
import Phaser from 'phaser';
import Licenses from '../Minigames/Licenses';
import Settings from '../Minigames/Setting';


class Menu extends Phaser.Scene {
    constructor() {
        super({ key: 'Menu' });
    }

    preload() {
        this.load.image('bg_startscreen', 'assets/img/startscreen.png');
        this.load.audio('bg_music', ['assets/audio/Scanglobe_Trench.mp3', 'assets/audio/Scanglobe_Trench.ogg']);
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.music = this.sound.add('bg_music');
        this.music.play();

        this.bg = this.add.sprite(0, 0, 'bg_startscreen');
        this.bg.setOrigin(0, 0);

        this.button_start = this.add.text(730, 500, "Spiel starten", { fontSize: "40px", fontFamily: 'GameFont' });
        this.button_startArea = this.add.rectangle(650, 450, 630, 150, 210, 0);
        this.button_startArea.setOrigin(0, 0);
        this.button_startArea.setInteractive();
        this.button_startArea.on('pointerdown', this.onClick_start, this);

        this.button_manual = this.add.text(730, 660, "Anleitung anzeigen", { fontSize: "40px", fontFamily: 'GameFont' });
        this.button_manualArea = this.add.rectangle(650, 610, 630, 150, 210, 0);
        this.button_manualArea.setOrigin(0, 0);
        this.button_manualArea.setInteractive();
        this.button_manualArea.on('pointerdown', this.onClick_manual, this);

        this.button_settings = this.add.text(730, 930, "Einstellungen", { fontSize: "40px", fontFamily: 'GameFont' });
        this.button_settingsArea = this.add.rectangle(650, 860, 630, 150, 210, 0);
        this.button_settingsArea.setOrigin(0, 0);
        this.button_settingsArea.setInteractive();
        this.button_settingsArea.on('pointerdown', this.onClick_settings, this);

        this.button_licenses = this.add.text(1600, 980, "Lizenzen", { fontSize: "30px", fontFamily: 'GameFont' });
        this.button_licensesArea = this.add.rectangle(1580, 960, 200, 70, 210, 0);
        this.button_licensesArea.setOrigin(0, 0);
        this.button_licensesArea.setInteractive();
        this.button_licensesArea.on('pointerdown', this.onClick_licenses, this);
    }


    onClick_start() {
        this.scene.start("Room1");
    }

    onClick_manual() {
        window.location.href = 'http://www.crazywhale.de/manual';
    }

    onClick_settings() {
        if(this.scene.get('Settings') === null) {
            this.scene.add('Settings', Settings, true);
        } else {
            this.scene.get('Settings').scene.setVisible(true);
        }
    }

    onClick_licenses() {
        if(this.scene.get('Licenses') === null) {
            this.scene.add('Licenses', Licenses, true);
        } else {
            this.scene.get('Licenses').scene.setVisible(true);
        }
    }
}


export default Menu;