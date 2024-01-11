import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillkManager } from "../AbstractSkillManager";
import { SoundAttackManager5 } from "./SoundAttackManager5";


export class SoundAttackManager4 implements AbstractSkillkManager {

    isActive: boolean
    name: string
    category: string;
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    
    constructor() {
        this.isActive = true
        this.name = "Advanced Musical Note"
        this.category = "Musical Note"
        this.width = 47
        this.height = 47
        this.speed = 4
        this.damage = 2.5
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_4
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
            const sound_attack_level = new SoundAttackUnit({ 
                initialX: player.x,
                initialY: player.y + (player.height / 2),
                targetX: enemyService.enemies[0].x,
                targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
                damage: this.damage,
                width: this.width,
                height: this.height,
                speed: this.speed,
                spritesheet: this.spritesheet,
                frame_amount: 4,
                isAnimated: true
            })
    
            activeSkills.push(sound_attack_level)
        }
    }

    stop() {
        this.isActive = false
    }

    update(): AbstractSkillkManager {
        return new SoundAttackManager5()
    }
}