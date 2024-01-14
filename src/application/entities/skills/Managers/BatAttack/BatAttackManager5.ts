import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { BatAttackUnit } from "../../Unit/BatAttack/BatAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { BatAttackManagerBase } from "./BatAttackManagerBase";


export class BatAttackManager5 extends BatAttackManagerBase implements AbstractSkillManager {

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
        this.name = "Hellish Dracula Rage"
        this.width = 40
        this.height = 40
        this.speed = 0.05
        this.damage = 0.75
        this.spritesheet = CachedImages.getInstance().batAttackLevel_5
        this.interval = 5000 //ms
        this.lifeTime = 7 //s
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return

        const sound_attack_level = new BatAttackUnit({ 
            initialX: player.x,
            initialY: player.y + (player.height / 2),
            targetX: enemyService.enemies[0].x,
            targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            damage: this.damage * player.status.baseDamage,
            width: this.width,
            height: this.height,
            speed: this.speed,
            spritesheet: this.spritesheet,
            frame_amount: 2,
            isAnimated: true
        })

        this.activeSkills.push(sound_attack_level)
    }

    checkLifeTime() {
        this.activeSkills = this.activeSkills.filter(skill => skill['distance'] <= (this.lifeTime * 60))
    }

    upgrade(): AbstractSkillManager {
        const temp = new BatAttackManager5()
        temp.interval = this.interval > 1000 ? this.interval - 100 : this.interval
        temp.damage = this.damage + 0.2
        temp.name = this.name + "+"

        console.log(temp)
        return temp
    }
}