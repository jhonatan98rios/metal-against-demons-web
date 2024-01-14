import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { FireWalkUnit } from "../../Unit/FireWalk/FireWalkUnit";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { FireWalkManagerBase } from "./FireWalkManagerBase";



export class FireWalkManager5 extends FireWalkManagerBase implements AbstractSkillManager {

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
        this.name = "Infernal Black Flames"
        this.width = 100
        this.height = 100
        this.speed = 0
        this.damage = 0.03
        this.spritesheet = CachedImages.getInstance().fireWalkLevel_5
        this.interval = 500
        this.lifeTime = 60 * 12 //frames * sec
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return
        
        const sound_attack_level = new FireWalkUnit({ 
            initialX: player.x - 20,
            initialY: player.y + (player.height * 0.3),
            targetX: enemyService.enemies[0].x,
            targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            damage: this.damage * player.status.baseDamage,
            width: this.width,
            height: this.height,
            speed: this.speed,
            spritesheet: this.spritesheet,
            frame_amount: 6,
            isAnimated: true,
            lifeTime: this.lifeTime
        })

        this.activeSkills.push(sound_attack_level)
    }

    upgrade(): AbstractSkillManager {
        const temp = new FireWalkManager5()
        temp.interval = this.interval - 50
        temp.damage = this.damage + 0.2
        temp.name = this.name + "+"

        console.log(temp)
        return temp
    }
}