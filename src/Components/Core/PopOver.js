// GGJ 2022
// Button.js
// Text Button
import Phaser from 'phaser';


class PopOver extends Phaser.GameObjects.Rectangle {
    constructor(config, text) {
        super(config.scene, config.x, config.y, config.width, config.height, 255);
        config.scene.add.existing(this);

        this.setOrigin(0, 0);
    }

    created() {
        this.text = 
    }

    // >>> Setter
    show() {
        this.visible = true;
    }
}


export default PopOver;