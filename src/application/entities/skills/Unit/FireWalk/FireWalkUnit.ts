import { UUID, generateUUID } from "@/application/utils/utils";
import { Enemy } from "@/application/entities/Enemy";
import { AbstractSkill } from "../AbstractSkill";

interface IFireWalkUnit {
    initialX: number
    initialY: number
    targetX: number
    targetY: number
    width: number
    height: number
    speed: number
    damage: number
    spritesheet: HTMLImageElement
    frame_amount: number
    isAnimated?: boolean
    lifeTime: number
}

export class FireWalkUnit implements AbstractSkill {

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
    frame_amount: number
    speed: number
    damage: number
    isAnimated: boolean

    lifeTime: number
    
    constructor({ initialX, initialY, targetX, targetY, width, height, speed, damage, spritesheet, frame_amount, isAnimated, lifeTime }: IFireWalkUnit) {

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
        this.frame_amount = frame_amount

        this.isAnimated = !!isAnimated
        this.lifeTime = lifeTime

        console.log("Spawn")
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

        if (this.isAnimated) {
            this.spriteAnimation()
        }
    }

    checkCollision(enemies: Enemy[], callback: (skill: AbstractSkill, enemy: Enemy) => void) {
        for (let index = 0; index < enemies.length; index++) {
            let enemy = enemies[index]

            if ((this.x <= enemy.x + enemy.width) && (this.x + this.width >= enemy.x) && (this.y <= enemy.y + enemy.height && this.y + this.height >= enemy.y)) {
                return callback(this, enemy) //SkillService.collision.bind(this)
            }
        }
    }

    updateLifeTime() {
        this.lifeTime -= 1
    }

    private spriteAnimation() {
        const ANIMATION_SPEED = 3
        const TIME_TO_RESTART = 60 / ANIMATION_SPEED
        const SELECTED_FRAME = Math.floor(this.countAnim / (TIME_TO_RESTART / this.frame_amount))
        
        this.countAnim++;

        if (this.countAnim >= TIME_TO_RESTART) {
            this.countAnim = 0;
        }

        this.srcX = SELECTED_FRAME * this.width;
    }
}