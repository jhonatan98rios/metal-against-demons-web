import { Game } from "./Game";
import { Player } from "./Player";

export class PlayerStatus {

    private static instance: PlayerStatus;
    public level: number
    public maxHealth: number
    public currentHealth: number
    public vulnerable: boolean
    public currentXP: number
    public nextLevelXp: number

    constructor () {
        this.level = 1
        this.maxHealth = 10
        this.currentHealth = 10
        this.vulnerable = true
        this.currentXP = 0
        this.nextLevelXp = 15
    }

    public static getInstance(): PlayerStatus {
        if (!PlayerStatus.instance) {
            PlayerStatus.instance = new PlayerStatus();
        }

        return PlayerStatus.instance;
    }

    takeDamage(player: Player, damage: number, game: Game) {
        if (this.currentHealth <= 0) {
            player.die(game)
            return
        } 
        
        if (!this.vulnerable) return
            
        this.currentHealth -= damage
        this.vulnerable = false

        setTimeout(() => {
            this.vulnerable = true
        }, 1000)
    }

    takeXp(xp: number, game: Game) {
        if (this.currentXP + xp >= this.nextLevelXp) {
            return this.upgrade(game)
        } 

        this.currentXP += xp
    }

    upgrade(game: Game) {
        this.level++
        this.nextLevelXp += this.nextLevelXp * 0.75
        this.currentXP = 0
        
        this.maxHealth += 1
        this.currentHealth += 1

        game.skillService.availableSkills = game.skillService.availableSkills.map(skill => {
            console.log(skill.name)
            if (skill.name == "Musical Note") {
                skill.stop()
                skill = skill.update()
            }
            return skill
        })

        game.skillService.startSpawn(game.player, game.enemyService)
        
        console.log(game.skillService.availableSkills)
    }
}