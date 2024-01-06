import { useEffect, useState } from "react"
import { Game } from "@/application/entities/Game"
import { CachedImages } from "@/application/entities/CachedImages"
import { Observer } from "@/application/utils/Observer"
import { PlayerStatus } from "@/application/entities/PlayerStatus"
import Canvas from "@/partials/GamePlay/Canvas"
import HUD from "@/partials/GamePlay/HUD"


export default function GamePlay() {

    const [ playerStatusLevel, setPlayerStatusLevel ] = useState<number>()

    const [ playerStatusMaxHealth, setPlayerStatusMaxHealth ] = useState<number>()
    const [ playerStatusCurrentHealth, setPlayerStatusCurrentHealth ] = useState<number>()

    const [ playerStatusNextLevelXp, setPlayerStatusNextLevelXp ] = useState<number>()
    const [ playerStatusCurrentXP, setPlayerStatusCurrentXP ] = useState<number>()

    useEffect(() => {
        if (window !== undefined) {
            CachedImages.getInstance()
            const game = Game.getInstance()
            updatePlayerStatus(game.player.status)

            Observer.observe(game.player.status, () => {
                updatePlayerStatus(game.player.status)
                
            })
        }
    }, [])

    function updatePlayerStatus({ level, maxHealth, currentHealth, nextLevelXp, currentXP }: PlayerStatus) {
        setPlayerStatusLevel(level)
        setPlayerStatusMaxHealth(maxHealth)
        setPlayerStatusCurrentHealth(currentHealth)
        setPlayerStatusNextLevelXp(nextLevelXp)
        setPlayerStatusCurrentXP(currentXP)
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
            />
        </main>
    )
}
