import { Enemy } from "../entities/Enemy";
import { Player } from "../entities/Player";
import { AbstractSkill } from "../entities/skills/Unit/AbstractSkill";
import { AbstractSkillManager } from "../entities/skills/Managers/AbstractSkillManager";
import { EnemyService } from "./EnemyService";
import { SoundAttackManager1 } from "../entities/skills/Managers/SoundAttack/SoundAttackManager1";
import { EventManager } from "../event/EventManager";
import { EventClient } from "../event/EventClient";
import { Game } from "../entities/Game";
import { ForceFieldManager1 } from "../entities/skills/Managers/ForceField/ForceFieldManager1";
import { BatAttackManager1 } from "../entities/skills/Managers/BatAttack/BatAttackManager1";

export class SkillService extends EventClient {

    private static instance: SkillService
    public activeSkills: AbstractSkill[]
    public availableSkills: AbstractSkillManager[]

    constructor() {
        super()
        this.activeSkills = []
        this.availableSkills = []
        this.availableSkills.push(
            new SoundAttackManager1(),
            new ForceFieldManager1(),
            new BatAttackManager1(),
        )
    }
    
    public static getInstance(): SkillService {
        if (!SkillService.instance) {
            SkillService.instance = new SkillService()
        }
        
        return SkillService.instance
    }
    
    startSpawn(player: Player, enemyService: EnemyService, category?: string) {
        this.availableSkills.forEach((skillManager) => {
            if (category) {
                if (skillManager.category === category) {
                    skillManager.startSpawn(player, enemyService)
                }
            } else {
                skillManager.startSpawn(player, enemyService)
            }
        })
    }

    update() {
        this.availableSkills.forEach(availableSkill => availableSkill.update())
    }

    upgrade(category: string, game: Game) {
        let alreadyExists = false

        this.availableSkills = this.availableSkills.map(skill => {
            if (skill.category == category) {

                console.log(skill.name)

                skill.stop()
                skill = skill.upgrade()
                alreadyExists = true
            }
            return skill
        })

        if (!alreadyExists) {
            console.log("O item não existe ainda")
        } 

        this.startSpawn(game.player, game.enemyService, category)

        console.log(this.availableSkills)
        
    }
}