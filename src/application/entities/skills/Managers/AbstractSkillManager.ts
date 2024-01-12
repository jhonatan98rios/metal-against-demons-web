import { EnemyService } from "@/application/services/EnemyService";
import { AbstractSkill, ISpawn } from "../Unit/AbstractSkill";
import { Player } from "../../Player";

export abstract class AbstractSkillManager {

    isActive: boolean
    interval: number
    name: string
    category: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    activeSkills: AbstractSkill[]  
    
    abstract startSpawn(player: Player, enemyService: EnemyService)
    abstract spawn({ player, enemyService }: ISpawn): void
    abstract update(): void
    abstract upgrade(): AbstractSkillManager
    abstract stop(): void
}