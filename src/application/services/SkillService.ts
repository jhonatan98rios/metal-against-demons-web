import { Enemy } from "../entities/Enemy";
import { Player } from "../entities/Player";
import { AbstractSkill } from "../entities/skills/AbstractSkill";
import { SoundAttackLevel_1 } from "../entities/skills/SoundAttackLevel_1";
import { EnemyService } from "./EnemyService";
import { OrbService } from "./OrbService";

export class SkillService {

    private static instance: SkillService
    public activeSkills: AbstractSkill[]

    constructor() {
        this.activeSkills = []
    }
    
    public static getInstance(): SkillService {
        if (!SkillService.instance) {
            SkillService.instance = new SkillService()
        }
        
        return SkillService.instance
    }
    
    start(player: Player, enemyService: EnemyService) {
        
        setTimeout(() => {
            this.spawn(player, enemyService)
        }, 500)
    }

    spawn(player: Player, enemyService: EnemyService) {

        setTimeout(() => {
            this.spawn(player, enemyService)
        }, 500)

        if (!player) return
        if (this.activeSkills.length > 2) return

        const range_area = {
            left: player.x - 500,
            top: player.y - 500,
            right: player.x + 500,
            bottom: player.y + 500,
        }

        const nearby_enemies = enemyService.enemies.filter(enemy => {
            return enemy.x >= range_area.left
                && enemy.x <= range_area.right
                && enemy.y >= range_area.top
                && enemy.y <= range_area.bottom
        })
        

        if (nearby_enemies.length > 0) {
            const sound_attack_level_1 = new SoundAttackLevel_1({ 
                initialX: player.x,
                initialY: player.y + (player.height / 2),
                targetX: enemyService.enemies[0].x,
                targetY: enemyService.enemies[0].y + (enemyService.enemies[0].height / 2),
            })
    
            this.activeSkills.push(sound_attack_level_1)
        }
    }

    move() {
        this.activeSkills.forEach(activeSkill => activeSkill.move())
    }
    
    checkCollision(enemyService: EnemyService, orbService: OrbService) {
        for (let index = 0; index <= this.activeSkills.length; index++) {
            let activeSkill = this.activeSkills[index]

            if (activeSkill) {
                activeSkill.checkCollision(
                    enemyService.enemies,
                    enemyService,
                    orbService,
                    this.collision.bind(this),
                )
            }
        }
    }

    collision(skill: AbstractSkill, enemy: Enemy, enemyService: EnemyService, orbService: OrbService) {
        this.remove(skill.id)
        enemyService.applyDamage(enemy, skill.damage, orbService)
    }

    remove(id: string) {
        this.activeSkills = this.activeSkills.filter(skill => skill.id != id)
    }
}