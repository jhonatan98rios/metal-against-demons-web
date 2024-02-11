import { Game } from "@/application/entities/Game"
import { GameStatus } from "@/application/entities/GameState"

export function PauseButton() {

    function handlePause() {
        Game.getInstance().state.status = GameStatus.paused
    }

    return (
        <button className="w-12 h-12 absolute right-8 top-6 z-30" onClick={handlePause}>
            <img src="./img/menu/pause.png" alt="" />
        </button>
    )
}