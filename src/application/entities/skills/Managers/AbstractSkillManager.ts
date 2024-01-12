import { AbstractSkill, ISpawn } from "../Unit/AbstractSkill";

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
    
    abstract spawn({ player, enemyService, activeSkills }: ISpawn): void
    abstract update(): void
    abstract upgrade(): AbstractSkillManager
    abstract stop(): void
}