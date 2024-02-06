import { Player } from "@/application/entities/Player";
import { EnemyService } from "@/application/services/EnemyService";
import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { ForceFieldUnit } from "../../Unit/ForceField/ForceFieldUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { ForceFieldManagerBase } from "./ForceFieldManagerBase";



export class ForceFieldManager5 extends ForceFieldManagerBase implements AbstractSkillManager {

    isActive: boolean
    name: string
    category: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    interval: number
    activeSkills: AbstractSkill[];
    
    constructor() {
        super()
        this.isActive = true
        this.name = "Tesla Sphere of Destruction"
        this.category = "Force Field"
        this.width = 300
        this.height = 300
        this.speed = 0
        this.damage = 1 * (Player.getInstance().status.baseDamage / 10)
        this.spritesheet = CachedImages.getInstance().forceFieldLevel_5
        this.interval = 100
        this.activeSkills = []
    }

    startSpawn(player: Player, enemyService: EnemyService) {
        this.spawn({ player, enemyService })
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return

        const sound_attack_level = new ForceFieldUnit({ 
            initialX: player.x - (this.width / 3),
            initialY: player.y - (this.height / 2),
            targetX: enemyService.enemies[0].x,
            targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            damage: this.damage * player.status.baseDamage,
            width: this.width,
            height: this.height,
            speed: this.speed,
            spritesheet: this.spritesheet,
            frame_amount: 4,
            isAnimated: true
        })

        this.activeSkills.push(sound_attack_level)
    }

    upgrade(): AbstractSkillManager {
        const temp = new ForceFieldManager5()
        temp.damage = this.damage + 0.2
        temp.name = this.name + "+"
        return temp
    }
}