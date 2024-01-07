import { Enemy } from "../entities/Enemy";
import { Player } from "../entities/Player";
import { AbstractSkill } from "../entities/skills/Unit/AbstractSkill";
import { AbstractSkillkManager } from "../entities/skills/Managers/AbstractSkillManager";
import { SoundAttackManager1 } from "../entities/skills/Managers/SoundAttack/SoundAttackManager1";
import { EnemyService } from "./EnemyService";
import { OrbService } from "./OrbService";
import { SoundAttackManager2 } from "../entities/skills/Managers/SoundAttack/SoundAttackManager2";
import { SoundAttackManager3 } from "../entities/skills/Managers/SoundAttack/SoundAttackManager3";

export class SkillService {

    private static instance: SkillService
    public activeSkills: AbstractSkill[]
    public availableSkills: AbstractSkillkManager[]

    constructor() {
        this.activeSkills = []
        this.availableSkills = []
        this.availableSkills.push(
            new SoundAttackManager1(),
            new SoundAttackManager2(),
            new SoundAttackManager3(),
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
    
    checkCollision(enemyService: EnemyService, orbService: OrbService) {
        for (let index = 0; index <= this.activeSkills.length; index++) {
            let activeSkill = this.activeSkills[index]

            if (activeSkill) {
                activeSkill.checkCollision(
                    enemyService.enemies,
                    enemyService,
                    orbService,
                    this.collision.bind(this),
                )
            }
        }
    }

    collision(skill: AbstractSkill, enemy: Enemy, enemyService: EnemyService, orbService: OrbService) {
        this.remove(skill.id)
        enemyService.applyDamage(enemy, skill.damage, orbService)
    }

    remove(id: string) {
        this.activeSkills = this.activeSkills.filter(skill => skill.id != id)
    }
}