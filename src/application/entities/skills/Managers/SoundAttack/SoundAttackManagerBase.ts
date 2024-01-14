import { CachedImages } from "../../../CachedImages";
import { AbstractSkill, ISpawn } from "../../Unit/AbstractSkill";
import { SoundAttackUnit } from "../../Unit/SoundAttack/SoundAttackUnit";
import { AbstractSkillManager } from "../AbstractSkillManager";
import { EventClient } from "@/application/event/EventClient";
import { Enemy } from "@/application/entities/Enemy";
import { EnemyService } from "@/application/services/EnemyService";
import { Player } from "@/application/entities/Player";


export class SoundAttackManagerBase extends EventClient implements AbstractSkillManager {

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
    lifeTime: number 
    
    constructor() {
        super()
        this.isActive = true
        this.name = "Basic Sound Attack"
        this.category = "Sound Attack"
        this.width = 26
        this.height = 26
        this.speed = 3
        this.damage = 1
        this.spritesheet = CachedImages.getInstance().soundAttackLevel_1
        this.interval = 500
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

    collision(skill: AbstractSkill, enemy: Enemy) {
        this.remove(skill.id)
        this.eventManager.emit("skill:damage", { enemy, damage: this.damage })
    }

    checkLifeTime() {
        this.activeSkills = this.activeSkills.filter(skill => skill['distance'] <= (this.lifeTime * 60))
    }

    remove(id: string) {
        this.activeSkills = this.activeSkills.filter(skill => skill.id != id)
    }

    stop() {
        this.isActive = false
    }

    upgrade(): AbstractSkillManager {
        return 
    }
}