import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { SoundAttackManagerBase } from "./SoundAttackManagerBase";


export class SoundAttackManager5 extends SoundAttackManagerBase implements AbstractSkillManager {

    isActive: boolean
    name: string
    category: string;
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
        this.name = "Extreme Musical Note"
        this.category = "Musical Note"
        this.width = 48
        this.height = 48
        this.speed = 4
        this.damage = 3
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_5
        this.interval = 400
    }

    spawn({ player, enemyService }: ISpawn) {

        if (!(player && enemyService)) return
        const range_area = {
            left: player.x - 500,
            top: player.y - 500,
            right: player.x + 500,
            bottom: player.y + 500,
        }

        const nearby_enemies = enemyService.enemies.filter(enemy => {
            return enemy.x >= range_area.left
                && enemy.x <= range_area.right
                && enemy.y >= range_area.top
                && enemy.y <= range_area.bottom
        })

        if (nearby_enemies.length > 0) {
            const sound_attack_level = new SoundAttackUnit({ 
                initialX: player.x,
                initialY: player.y + (player.height / 2),
                targetX: enemyService.enemies[0].x,
                targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
                damage: this.damage,
                width: this.width,
                height: this.height,
                speed: this.speed,
                spritesheet: this.spritesheet,
                frame_amount: 8,
                isAnimated: true
            })
    
            this.activeSkills.push(sound_attack_level)
        }
    }

    upgrade(): AbstractSkillManager {
        const sam = new SoundAttackManager5()
        sam.interval = this.interval - 50
        sam.speed = this.speed + 0.2
        sam.damage = this.damage + 0.2
        sam.name = this.name + "+"

        console.log(sam)
        return sam
    }
}