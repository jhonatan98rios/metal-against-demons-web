export enum GameStatus {
    stopped = 0,
    running = 1,
    paused = 2,
    levelup = 3,
}

export class GameState {
    status: GameStatus
    static instance: GameState

    constructor() {
        this.status = GameStatus.running
    }

    public static getInstance(): GameState {
        if (!GameState.instance) {
            GameState.instance = new GameState()
        }

        return GameState.instance;
    }
}