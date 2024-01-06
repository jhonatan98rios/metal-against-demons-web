import { GameStatus } from "@/application/entities/Game";
import { DeadNotification } from "@/components/HUD/DeadNotification";
import { IPlayerStatus, PlayerStatusComponent } from "@/components/HUD/PlayerStatus";

interface IHUD {
    playerStatus: IPlayerStatus
    gameStatus: {
        status: GameStatus
    }
}

export default function HUD({ playerStatus, gameStatus }: IHUD) {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            {
                playerStatus &&
                <PlayerStatusComponent {...playerStatus}  />
            }

            {
                gameStatus.status == GameStatus.stopped &&
                <DeadNotification />
            }
            
            <div className="md:hidden w-52 h-52 absolute bottom-5 left-0 right-0 m-auto" id="joyDiv" />
        </div>
    )
}
