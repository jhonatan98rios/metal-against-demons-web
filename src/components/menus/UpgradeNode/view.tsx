import { Suspense } from "react";
import { PlayerState } from "@/store/PlayerContext"
import { UpgradeNode } from "@/application/entities/UpgradeTree"

interface IUpgradeNodeView {
    playerState: PlayerState
    upgrade: UpgradeNode
    handleClick(): void
}

export function UpgradeNodeView({ playerState, upgrade, handleClick }: IUpgradeNodeView) {

    return (
    <Suspense key={playerState.level}>
            <div className="m-2 w-[128px] h-[128px] rounded-full relative flex justify-center items-center cursor-pointer" onClick={handleClick}>
                <img 
                    className="absolute left-0 right-0 top-0 bottom-0"
                    src={
                        upgrade.isAcquired 
                            ? "./img/menu/acquired-skill.png" 
                            : upgrade.isLocked
                                ? "./img/menu/locked-skill.png"
                                : "./img/menu/unlocked-skill.png"
                    } 
                    alt={upgrade.name} 
                />

                {
                    (upgrade.isAcquired && !upgrade.isLocked) &&
                    <p className="z-10 text-white text-3xl font-bold text-center leading-8 -mt-2"> {upgrade.name} </p>
                }

                {
                    (!upgrade.isAcquired && !upgrade.isLocked) &&
                    <p className="z-10 text-white text-4xl font-bold text-center leading-8 -mt-2 flex flex-col justify-center items-center"> 
                        <img src="./img/menu/soul.png" alt="soul" height={40} />
                        {upgrade.cost} 
                    </p>
                }
            </div>
        </Suspense>
    )
}