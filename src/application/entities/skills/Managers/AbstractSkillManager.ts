import { ISpawn } from "../Unit/AbstractSkill";

export abstract class AbstractSkillkManager {

    isActive: boolean
    interval: number
    name: string
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    
    abstract spawn({ player, enemyService, activeSkills }: ISpawn): void
    abstract update(): AbstractSkillkManager
    abstract stop(): void
}