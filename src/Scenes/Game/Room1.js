// GGJ 2022
// Screen1.js
// Room 1
import Phaser from 'phaser';


class Room1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room1' });
    }

    preload() {
        this.load.image('bg', 'assets/img/room1.png');
        this.load.image('cat', 'assets/img/cat.png');
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        this.bg = this.add.sprite(width / 2, 0, 'bg');
        this.bg.setOrigin(0.5, 0);

        this.cat = this.add.image(0, height, 'cat');
        this.cat.setOrigin(0, 1);
        this.cat.setScale(0.2);
    }

    update(time, delta) {
        
    }
}


export default Room1;