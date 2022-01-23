// GGJ 2022
// config.js
import Phaser from 'phaser';


export default {
    // Phaser stuff
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#000000',
    scale: {
        width: '100vw',
        height: '100vh',
        mode: Phaser.Scale.NO_CENTER,
    },

    // custom stuff
    splashScreenDelay: 100,
};
