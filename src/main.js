import MainScene from './scenes/MainScene.js';
import LoadingScene from './scenes/LoadingScene.js';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        parent: 'maindiv',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);

game.scene.add("MainScene", MainScene);
game.scene.add("LoadingScene", LoadingScene)
game.scene.start('LoadingScene');

export default new game;
