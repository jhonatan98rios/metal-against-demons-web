import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { SoundAttackManager2 } from "./SoundAttackManager2";
import { SoundAttackManagerBase } from "./SoundAttackManagerBase";


export class SoundAttackManager1 extends SoundAttackManagerBase implements AbstractSkillManager {

    isActive: boolean
    name: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    
    constructor() {
        super()
        this.isActive = true
        this.name = "Sound Attack"
        this.width = 26
        this.height = 26
        this.speed = 3
        this.damage = 1
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_1
        this.interval = 500
        this.lifeTime = 10 //s
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return
        
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
                damage: this.damage * player.status.baseDamage,
                width: this.width,
                height: this.height,
                speed: this.speed,
                spritesheet: this.spritesheet,
                frame_amount: 1
            })
    
            this.activeSkills.push(sound_attack_level)
        }
    }

    upgrade(): AbstractSkillManager {
        return new SoundAttackManager2()
    }
}