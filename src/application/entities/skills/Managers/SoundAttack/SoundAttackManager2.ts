import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackLevel_2 } from "../../Unit/SoundAttack/SoundAttackLevel_2";
import { AbstractSkillkManager } from "../AbstractSkillManager";
import { SoundAttackManager3 } from "./SoundAttackManager3";


export class SoundAttackManager2 {

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
        this.name = "Musical Note"
        this.width = 38
        this.height = 38
        this.speed = 4
        this.damage = 1.5
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_2
        this.interval = 400
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
            const sound_attack_level = new SoundAttackLevel_2({ 
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
    
            activeSkills.push(sound_attack_level)
        }
    }

    stop() {
        this.isActive = false
        console.log('STOP 2')
    }

    update(): AbstractSkillkManager {
        console.log("UPDATE!! para o 3")
        return new SoundAttackManager3()
    }
}