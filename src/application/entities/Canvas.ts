import { Camera } from "./Camera";
import { Scenario } from "./Scenario";
import { Player } from "./Player";
import { Game } from "./Game";
import { Element } from "../../database/scenarios/mock";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { EnemyService } from "../services/EnemyService";
import { Enemy } from "./Enemy";
import { XPOrb } from "./XPOrb";
import { isThereIntersection } from "../utils/utils";
import { drawAnimatedBar } from "../components/drawAnimatedBar";
import { drawText } from "../components/drawText";
import { EventClient } from "../event/EventClient";
import { AbstractSkillManager } from "./skills/Managers/AbstractSkillManager";
import { GameStatus } from "./GameState";


export class Canvas extends EventClient {

    private static instance: Canvas;
    context: CanvasRenderingContext2D;
    scenario: Scenario
    width: number
    height: number
    camera: Camera
    player: Player
    

    constructor() {
        super()

        const htmlCanvas = document.querySelector("canvas") as HTMLCanvasElement
        htmlCanvas.width = SCREEN_WIDTH
        htmlCanvas.height = SCREEN_HEIGHT
        
        this.context = htmlCanvas.getContext("2d", { alpha: false }) as CanvasRenderingContext2D
        this.scenario = Scenario.getInstance()
        this.camera = Camera.getInstance()
        this.player = Player.getInstance()
        this.width = SCREEN_WIDTH
        this.height = SCREEN_HEIGHT
    }

    render(game: Game){

        if (!game || game.state.status !== GameStatus.running) return

        this.clearCanvas()
        this.moveCamera()

        this.scenario.layers.belowThePlayers.forEach(element => {
            this.renderElement(element)
        })

        this.renderOrbs(game.orbService.xpOrbs)
        
        
        this.renderEnemies(game.enemyService.enemies.filter(enemy => enemy.y <= this.player.y))
        
        this.renderPlayer(this.player)
        this.renderSkills(game.skillService.availableSkills)

        this.renderEnemies(game.enemyService.enemies.filter(enemy => enemy.y > this.player.y))
        

        this.renderEnemiesHealth(game.enemyService)
        
        //this.renderBenchmark(game)

        this.scenario.layers.aboveThePlayers.forEach(element => {
            this.renderElement(element)
        })

        this.context.restore()
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, Math.floor(this.width), Math.floor(this.height));
        this.context.save();
    }

    private moveCamera() {
        this.context.translate(Math.floor(-this.camera.x), Math.floor(-this.camera.y))
    }

    private renderElement(element: Element) {
        const ptrn = this.context.createPattern(element.image, 'repeat') // Create a pattern with this image, and set it to "repeat".
        this.context.fillStyle = ptrn!
        this.context.fillRect(
            Math.floor(element.x), 
            Math.floor(element.y), 
            Math.floor(element.width), 
            Math.floor(element.height)
        );
    }

    private renderPlayer(player: Player) {
        this.context.drawImage(
            player.spritesheet,
            Math.floor(player.srcX), 
            Math.floor(player.srcY), 
            Math.floor(player.width), 
            Math.floor(player.height),
            Math.floor(player.x), 
            Math.floor(player.y), 
            Math.floor(player.width), 
            Math.floor(player.height)
        );
    }

    private renderEnemies(enemies: Enemy[]) {
        enemies.forEach(enemy => {

            if (isThereIntersection(this.camera, enemy)) {
                this.context.drawImage(
                    enemy.spritesheet,
                    Math.floor(enemy.srcX), 
                    Math.floor(enemy.srcY), 
                    Math.floor(enemy.width), 
                    Math.floor(enemy.height),
                    Math.floor(enemy.x), 
                    Math.floor(enemy.y), 
                    Math.floor(enemy.width), 
                    Math.floor(enemy.height)
                );
            }
        })
    }

    private renderSkills(availableSkills: AbstractSkillManager[]) {

        availableSkills.forEach(availableSkill => {
            availableSkill.activeSkills.forEach(activeSkill => {
                if (isThereIntersection(this.camera, activeSkill)){
                    this.context.drawImage(
                        activeSkill.spritesheet,
                        Math.floor(activeSkill.srcX),
                        Math.floor(activeSkill.srcY),
                        Math.floor(activeSkill.width),
                        Math.floor(activeSkill.height),
                        Math.floor(activeSkill.x),
                        Math.floor(activeSkill.y),
                        Math.floor(activeSkill.width), 
                        Math.floor(activeSkill.height)
                    );
                }
            })
        })

    }

    private renderOrbs(orbs: XPOrb[]) {
        this.context.beginPath();
        orbs.forEach(orb => {
            if (isThereIntersection(this.camera, orb)) {
                this.context.fillStyle = orb.color;
                this.context.fillRect(
                    Math.floor(orb.x),
                    Math.floor(orb.y), 
                    Math.floor(orb.width),
                    Math.floor(orb.height)
                );
            }
        })
    }

    renderEnemiesHealth(enemyService: EnemyService) {
        enemyService.enemies.forEach(enemy => {

            if (enemy.currentHealth === enemy.maxHealth) return

            drawAnimatedBar({
                context: this.context,
                curentValue: enemy.currentHealth,
                maxValue: enemy.maxHealth,
                minColor: "#5555FF",
                maxColor: "#AAAAFF",
                height: 4,
                width: 30,
                posX: enemy.x + (enemy.width / 2) - 15,
                posY: enemy.y - 10 
            })
        })
    }

    renderBenchmark(game: Game) {
        if (game) {
            drawText({
                font: "30px Arial",
                context: this.context,
                camera: this.camera,
                value: game.fps.toString(),
                posX: this.camera.width - 50,
                posY: 40
            })
        }
    }

    createEventListeners() {
        this.eventManager.on('canvas:render', (game: Game) => {
            this.render(game)
        });
    }

    public static getInstance(): Canvas {
        if (!Canvas.instance) {
            Canvas.instance = new Canvas();
        }

        return Canvas.instance;
    }
}