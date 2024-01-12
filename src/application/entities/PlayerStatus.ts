import { EventClient } from "../event/EventClient";
import { EnemyService } from "../services/EnemyService";
import { Game } from "./Game";
import { Player } from "./Player";

export class PlayerStatus extends EventClient {

    private static instance: PlayerStatus;
    public level: number
    public maxHealth: number
    public currentHealth: number
    public vulnerable: boolean
    public currentXP: number
    public nextLevelXp: number

    constructor () {
        super()
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

    takeDamage(player: Player, damage: number) {
        if (this.currentHealth <= 0) {
            player.die()
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
            return this.upgrade(game.player, game.enemyService)
        } 

        this.currentXP += xp
    }

    upgrade(player: Player, enemyService: EnemyService) {
        this.level++
        this.nextLevelXp += this.nextLevelXp * 0.75
        this.currentXP = 0
        
        this.maxHealth += 1
        this.currentHealth += 1

        console.log("Trying to emmit: player:upgrade")
        this.eventManager.emit('player:upgrade')
    }
}