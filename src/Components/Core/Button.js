// GGJ 2022
// Button.js
// Text Button
import Phaser from 'phaser';


const activeColor = 'red';
const inactiveColor = 'black';
const style = {
    fill: 'white',
    fontFamily: 'GameFont',
    fontSize: '25px',
    backgroundColor: inactiveColor,
    padding: 8
};


class Button extends Phaser.GameObjects.Text {
    constructor(config, text, active) {
        super(config.scene, config.x, config.y, text, style);
        config.scene.add.existing(this);

        this.setOrigin(0.5, 0.5);
        this.active = !!active;
        if(this.active) {
            this.setStyle({ backgroundColor: activeColor });
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
            this.setStyle({ backgroundColor: activeColor });
        }

        if(this.active === false) {
            this.setStyle({ backgroundColor: inactiveColor });
        }
    }
}


export default Button;