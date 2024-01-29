import { EventClient } from "../event/EventClient";
import { Player } from "./Player";

export class PlayerStatus extends EventClient {

    private static instance: PlayerStatus;
    public level: number
    public maxHealth: number
    public currentHealth: number
    public vulnerable: boolean
    public currentXP: number
    public nextLevelXp: number
    public totalXP: number
    public baseDamage: number

    constructor () {
        super()
        this.level = 1
        this.maxHealth = 500
        this.currentHealth = 500
        this.vulnerable = true
        this.currentXP = 0
        this.nextLevelXp = 150
        this.totalXP = 0
        this.baseDamage = 10
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

    takeXp(xp: number) {
        let updateCurrentXP = this.currentXP + xp

        if (updateCurrentXP >= this.nextLevelXp) {
            return this.levelup(this.nextLevelXp - updateCurrentXP)
        } 

        this.currentXP += xp
        this.totalXP += xp
    }

    levelup(remainingXp: number) {
        this.level++
        this.nextLevelXp += this.nextLevelXp * 0.2
        this.currentXP = remainingXp
        
        this.maxHealth += 1
        this.currentHealth += 1

        console.log("Trying to emmit: player:levelup")
        this.eventManager.emit('player:levelup')
    }
}