import { CachedImages } from "../entities/CachedImages"
import { DIRECTION, Enemy } from "../entities/Enemy"

type RandomPos = {
    x: number,
    y: number
}

export class EnemyFactory {

    static randomCreate(randomPos: RandomPos) {
        const random = Math.floor(Math.random() * 4)

        return ([
            this.createCyclops(randomPos),
            this.createSpirit(randomPos),
            this.createDragon(randomPos),
            this.createCrawler(randomPos),
        ])[random]
    }

    static createSpirit(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 10,
            damage: 5,
            x: randomPos.x, 
            y: randomPos.y,
            width: 144 / 4,
            height: 150 / 2,
            speed: Math.random() * 2 + 1,
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().spirit
        })
    }

    static createCyclops(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 30,
            damage: 15,
            x: randomPos.x, 
            y: randomPos.y,
            width: 354 / 4,
            height: 170 / 2,
            speed: Math.random() * 2 + 1,
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().cyclop
        })
    }

    static createDragon(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 50,
            damage: 25,
            x: randomPos.x, 
            y: randomPos.y,
            width: 380 / 4,
            height: 200 / 2,
            speed: 2,
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().dragon
        })
    } 

    static createCrawler(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 50,
            damage: 25,
            x: randomPos.x, 
            y: randomPos.y,
            width: 260 / 4,
            height: 74 / 2,
            speed: 1,
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().crawler
        })
    } 
}