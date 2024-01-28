import { Player } from "@/application/entities/Player";
import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { FireWalkUnit } from "../../Unit/FireWalk/FireWalkUnit";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { FireWalkManager5 } from "./FireWalkManager5";
import { FireWalkManagerBase } from "./FireWalkManagerBase";



export class FireWalkManager4 extends FireWalkManagerBase implements AbstractSkillManager {

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
        this.name = "Hell Fire"
        this.width = 120
        this.height = 120
        this.speed = 0
        this.damage = 0.25 * (Player.getInstance().status.baseDamage / 10)
        this.spritesheet = CachedImages.getInstance().fireWalkLevel_4
        this.interval = 750
        this.lifeTime = 60 * 8 //frames * sec
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return
        
        const sound_attack_level = new FireWalkUnit({ 
            initialX: player.x + (player.width/2) - (this.width / 2),
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
        return new FireWalkManager5()
    }
}