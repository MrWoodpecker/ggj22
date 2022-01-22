// GGJ 2022
// Phaser.js
// Splash Screen with Phaser Logo
import Phaser from 'phaser';

import config from '../../config';


class SplashScreenPhaser extends Phaser.Scene {
    constructor() {
        super({ key: 'SplashScreenPhaser' });
    }

    preload() {
        this.load.image('logo-phaser', 'assets/img/phaser3-logo.png');
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.logo = this.add.image(width / 2, height / 2, 'logo-phaser');

        this.time.addEvent({
            delay: config.splashScreenDelay,
            loop: false,
            callback: () => {
                this.scene.start("SplashScreenGGJ");
            }
        });
    }
}


export default SplashScreenPhaser;