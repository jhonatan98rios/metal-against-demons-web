import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { FireWalkUnit } from "../../Unit/FireWalk/FireWalkUnit";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { FireWalkManager3 } from "./FireWalkManager3";
import { FireWalkManagerBase } from "./FireWalkManagerBase";



export class FireWalkManager2 extends FireWalkManagerBase implements AbstractSkillManager {

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
        this.name = "Burning Walk"
        this.width = 48
        this.height = 48
        this.speed = 0
        this.damage = 0.015
        this.spritesheet = CachedImages.getInstance().fireWalkLevel_2
        this.interval = 1000
        this.lifeTime = 60 * 5 //frames * sec
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return
        
        const sound_attack_level = new FireWalkUnit({ 
            initialX: player.x,
            initialY: player.y + (player.height * 0.6),
            targetX: enemyService.enemies[0].x,
            targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            damage: this.damage * player.status.baseDamage,
            width: this.width,
            height: this.height,
            speed: this.speed,
            spritesheet: this.spritesheet,
            frame_amount: 4,
            isAnimated: true,
            lifeTime: this.lifeTime
        })

        this.activeSkills.push(sound_attack_level)
    }

    upgrade(): AbstractSkillManager {
        return new FireWalkManager3()
    }
}