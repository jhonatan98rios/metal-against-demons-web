import { Player } from "@/application/entities/Player";
import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { FireWalkUnit } from "../../Unit/FireWalk/FireWalkUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { FireWalkManager2 } from "./FireWalkManager2";
import { FireWalkManagerBase } from "./FireWalkManagerBase";



export class FireWalkManager1 extends FireWalkManagerBase implements AbstractSkillManager {

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
        this.name = "Fire Walk"
        this.width = 48
        this.height = 48
        this.speed = 0
        this.damage = 0.1 * (Player.getInstance().status.baseDamage / 10)
        this.spritesheet = CachedImages.getInstance().fireWalkLevel_1
        this.interval = 1000
        this.lifeTime = 60 * 5 //frames * sec
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
        return new FireWalkManager2()
    }
}