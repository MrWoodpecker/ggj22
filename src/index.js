// GGJ 2022
// index.js
import Phaser from 'phaser';
import config from './config';

import SplashScreenPhaser from './Scenes/SplashScreens/Phaser';
import SplashScreenGGJ from './Scenes/SplashScreens/GGJ';
import Menu from './Scenes/Menu/Menu';
import Room1 from './Scenes/Game/Room1';



new Phaser.Game(Object.assign(config, {
    scene: {
        create: () =>{
            console.log('created');
        },
        SplashScreenPhaser, 
        SplashScreenGGJ, 
        Menu, 
        Room1
    },
}));
