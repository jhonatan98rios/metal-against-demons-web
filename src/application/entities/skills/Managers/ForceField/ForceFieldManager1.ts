import { Player } from "@/application/entities/Player";
import { EnemyService } from "@/application/services/EnemyService";
import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { ForceFieldUnit } from "../../Unit/ForceField/ForceFieldUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { ForceFieldManagerBase } from "./ForceFieldManagerBase";
import { ForceFieldManager2 } from "./ForceFieldManager2";



export class ForceFieldManager1 extends ForceFieldManagerBase implements AbstractSkillManager {

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
        this.name = "Force Field"
        this.category = "Force Field"
        this.width = 152
        this.height = 152
        this.speed = 0
        this.damage = 0.02
        this.spritesheet = CachedImages.getInstance().forceFieldLevel_1
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
        return new ForceFieldManager2()
    }
}