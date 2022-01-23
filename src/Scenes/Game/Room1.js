// GGJ 2022
// Screen1.js
// Room 1
import Phaser from 'phaser';

import items from './items.json';

import Computer from '../Minigames/Computer';


class Room1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room1' });
    }

    preload() {
        this.load.image('bg', 'assets/img/room1.png');
        this.load.image('cat', 'assets/img/cat.png');

        // >>> Items of Screen
        this.plantRight = items.plants.bigRight[Math.floor(Math.random() * items.plants.bigRight.length)];
        if(this.plantRight.path) {
            this.load.image('plantRight', this.plantRight.path);
        }
        this.plantLeft = items.plants.smallLeft[Math.floor(Math.random() * items.plants.smallLeft.length)];
        if(this.plantLeft.path) {
            this.load.image('plantLeft', this.plantLeft.path);
        }
        this.computer = items.computer;
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        // >>> State
        this.keyCodePressed = undefined; 
        // <<< State

        // render background
        this.bg = this.add.sprite(0, 0, 'bg');
        this.bg.setOrigin(0, 0);

        // render all random generated items
        // >>> Plant Big Right
        this.plantRightImage = this.add.sprite(0, 0, 'plantRight');
        this.plantRightImage.setOrigin(0, 0);
        this.plantRightArea = this.add.rectangle(this.plantRight.coordinates.x, this.plantRight.coordinates.y, this.plantRight.size.w, this.plantRight.size.h, 210, 0.3);
        this.plantRightArea.setInteractive();
        this.plantRightArea.on('pointerdown', () => this.onClick_plant(this.plantRight))
        // <<< Plant Big Right
        // >>> Plant Small Left
        this.plantLeftImage = this.add.sprite(0, 0, 'plantLeft');
        this.plantLeftImage.setOrigin(0, 0);
        this.plantLeftArea = this.add.rectangle(this.plantLeft.coordinates.x, this.plantLeft.coordinates.y, this.plantLeft.size.w, this.plantLeft.size.h, 210, 0.3);
        this.plantLeftArea.setInteractive();
        this.plantLeftArea.on('pointerdown', () => this.onClick_plant(this.plantLeft));
        // <<< Plant Small Left
        // >>> Computer
        this.computerArea = this.add.rectangle(this.computer.coordinates.x, this.computer.coordinates.y, this.computer.size.w, this.computer.size.h, 210, 0.3);
        this.computerArea.setInteractive();
        this.computerArea.on('pointerdown', () => this.onClick_computer(this), this);
        this.showComputerScene = false;
        // <<< Computer
        // >>> Timer
        this.timeInSeconds = 300;
        this.timeText = this.add.text(1470, 160, "0:00", { fontFamily: 'GameFont', fontSize: '50px', color: 'red' });
        this.timeText.setOrigin(0.5, 0.5);
        this.timer = this.time.addEvent({
            delay: 1000,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
        // <<< Timer

        // Setup Key Listeners
        this.key_B = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.key_F = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.key_U = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_ESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    tick(thisArg) {
        this.timeInSeconds--;
        var minutes = Math.floor(this.timeInSeconds / 60);
        var seconds = this.timeInSeconds - (minutes * 60);
        var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
        this.timeText.text = timeString;
        if (this.timeInSeconds == 0) {
            game.time.events.remove(this.timer);
            this.timeText.text="Game Over";
        }
    }

    addZeros(num) {
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    }

    onClick_computer(t) {
        if(this.showComputerScene === false && this.computerScene === undefined) {
            console.log(t)
            this.computerScene = t.scene.add('Computer', Computer, true);
            console.log(this.computerScene);
            this.showComputerScene = true;
        } 
        if(this.showComputerScene === false && this.computerScene !== undefined) {
            this.computerScene.scene.setVisible(true);
        } 
    }

    onClick_plant(target) {
        let numberOfPlants = 0,
            numberOfBluePlants = 0,
            numberOfOrangePlants = 0,
            numberOfBluePlanters = 0,
            numberOfOrangePlanters = 0,
            numberOfPlantsWithSamePlantAndPlanter = 0;


        numberOfPlants = 2; // static first
        numberOfBluePlants = 2; // static first
        numberOfOrangePlants = 0; // static first
        numberOfBluePlanters = 0; // static first
        numberOfOrangePlanters = 2; // static first
        numberOfPlantsWithSamePlantAndPlanter = 0; // static first

        if(numberOfBluePlanters >= 1 && this.key_B.isDown) {
            // Rule #1
            console.log("Rule 1");
        } else if(numberOfPlantsWithSamePlantAndPlanter === 1 && this.key_F.isDown && target.colorPlanter === target.colorPlant) {
            // Rule #2
            console.log("Rule 2");
        } else if((numberOfBluePlanters === 2 || numberOfOrangePlanters === 2) && this.key_U.isDown && numberOfOrangePlants === 1 && numberOfBluePlants === 1) {
            // Rule #3
            console.log("Rule 3");
        } else if(this.key_A.isDown) {
            // Rule #4
            console.log("Rule 4");
        } else {
            console.log("Fail");
        }
    }

    update(time, delta) {
        if(this.key_ESC.isDown) {
            this.computerScene.scene.setVisible(false);
            this.showComputerScene = false;
        }
    }
}


export default Room1;