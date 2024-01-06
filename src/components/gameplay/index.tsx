import { useEffect } from "react"
import { Game } from "@/application/entities/Game"
import { CachedImages } from "@/application/entities/CachedImages"

export default function GamePlay() {

    useEffect(() => {
        if (window !== undefined) {
            CachedImages.getInstance()
            Game.getInstance()
        }
    }, [])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between`}>
            <canvas id="canvas" className="overflow-hidden" />
            <div className="w-52 h-52 absolute bottom-5" id="joyDiv" />
        </main>
    )
}
