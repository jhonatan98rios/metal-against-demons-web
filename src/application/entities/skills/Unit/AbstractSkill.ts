import { EnemyService } from "@/application/services/EnemyService";
import { Enemy } from "@/application/entities/Enemy";
import { Player } from "@/application/entities/Player";

export interface ISpawn {
    player: Player
    enemyService: EnemyService
    activeSkills: AbstractSkill[]
}

export abstract class AbstractSkill {

    abstract id: string
    abstract name: string
    abstract width: number
    abstract height: number
    abstract x: number
    abstract y: number
    abstract srcX: number
    abstract srcY: number
    abstract countAnim: number
    abstract spritesheet: HTMLImageElement
    abstract speed: number
    abstract damage: number

    abstract move(): void
    abstract checkCollision(enemies: Enemy[], callback: Function): void
    static startSpawn(props: ISpawn): void {}
    static spawn(props: ISpawn): void {}
}