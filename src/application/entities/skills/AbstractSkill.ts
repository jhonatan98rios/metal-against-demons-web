import { EnemyService } from "@/application/services/EnemyService";
import { Enemy } from "../Enemy";
import { OrbService } from "@/application/services/OrbService";

export abstract class AbstractSkill {

    abstract id: string
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
    abstract checkCollision(enemies: Enemy[], enemyService: EnemyService, orbService: OrbService, callback: Function): void
    abstract animate(): void
    abstract effect(): void
}