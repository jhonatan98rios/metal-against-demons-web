import { useEffect, useState } from "react"
import { Game } from "@/application/entities/Game"
import { CachedImages } from "@/application/entities/CachedImages"
import { Observer } from "@/application/utils/Observer"
import { PlayerStatus } from "@/application/entities/PlayerStatus"
import Canvas from "@/partials/GamePlay/Canvas"
import HUD from "@/partials/GamePlay/HUD"
import { usePlayer } from "@/store/PlayerContext"
import { GameStatus } from "@/application/entities/GameState"


export default function GamePlay() {

    const { playerState } = usePlayer()

    const [ playerStatusLevel, setPlayerStatusLevel ] = useState<number>()
    const [ playerStatusMaxHealth, setPlayerStatusMaxHealth ] = useState<number>()
    const [ playerStatusCurrentHealth, setPlayerStatusCurrentHealth ] = useState<number>()
    const [ playerStatusNextLevelXp, setPlayerStatusNextLevelXp ] = useState<number>()
    const [ playerStatusCurrentXP, setPlayerStatusCurrentXP ] = useState<number>()
    const [ gameStatus, setGameStatus ] = useState<GameStatus>()



    useEffect(() => {
        if (window !== undefined) {
            CachedImages.getInstance()
            const game = Game.getInstance()

            getPlayerStatusFromStore(game)

            updatePlayerStatus(game.player.status)
            updateGameStatus(game.state)

            Observer.observe(game.player.status, () => {
                updatePlayerStatus(game.player.status)
            })

            Observer.observe(game.state, () => {
                updateGameStatus(game.state)
            })
        }
    }, [])


    function getPlayerStatusFromStore(game: Game) {
        game.player.status.baseDamage = playerState.baseAttack
        game.player.status.maxHealth = playerState.maxHealth
        game.player.status.currentHealth = playerState.maxHealth
    }


    function updatePlayerStatus({ level, maxHealth, currentHealth, nextLevelXp, currentXP }: PlayerStatus) {
        if (playerStatusLevel !== level) {
            setPlayerStatusLevel(level)
        }
        setPlayerStatusMaxHealth(maxHealth)
        setPlayerStatusCurrentHealth(currentHealth)
        setPlayerStatusNextLevelXp(nextLevelXp)
        setPlayerStatusCurrentXP(currentXP)
    }

    function updateGameStatus({ status }: any) {

        if (gameStatus != status) {
            setGameStatus(status)
        }
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between`}>
            <Canvas />
            <HUD 
                playerStatus={{
                    level: playerStatusLevel!,
                    maxHealth: playerStatusMaxHealth!,
                    currentHealth: playerStatusCurrentHealth!,
                    nextLevelXp: playerStatusNextLevelXp!,
                    currentXP: playerStatusCurrentXP!
                }} 
                gameStatus={{
                    status: gameStatus!
                }}
            />
        </main>
    )
}
