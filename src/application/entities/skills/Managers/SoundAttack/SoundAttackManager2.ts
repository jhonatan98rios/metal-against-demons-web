import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { SoundAttackManager3 } from "./SoundAttackManager3";
import { SoundAttackManagerBase } from "./SoundAttackManagerBase";
import { Player } from "@/application/entities/Player";


export class SoundAttackManager2 extends SoundAttackManagerBase implements AbstractSkillManager {

    isActive: boolean
    name: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    lifeTime: number
    
    constructor() {
        super()
        this.isActive = true
        this.name = "Super Sound Attack"
        this.category = "Sound Attack"
        this.width = 38
        this.height = 38
        this.speed = 3.2
        this.damage = 12 * (Player.getInstance().status.baseDamage / 10)
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_2
        this.interval = 450
        this.lifeTime = 60 * 3 //frames * sec
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
                frame_amount: 1,
                lifeTime: 2000
            })
    
            this.activeSkills.push(sound_attack_level)
        }
    }

    upgrade(): AbstractSkillManager {
        return new SoundAttackManager3()
    }
}