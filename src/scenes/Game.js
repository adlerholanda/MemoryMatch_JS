import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    create()
    {
        const { width, height } = this.scale
        
        this.add.sprite(width * 0.5, height * 0.5, 'sokoban', 1)
    }
}