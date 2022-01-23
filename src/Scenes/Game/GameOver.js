// GGJ 2022
// GameOver.js
// Game Over
import Phaser from 'phaser';

import Button from '../../Components/Core/Button';


class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver' });
    }

    preload() {
        console.log('GAME OVER');
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.add.text(width / 2, height / 2, 'Zeit abgelaufen', { fill: 'white', fontFamily: 'GameFont', fontSize: '100px' }).setOrigin(0.5, 0.5);
        
        this.buttons = {
            restart: new Button({ scene: this, x: width / 2, y: (height / 2) + 150 }, 'Spiel erneut starten', true),
            menu: new Button({ scene: this, x: width / 2, y: (height / 2) + 220 }, 'Zurueck zum Menue'),
        };
        this.activeButton = 'restart';

        this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_UP_isPressed = false;
        this.key_DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_DOWN_isPressed = false;
        this.key_ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.key_ENTER_isPressed = false;
    }

    update(time, delta) {
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
            if(this.buttons.restart.getActive()){
                this.scene.start("Room1");
            }
            if(this.buttons.menu.getActive()){
                this.scene.start("Menu");
            }
            this.key_ENTER_isPressed = true;
        } else if(this.key_ENTER.isUp && this.key_ENTER_isPressed === true) {
            this.key_ENTER_isPressed = false;
        }
    }

    setActiveButton(direction) {
        if(direction === 'DOWN') {
            if(this.activeButton === 'restart') {
                this.buttons.restart.toggleActive();
                this.buttons.menu.toggleActive();
                this.activeButton = 'menu';
            } else if(this.activeButton === 'menu') {
                this.buttons.menu.toggleActive();
                this.buttons.restart.toggleActive();
                this.activeButton = 'restart';
            }
        } else if(direction === 'UP') {
            if(this.activeButton === 'restart') {
                this.buttons.restart.toggleActive();
                this.buttons.menu.toggleActive();
                this.activeButton = 'menu';
            } else if(this.activeButton === 'menu') {
                this.buttons.menu.toggleActive();
                this.buttons.restart.toggleActive();
                this.activeButton = 'restart';
            }
        }
    }
}


export default GameOver;