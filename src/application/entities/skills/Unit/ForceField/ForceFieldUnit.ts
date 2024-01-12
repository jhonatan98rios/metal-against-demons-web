import { UUID, generateUUID } from "@/application/utils/utils";
import { Enemy } from "@/application/entities/Enemy";
import { AbstractSkill } from "../AbstractSkill";
import { Player } from "@/application/entities/Player";

interface IForceFieldUnitUnit {
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
}

export class ForceFieldUnit implements AbstractSkill {

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
    
    constructor({ initialX, initialY, targetX, targetY, width, height, speed, damage, spritesheet, frame_amount, isAnimated }: IForceFieldUnitUnit) {

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
    }

    move() {
        const player = Player.getInstance()

        this.x = player.x + (player.width / 2) - (this.width / 2)
        this.y = player.y + (player.height / 2) - (this.height / 2)

        if (this.isAnimated) {
            this.spriteAnimation()
        }
    }

    checkCollision(enemies: Enemy[], callback: (enemy: Enemy) => void) {
        for (let index = 0; index < enemies.length; index++) {
            let enemy = enemies[index]

            if ((this.x <= enemy.x + enemy.width) && (this.x + this.width >= enemy.x) && (this.y <= enemy.y + enemy.height && this.y + this.height >= enemy.y)) {
                return callback(enemy) //SkillService.collision.bind(this)
            }
        }
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