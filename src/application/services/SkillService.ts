import { Enemy } from "../entities/Enemy";
import { Player } from "../entities/Player";
import { AbstractSkill } from "../entities/skills/Unit/AbstractSkill";
import { AbstractSkillkManager } from "../entities/skills/Managers/AbstractSkillManager";
import { EnemyService } from "./EnemyService";
import { SoundAttackManager1 } from "../entities/skills/Managers/SoundAttack/SoundAttackManager1";
import { EventManager } from "../event/EventManager";
import { EventClient } from "../event/EventClient";
import { Game } from "../entities/Game";

export class SkillService extends EventClient {

    public eventManager: EventManager
    private static instance: SkillService
    public activeSkills: AbstractSkill[]
    public availableSkills: AbstractSkillkManager[]

    constructor() {
        super()
        this.eventManager = EventManager.getInstance()
        this.activeSkills = []
        this.availableSkills = []
        this.availableSkills.push(
            new SoundAttackManager1(),
        )
    }
    
    public static getInstance(): SkillService {
        if (!SkillService.instance) {
            SkillService.instance = new SkillService()
        }
        
        return SkillService.instance
    }
    
    startSpawn(player: Player, enemyService: EnemyService) {
        this.availableSkills.forEach((skillManager) => {
            this.intervaledSpawn(skillManager, player, enemyService)
        })
    }

    intervaledSpawn(skillManager: AbstractSkillkManager, player: Player, enemyService: EnemyService) {
        /* Each skill manaager is a type of attack */
        skillManager.spawn({ player, enemyService, activeSkills: this.activeSkills })

        if (skillManager.isActive) {
            setTimeout(() => {
                this.intervaledSpawn(skillManager, player, enemyService)
            }, skillManager.interval)
        }
    }

    move() {
        this.activeSkills.forEach(activeSkill => activeSkill.move())
    }
    
    checkSkillsCollision(enemyService: EnemyService) {
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
        this.eventManager.emit("skill:damage", { enemy, damage: skill.damage })
    }

    remove(id: string) {
        this.activeSkills = this.activeSkills.filter(skill => skill.id != id)
    }

    upgrade(skillName: string, game: Game) {
        let alreadyExists = false

        this.availableSkills = this.availableSkills.map(skill => {
            if (skill.name == skillName) {

                console.log(skill.name)

                skill.stop()
                skill = skill.update()
                alreadyExists = true
            }
            return skill
        })

        if (!alreadyExists) {
            console.log("O item não existe ainda")
        } 

        this.startSpawn(game.player, game.enemyService)

        console.log(this.availableSkills)
        
    }

    // createEventListeners() {
    //     this.eventManager.on('skill:upgrade', (props: { player: Player, enemyService: EnemyService, skillName: string }) => {
    //         const { player, enemyService, skillName } = props
    //         this.upgrade(skillName)
    //         this.startSpawn(player, enemyService)
    //     });
    // }
}