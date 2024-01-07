import { EnemyService } from "@/application/services/EnemyService";
import { UUID, generateUUID } from "@/application/utils/utils";
import { CachedImages } from "@/application/entities/CachedImages";
import { Enemy } from "@/application/entities/Enemy";
import { AbstractSkill, ISpawn } from "../AbstractSkill";
import { OrbService } from "@/application/services/OrbService";

interface ISoundAttackLevel_3 {
    initialX: number
    initialY: number
    targetX: number
    targetY: number
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
}

export class SoundAttackLevel_3 implements AbstractSkill {

    id: UUID
    name: string
    width: number
    height: number
    initialX: number
    initialY: number
    targetX: number
    targetY: number

    x: number
    y: number
    srcX: number
    srcY: number
    countAnim: number
    spritesheet: HTMLImageElement
    speed: number
    damage: number
    
    constructor({ initialX, initialY, targetX, targetY, width, height, speed, damage, spritesheet }: ISoundAttackLevel_3) {

        this.id = generateUUID()
        this.x = initialX
        this.y = initialY
        this.initialX = initialX
        this.initialY = initialY
        this.targetX = targetX
        this.targetY = targetY

        this.width = width
        this.height = height
        this.speed = speed
        this.damage = damage
        
        this.srcX = 0
        this.srcY = 0
        this.countAnim = 0
        this.spritesheet = spritesheet
    }

    move() {
        const deltaX = this.targetX - this.initialX
        const deltaY = this.targetY - this.initialY

        const distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY))
        const directionX = deltaX / distance
        const directionY = deltaY / distance
        const velocityX = directionX * this.speed
        const velocityY = directionY * this.speed

        this.x += velocityX
        this.y += velocityY

        this.spriteAnimation()
    }

    private spriteAnimation() {
        const FRAMES_AMOUNT = 4
        const ANIMATION_SPEED = 3
        const TIME_TO_RESTART = 60 / ANIMATION_SPEED
        const SELECTED_FRAME = Math.floor(this.countAnim / (TIME_TO_RESTART / FRAMES_AMOUNT))
        
        this.countAnim++;

        if (this.countAnim >= TIME_TO_RESTART) {
            this.countAnim = 0;
        }

        this.srcX = SELECTED_FRAME * this.width;
    }

    checkCollision(enemies: Enemy[], enemyService: EnemyService, orbService: OrbService, callback: (skill: AbstractSkill, enemy: Enemy, enemyService: EnemyService, orbService: OrbService) => void) {
        for (let index = 0; index < enemies.length; index++) {
            let enemy = enemies[index]

            if ((this.x <= enemy.x + enemy.width) && (this.x + this.width >= enemy.x) && (this.y <= enemy.y + enemy.height && this.y + this.height >= enemy.y)) {
                return callback(this, enemy, enemyService, orbService) //SkillService.collision.bind(this)
            }
        }
    }

    update(): void {
        throw new Error("Method not implemented.");
    }
}