import { CachedImages } from "../../../CachedImages";
import { ISpawn } from "../../Unit/AbstractSkill";
import { BatAttackUnit } from "../../Unit/BatAttack/BatAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { BatAttackManager2 } from "./BatAttackManager2";
import { BatAttackManagerBase } from "./BatAttackManagerBase";


export class BatAttackManager1 extends BatAttackManagerBase implements AbstractSkillManager {

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
        this.name = "Bat Attack"
        this.width = 24
        this.height = 24
        this.speed = 0.05
        this.damage = 1
        this.spritesheet = CachedImages.getInstance().batAttackLevel_1
        this.interval = 7000 //ms
        this.lifeTime = 4 //s
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

    upgrade(): AbstractSkillManager {
        return new BatAttackManager2()
    }
}