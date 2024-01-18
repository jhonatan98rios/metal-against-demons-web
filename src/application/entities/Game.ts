import { Camera } from "./Camera"
import { Canvas } from "./Canvas"
import { EventHandler } from "./EventHandler"
import { Scenario } from "./Scenario"
import { Player } from "./Player"
import { PlayerEventService } from "../services/PlayerEventService"
import { EnemyService } from "../services/EnemyService"
import { SkillService } from "../services/SkillService"
import { OrbService } from "../services/OrbService"
import { EventManager } from "../event/EventManager"
import { EventClient } from "../event/EventClient"
import { AbstractSkillManager } from "./skills/Managers/AbstractSkillManager"

export enum GameStatus {
    stopped = 0,
    running = 1,
    paused = 2,
    levelup = 3,
}

type GameState = {
    status: GameStatus
}

export class Game extends EventClient {

    private static instance: Game;

    state: GameState 
    player: Player
    canvas: Canvas
    scenario: Scenario
    eventHandler: EventHandler
    camera: Camera

    playerEventService: PlayerEventService
    enemyService: EnemyService
    skillService: SkillService
    orbService: OrbService

    fps: number
    fpsCounter: number

    eventManager: EventManager

    constructor() {
        super()

        this.state = {
            status: GameStatus.running
        }

        this.player = Player.getInstance()
        this.player.loadSpritesheetEventListener(this)

        this.canvas = Canvas.getInstance()
        this.scenario = Scenario.getInstance()
        this.eventHandler = EventHandler.getInstance()
        this.camera = Camera.getInstance()

        this.playerEventService = PlayerEventService.getInstance(),
        this.enemyService = EnemyService.getInstance()
        this.skillService = SkillService.getInstance()
        this.orbService = OrbService.getInstance()
        this.fps = 0
        this.fpsCounter = 0

        this.start()
    }
    
    start() {
        this.skillService.startSpawn(this.player, this.enemyService)
        
        setInterval(() => {
            this.fps = this.fpsCounter
            this.fpsCounter = 0
        }, 1000)
    }

    update(){
        if (this.state.status != GameStatus.running) return
            
        this.playerEventService.execute(this)
        this.enemyService.move(this)
        this.skillService.update()
        this.moveCamera()
    }

    moveCamera() {
        if(this.player.x < this.camera.innerLeftBoundary()){
            this.camera.x = this.player.x - (this.camera.width * 0.25)
        }
        if(this.player.y < this.camera.innerTopBoundary()){
            this.camera.y = this.player.y - (this.camera.height * 0.25)
        }
        if(this.player.x + this.player.width > this.camera.innerRightBoundary()){
            this.camera.x = this.player.x + this.player.width - (this.camera.width * 0.75)
        }
        if(this.player.y + this.player.height > this.camera.innerBottomBoundary()){
            this.camera.y = this.player.y + this.player.height - (this.camera.height * 0.75)
        }
    }

    loop(){
        this.update()
        this.fpsCounter += 1
        this.eventManager.emit("canvas:render", this)
        requestAnimationFrame(this.loop.bind(this))
    }


    stopGame(){
        this.state.status = GameStatus.stopped
    }


    createEventListeners() {
        this.eventManager.on('player:die', () => {
            this.stopGame();
        });

        this.eventManager.on('player:levelup', () => {           
            this.state.status = GameStatus.levelup
        });


        this.eventManager.on('skill:upgrade', (skillManager: AbstractSkillManager) => {           
            this.skillService.buyOrUpgradeSkill(skillManager)
            this.state.status = GameStatus.running
        });
    }
    

    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game()
        }

        return Game.instance;
    }
}
