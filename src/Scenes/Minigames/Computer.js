// GGJ 2022
// Computer.jscc
// Mini Game Computer
import Phaser from 'phaser';

// import items from './items.json';


class Computer extends Phaser.Scene {
    constructor() {
        super({ key: 'Computer' });
    }

    preload() {
        this.load.image('bg_computer', 'assets/img/Computerscreen.png');
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.bg = this.add.rectangle(width / 2, height / 2, width - 320, height - 100, 0);
        this.bg.setOrigin(0.5, 0.5);
        this.bg_image = this.add.image(this.bg.getTopLeft().x, this.bg.getTopLeft().y, 'bg_computer');
        this.bg_image.setOrigin(0, 0);
        this.bg_image.setScale(0.9);
        this.text_welcome = this.add.text(500, 247, 'Anmelden', { fill: 'black', fontFamily: 'GameFont', fontSize: '25px' });
        this.text_input = this.add.text(500, 450, 'Sicherheitscode: ', { fill: 'black', fontFamily: 'GameFont', fontSize: '30px' });
        this.text_code = this.add.text(800, 450, '', { fill: 'black', fontFamily: 'GameFont', fontSize: '35px' });
        this.text_hint = this.add.text(500, 550, '', { fill: 'black', fontFamily: 'GameFont', fontSize: '35px' });
        this.text_hint.setVisible(false);
        this.text_codeCorrectIncorrect = this.add.text(500, 650, '', { fill: '#126782', fontFamily: 'GameFont', fontSize: '35px' });
        this.text_codeCorrectIncorrect.setVisible(false);

        this.code = '';


        this.key_ESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.key_1_isPressed = false;
        this.key_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        this.key_2_isPressed = false;
        this.key_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        this.key_3_isPressed = false;
        this.key_4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        this.key_4_isPressed = false;
        this.key_5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        this.key_5_isPressed = false;
        this.key_6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        this.key_6_isPressed = false;
        this.key_7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        this.key_7_isPressed = false;
        this.key_8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        this.key_8_isPressed = false;
        this.key_9 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
        this.key_9_isPressed = false;
        this.key_0 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
        this.key_0_isPressed = false;
        this.key_ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.key_BACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
        this.key_BACKSPACE_isPressed = false;
        this.keyIsPressed = false;
    }

    update(time, delta) {
        if(this.key_1.isDown && this.key_1_isPressed === false && this.code.length < 8) {
            this.key_1_isPressed = true;
            this.code += '1   ';
        } else if(this.key_1.isUp && this.key_1_isPressed === true) {
            this.key_1_isPressed = false;
        } else if(this.key_2.isDown && this.key_2_isPressed === false && this.code.length < 8) {
            this.key_2_isPressed = true;
            this.code += '2   ';
        } else if(this.key_2.isUp && this.key_2_isPressed === true) {
            this.key_2_isPressed = false;
        } else if(this.key_3.isDown && this.key_3_isPressed === false && this.code.length < 8) {
            this.key_3_isPressed = true;
            this.code += '3   ';
        } else if(this.key_3.isUp && this.key_3_isPressed === true) {
            this.key_3_isPressed = false;
        } else if(this.key_4.isDown && this.key_4_isPressed === false && this.code.length < 8) {
            this.key_4_isPressed = true;
            this.code += '4   ';
        } else if(this.key_4.isUp && this.key_4_isPressed === true) {
            this.key_4_isPressed = false;
        } else if(this.key_5.isDown && this.key_5_isPressed === false && this.code.length < 8) {
            this.key_5_isPressed = true;
            this.code += '5   ';
        } else if(this.key_5.isUp && this.key_5_isPressed === true) {
            this.key_5_isPressed = false;
        } else if(this.key_6.isDown && this.key_6_isPressed === false && this.code.length < 8) {
            this.key_6_isPressed = true;
            this.code += '6   ';
        } else if(this.key_6.isUp && this.key_6_isPressed === true) {
            this.key_6_isPressed = false;
        } else if(this.key_7.isDown && this.key_7_isPressed === false && this.code.length < 8) {
            this.key_7_isPressed = true;
            this.code += '7   ';
        } else if(this.key_7.isUp && this.key_7_isPressed === true) {
            this.key_7_isPressed = false;
        } else if(this.key_8.isDown && this.key_8_isPressed === false && this.code.length < 8) {
            this.key_8_isPressed = true;
            this.code += '8   ';
        } else if(this.key_8.isUp && this.key_8_isPressed === true) {
            this.key_8_isPressed = false;
        } else if(this.key_9.isDown && this.key_9_isPressed === false && this.code.length < 8) {
            this.key_9_isPressed = true;
            this.code += '9   ';
        } else if(this.key_9.isUp && this.key_9_isPressed === true) {
            this.key_9_isPressed = false;
        } else if(this.key_0.isDown && this.key_0_isPressed === false && this.code.length < 8) {
            this.key_0_isPressed = true;
            this.code += '0   ';
        } else if(this.key_0.isUp && this.key_0_isPressed === true) {
            this.key_0_isPressed = false;
        } else if(this.key_BACKSPACE.isDown && this.key_BACKSPACE_isPressed === false) {
            this.key_BACKSPACE_isPressed = true;
            this.code = this.code.slice(0, -4);
        } else if(this.key_BACKSPACE.isUp && this.key_BACKSPACE_isPressed === true) {
            this.key_BACKSPACE_isPressed = false;
        }

        this.text_code.setText(this.code);

        if(this.code.length === 0) {
            this.text_hint.setVisible(false);
        }

        if(this.code.length === 4) {
            if(this.code === '6   ') {
                this.text_hint.setText('( 9 + 3 * 5 ) : 6 - 2');
            }
            if(this.code !== '6   ') {
                this.text_hint.setText('( 9 + 3 * 5 ) : 6 - 4');
            }
            this.text_hint.setVisible(true);
        }

        if(this.code.length === 8) {
            this.text_codeCorrectIncorrect.setVisible(true);
            if(this.code === '6   2   ') {
                this.text_codeCorrectIncorrect.setStyle({ fill: '#126782' });
                this.text_codeCorrectIncorrect.setText('Sicherheitscode korrekt!');
                localStorage.setItem('computerStatus', 'DONE');
            }
            if(this.code !== '6   2   ') {
                this.text_codeCorrectIncorrect.setStyle({ fill: '#653b47' });
                this.text_codeCorrectIncorrect.setText('Sicherheitscode nicht korrekt!');
                this.code = '';
                this.time.addEvent({
                    delay: 1500,
                    callback: () => { this.text_codeCorrectIncorrect.setVisible(false) },
                    callbackScope: this,
                    loop: false
                });
                localStorage.setItem('computerStatus', 'FAIL');
            }
        }

        if(this.key_ESC.isDown) {
            this.scene.setVisible(false);
        }
    }
}


export default Computer;