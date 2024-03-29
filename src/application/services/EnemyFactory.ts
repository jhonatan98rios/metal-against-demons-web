import { CachedImages } from "../entities/CachedImages"
import { DIRECTION, Enemy } from "../entities/Enemy"
import { generateWeightedRandomNumber, isMobile } from "../utils/utils"

type RandomPos = {
    x: number,
    y: number
}

export class EnemyFactory {

    static randomCreate(randomPos: RandomPos) {
        //const random = Math.floor(Math.random() * 4)
        const random = generateWeightedRandomNumber()

        return ([
            this.createSpirit(randomPos),
            this.createCyclops(randomPos),
            this.createCrawler(randomPos),
            this.createDragon(randomPos),
            this.createBlueDragon(randomPos)
        ])[random]
    }

    static createSpirit(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 10,
            damage: 5,
            x: randomPos.x, 
            y: randomPos.y,
            width: (144 / 4) * (isMobile() ? 0.75 : 1),
            height: (150 / 2) * (isMobile() ? 0.75 : 1),
            speed: (Math.random() * 2 + 1) * (isMobile() ? 0.75 : 1),
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
            width: (354 / 4) * (isMobile() ? 0.75 : 1),
            height: (170 / 2) * (isMobile() ? 0.75 : 1),
            speed: (Math.random() * 2 + 1) * (isMobile() ? 0.75 : 1),
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().cyclop
        })
    }


    static createCrawler(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 50,
            damage: 25,
            x: randomPos.x, 
            y: randomPos.y,
            width: (260 / 4) * (isMobile() ? 0.75 : 1),
            height: (74 / 2) * (isMobile() ? 0.75 : 1),
            speed: 1 * (isMobile() ? 0.75 : 1),
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().crawler
        })
    } 

    static createDragon(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 50,
            damage: 25,
            x: randomPos.x, 
            y: randomPos.y,
            width: (380 / 4) * (isMobile() ? 0.75 : 1),
            height: (200 / 2) * (isMobile() ? 0.75 : 1),
            speed: 2 * (isMobile() ? 0.75 : 1),
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().dragon
        })
    }

    static createBlueDragon(randomPos: RandomPos) {
        return new Enemy({
            maxHealth: 100,
            damage: 50,
            x: randomPos.x, 
            y: randomPos.y,
            width: (456 / 4) * (isMobile() ? 0.75 : 1),
            height: (240 / 2) * (isMobile() ? 0.75 : 1),
            speed: 2 * (isMobile() ? 0.75 : 1),
            srcX: 0,
            srcY: 0,
            direction: DIRECTION.LEFT,
            spritesheet: CachedImages.getInstance().blueDragon
        })
    } 
}