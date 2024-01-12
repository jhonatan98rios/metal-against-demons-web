import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { BatAttackUnit } from "../../Unit/BatAttack/BatAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { BatAttackManagerBase } from "./BatAttackManagerBase";


export class BatAttackManager1 extends BatAttackManagerBase implements AbstractSkillManager {

    isActive: boolean
    name: string
    category: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    activeSkills: AbstractSkill[]    
    
    constructor() {
        super()
        this.isActive = true
        this.name = "Bat Attack"
        this.category = "Bat Attack"
        this.width = 24
        this.height = 24
        this.speed = 2
        this.damage = 0.5
        this.spritesheet = CachedImages.getInstance().batAttackLevel_1
        this.interval = 7000
        this.activeSkills = []
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return

        const sound_attack_level = new BatAttackUnit({ 
            initialX: player.x,
            initialY: player.y + (player.height / 2),
            targetX: enemyService.enemies[0].x,
            targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            damage: this.damage,
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
        this.activeSkills = this.activeSkills.filter(skill => skill['distance'] <= 750)
    }

    upgrade(): AbstractSkillManager {
        const temp = new BatAttackManager1()
        temp.interval = this.interval - 500
        temp.damage = this.damage + 0.2
        temp.name = this.name + "+"

        console.log(temp)
        return temp
    }
}