import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { BatAttackUnit } from "../../Unit/BatAttack/BatAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { EventClient } from "@/application/event/EventClient";
import { Enemy } from "@/application/entities/Enemy";
import { EnemyService } from "@/application/services/EnemyService";
import { Player } from "@/application/entities/Player";


export class BatAttackManagerBase extends EventClient implements AbstractSkillManager {

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
        this.width = 45
        this.height = 20
        this.speed = 2
        this.damage = 0.25
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_1
        this.interval = 0
        this.activeSkills = []
    }

    startSpawn(player: Player, enemyService: EnemyService) {
        this.intervaledSpawn(player, enemyService)
    }

    intervaledSpawn(player: Player, enemyService: EnemyService) {
        /* Each skill manaager is a type of attack */
        if (this.isActive) {
            this.spawn({ player, enemyService })

            setTimeout(() => {
                this.intervaledSpawn(player, enemyService)
            }, this.interval)
        }
    }

    spawn({ player, enemyService }: ISpawn) {
        return
    }

    move() {
        this.activeSkills.forEach(activeSkill => activeSkill.move())
    }

    update() {
        const enemyService = EnemyService.getInstance()
        this.move()
        this.checkSkillsCollision(enemyService)
        this.checkLifeTime()
    }

    checkSkillsCollision(enemyService: EnemyService) {
        
        if (!this.activeSkills) return

        for (let index = 0; index <= this.activeSkills.length; index++) {
            let activeSkill = this.activeSkills[index]

            if (activeSkill) {
                activeSkill.checkCollision(
                    enemyService.enemies,
                    this.collision.bind(this),
                )
            }
        }
    }

    checkLifeTime() {
        return
    }

    collision(enemy: Enemy) {
        this.eventManager.emit("skill:damage", { enemy, damage: this.damage })
    }

    remove(id: string) {
        this.activeSkills = this.activeSkills.filter(skill => skill.id != id)
    }

    stop() {
        this.isActive = false
    }

    upgrade(): AbstractSkillManager {
        return new BatAttackManagerBase()
    }
}