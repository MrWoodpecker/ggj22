// GGJ 2022
// Button.js
// Text Button
import Phaser from 'phaser';


const active_backgroundColor = '#8ecae6';
const inactive_backgroundColor = 'black';
const active_textColor = 'black';
const inactive_textColor = 'white';
const style = {
    fill: inactive_textColor,
    fontFamily: 'GameFont',
    fontSize: '25px',
    backgroundColor: inactive_backgroundColor,
    padding: 8
};


class Button extends Phaser.GameObjects.Text {
    constructor(config, text, active) {
        super(config.scene, config.x, config.y, text, style);
        config.scene.add.existing(this);

        this.setOrigin(0.5, 0.5);
        this.active = !!active;
        if(this.active) {
            this.setStyle({ backgroundColor: active_backgroundColor, fill: active_textColor });
        }
    }

    // >>> Getter
    getActive() {
        return this.active;
    }

    // >>> Setter

    // >>> Utilities
    toggleActive() {
        this.active = !this.active;

        if(this.active === true) {
            this.setStyle({ backgroundColor: active_backgroundColor, fill: active_textColor });
        }

        if(this.active === false) {
            this.setStyle({ backgroundColor: inactive_backgroundColor, fill: inactive_textColor });
        }
    }
}


export default Button;