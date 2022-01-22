// GGJ 2022
// GGJ.js
// Splash Screen with Global Game Jam Logo
import Phaser from 'phaser';

import config from '../../config';


class SplashScreenGGJ extends Phaser.Scene {
    constructor() {
        super({ key: 'SplashScreenGGJ' });
    }

    preload() {
        this.load.image('logo-ggj', 'assets/img/ggj-logo.png');
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.logo = this.add.image(width / 2, height / 2, 'logo-ggj');
        this.logo.setScale(0.4);

        this.time.addEvent({
            delay: config.splashScreenDelay,
            loop: false,
            callback: () => {
                this.scene.start("Menu");
            }
        });
    }
}


export default SplashScreenGGJ;