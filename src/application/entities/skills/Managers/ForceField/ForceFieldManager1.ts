import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { ForceFieldUnit } from "../../Unit/ForceField/ForceFieldUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";



export class ForceFieldManager1 implements AbstractSkillManager {

    isActive: boolean
    name: string
    category: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    
    constructor() {
        this.isActive = true
        this.name = "Basic Force Field"
        this.category = "Force Field"
        this.width = 128
        this.height = 128
        this.speed = 0
        this.damage = 0.01
        this.spritesheet = CachedImages.getInstance().forceFieldLevel_1
        this.interval = 100
    }

    spawn({ player, enemyService, activeSkills }: ISpawn) {

        if (!(player && enemyService && activeSkills)) return

        const sound_attack_level = new ForceFieldUnit({ 
            initialX: player.x - (this.width / 3),
            initialY: player.y + player.height - (this.height / 2),
            targetX: enemyService.enemies[0].x,
            targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            damage: this.damage,
            width: this.width,
            height: this.height,
            speed: this.speed,
            spritesheet: this.spritesheet,
            frame_amount: 1
        })

        activeSkills.push(sound_attack_level)
    }

    stop() {
        this.isActive = false
    }

    update(): AbstractSkillManager {
        return new ForceFieldManager1()
    }
}