import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { Camera } from "../entities/Camera";
import { Enemy } from "../entities/Enemy"
import { Player } from "../entities/Player";
import { EventClient } from "../event/EventClient";
import { Element2D, generateRandomPositionOutsideScreen, isThereIntersection } from "../utils/utils";
import { EnemyFactory } from "./EnemyFactory";

export class EnemyService extends EventClient {

    private static instance: EnemyService;

    player: Player
    enemies: Enemy[]
    camera: Camera

    constructor() {
        super()
        this.player = Player.getInstance()
        this.camera = Camera.getInstance()
        this.enemies = []
        this.spawn()
    }

    spawn() {
        this.sortEnemies()
        let interval = 1000 - (this.player.status.level * 50)
        interval = interval > 50 ? interval : 50

        setTimeout(this.spawn.bind(this), interval)
        //setTimeout(this.spawn.bind(this), 100)

        if (this.enemies.length >= this.player.status.level * 1000) return
        //if (this.enemies.length >= 10000) return

        const randomPos = generateRandomPositionOutsideScreen(this.camera)

        const createdEnemy = EnemyFactory.randomCreate(randomPos)

        if (!this.checkEmptySpaceToSpawn(createdEnemy)) {
            return
        }

        this.enemies.push(createdEnemy)
    }

    move(camera: Camera, player: Player) {
        const updatedEnemiesPosition = this.enemies.map(enemy => {
            return enemy.move(player, this)
        })

        this.enemies = this.enemies.map((enemy, index) => {
            enemy.animate(player, camera)
            enemy.x = updatedEnemiesPosition[index].x
            enemy.y = updatedEnemiesPosition[index].y
            return enemy
        })

    }

    sortEnemies() {
        this.enemies.sort((a, b) => {
            const distanceToA = Math.sqrt(Math.pow(this.player.x - a.x, 2) + Math.pow(this.player.y - a.y, 2));
            const distanceToB = Math.sqrt(Math.pow(this.player.x - b.x, 2) + Math.pow(this.player.y - b.y, 2));
            return distanceToA - distanceToB;
        });
    }

    applyDamage({ enemy, damage }: { enemy: Enemy, damage: number }) {
        enemy.currentHealth -= damage

        if (enemy.currentHealth <= 0) {
            this.remove(enemy)
        }
    }

    remove(enemy: Enemy) {
        const { id, x, y, height, width } = enemy
        this.enemies = this.enemies.filter(e => e.id != id)

        this.eventManager.emit("orb:spawn", {
            value: enemy.maxHealth,
            x: x + (width / 2),
            y: y + (height / 2)
        })
    }

    checkEmptySpaceToSpawn(body: Element2D) {
        for (let index = 0; index <= this.enemies.length - 1; index++) {
            let otherEnemy = this.enemies[index]

            if (isThereIntersection(body, otherEnemy)) {
                return false
            }
        }

        return true
    }

    createEventListeners(): void {
        this.eventManager.on('skill:damage', (props) => {
            this.applyDamage(props)
        });
    }

    public static getInstance(): EnemyService {
        if (!EnemyService.instance) {
            EnemyService.instance = new EnemyService()
        }

        return EnemyService.instance
    }
}