// GGJ 2022
// Main.js
// Main Menu
import Phaser from 'phaser';
import Button from '../../Components/Core/Button';
import Licenses from '../Minigames/Licenses';
import Settings from '../Minigames/Setting';


class Menu extends Phaser.Scene {
    constructor() {
        super({ key: 'Menu' });
    }

    preload() {
        this.load.audio('bg_music', ['assets/audio/Scanglobe_Trench.mp3', 'assets/audio/Scanglobe_Trench.ogg']);
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.music = this.sound.add('bg_music');
        this.music.play();

        this.add.text(width / 2, height / 3, 'Stressed Out', { fill: 'white', fontFamily: 'GameFont', fontSize: '100px' }).setOrigin(0.5, 0.5);

        this.buttons = {
            start: new Button({ scene: this, x: width / 2, y: height / 2 }, 'Spiel starten', true),
            manual: new Button({ scene: this, x: width / 2, y: (height / 2) + 70 }, 'Anleitung anzeigen'),
            settings: new Button({ scene: this, x: width / 2, y: (height / 2) + 140 }, 'Einstellungen'),
            licenses: new Button({ scene: this, x: width / 2, y: (height / 2) + 210 }, 'Lizenzen'),
        };
        this.activeButton = 'start';

        this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_UP_isPressed = false;
        this.key_DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_DOWN_isPressed = false;
        this.key_ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.key_ENTER_isPressed = false;
    }

    update() {
        if(this.key_UP.isDown && this.key_UP_isPressed === false) {
            this.key_UP_isPressed = true;
            this.setActiveButton('UP');
        } else if(this.key_DOWN.isDown && this.key_DOWN_isPressed === false) {
            this.key_DOWN_isPressed = true;
            this.setActiveButton('DOWN');
        } else if(this.key_UP.isUp && this.key_UP_isPressed === true) {
            this.key_UP_isPressed = false;
        } else if(this.key_DOWN.isUp && this.key_DOWN_isPressed === true) {
            this.key_DOWN_isPressed = false;
        } else if(this.key_ENTER.isDown && this.key_ENTER_isPressed === false) {
            if(this.buttons.start.getActive()){
                this.scene.start("Room1");
            }
            if(this.buttons.manual.getActive()){
                window.location.href = 'http://localhost:8080/manual'
            }
            if(this.buttons.settings.getActive()){
                if(this.scene.get('Settings') === null) {
                    this.scene.add('Settings', Settings, true);
                } else {
                    this.scene.get('Settings').scene.setVisible(true);
                }
            }
            if(this.buttons.licenses.getActive()) {
                if(this.scene.get('Licenses') === null) {
                    this.scene.add('Licenses', Licenses, true);
                } else {
                    this.scene.get('Licenses').scene.setVisible(true);
                }
            }
            this.key_ENTER_isPressed = true;
        } else if(this.key_ENTER.isUp && this.key_ENTER_isPressed === true) {
            this.key_ENTER_isPressed = false;
        }
    }

    setActiveButton(direction) {
        if(direction === 'DOWN') {
            if(this.activeButton === 'start') {
                this.buttons.start.toggleActive();
                this.buttons.manual.toggleActive();
                this.activeButton = 'manual';
            } else if(this.activeButton === 'manual') {
                this.buttons.manual.toggleActive();
                this.buttons.settings.toggleActive();
                this.activeButton = 'settings';
            } else if(this.activeButton === 'settings') {
                this.buttons.licenses.toggleActive();
                this.buttons.settings.toggleActive();
                this.activeButton = 'licenses';
            } else if(this.activeButton === 'licenses') {
                this.buttons.start.toggleActive();
                this.buttons.licenses.toggleActive();
                this.activeButton = 'start';
            }
        } else if(direction === 'UP') {
            if(this.activeButton === 'start') {
                this.buttons.start.toggleActive();
                this.buttons.licenses.toggleActive();
                this.activeButton = 'licenses';
            } else if(this.activeButton === 'manual') {
                this.buttons.manual.toggleActive();
                this.buttons.start.toggleActive();
                this.activeButton = 'start';
            } else if(this.activeButton === 'settings') {
                this.buttons.settings.toggleActive();
                this.buttons.manual.toggleActive();
                this.activeButton = 'manual';
            } else if(this.activeButton === 'licenses') {
                this.buttons.settings.toggleActive();
                this.buttons.licenses.toggleActive();
                this.activeButton = 'settings';
            }
        }
    }
}


export default Menu;