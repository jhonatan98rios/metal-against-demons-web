import { Player } from "../entities/Player";
import { AbstractSkill } from "../entities/skills/Unit/AbstractSkill";
import { AbstractSkillManager } from "../entities/skills/Managers/AbstractSkillManager";
import { EnemyService } from "./EnemyService";
import { EventClient } from "../event/EventClient";
import { Game } from "../entities/Game";
import { selectRandomSkillsAlreadyAcquired, selectRandomSkillsNotAcquired } from "../entities/skills/Managers/skillUtils";
import { SoundAttackManager1 } from "../entities/skills/Managers/SoundAttack/SoundAttackManager1";
import { ForceFieldManager1 } from "../entities/skills/Managers/ForceField/ForceFieldManager1";
import { FireWalkManager5 } from "../entities/skills/Managers/FireWalk/FireWalkManager5";

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


    getUpgradeOptions() {
        const buyOptions = selectRandomSkillsNotAcquired(2)
        const howManyUpgradesShouldBeAvailable = 3 - buyOptions.length
        const upgradeOptions = selectRandomSkillsAlreadyAcquired(howManyUpgradesShouldBeAvailable)

        return [
            ...upgradeOptions,
            ...buyOptions
        ]
    }


    buyOrUpgradeSkill(newSkill: AbstractSkillManager) {
        this.availableSkills = this.availableSkills.filter(skill => {
            return skill.category != newSkill.category
        })
        this.availableSkills.push(newSkill)

        const game = Game.getInstance()

        this.startSpawn(game.player, game.enemyService, newSkill.category)

    }
}