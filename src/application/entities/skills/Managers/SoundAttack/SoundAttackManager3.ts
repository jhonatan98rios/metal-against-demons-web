import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackLevel_3 } from "../../Unit/SoundAttack/SoundAttackLevel_3";


export class SoundAttackManager3 {

    isActive: boolean
    name: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    
    constructor() {
        this.isActive = true
        this.name = "Simple Musical Note"
        this.width = 47
        this.height = 47
        this.speed = 10
        this.damage = 2
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_3
        this.interval = 1500
    }

    spawn({ player, enemyService, activeSkills }: ISpawn) {

        if (!(player && enemyService && activeSkills)) return
        const range_area = {
            left: player.x - 500,
            top: player.y - 500,
            right: player.x + 500,
            bottom: player.y + 500,
        }

        const nearby_enemies = enemyService.enemies.filter(enemy => {
            return enemy.x >= range_area.left
                && enemy.x <= range_area.right
                && enemy.y >= range_area.top
                && enemy.y <= range_area.bottom
        })

        if (nearby_enemies.length > 0) {
            const sound_attack_level_1 = new SoundAttackLevel_3({ 
                initialX: player.x,
                initialY: player.y + (player.height / 2),
                targetX: enemyService.enemies[0].x,
                targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
                damage: this.damage,
                width: this.width,
                height: this.height,
                speed: this.speed,
                spritesheet: this.spritesheet
            })
    
            activeSkills.push(sound_attack_level_1)

            console.log("Attack!!")
            console.log(activeSkills.length)
        }
    }

    stop() {
        this.isActive = false
        clearInterval(this.interval)
    }
}