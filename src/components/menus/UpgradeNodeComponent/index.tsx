import { UpgradeNode } from "@/application/entities/UpgradeTree"
import { usePlayer } from "@/store/PlayerContext";

interface IUpgradeNode {
    upgrade: UpgradeNode
    unlockNextNode: () => void
}

export function UpgradeNodeComponent({ upgrade, unlockNextNode }: IUpgradeNode) {

    const { playerState, setPlayerState } = usePlayer()

    function handleClick() {
        if (upgrade.isLocked || upgrade.isAcquired) return
        if (playerState.money >= upgrade.cost) {

            setPlayerState(previous => ({
                ...previous,
                money: previous.money - upgrade.cost
            }))

            upgrade.acquire()
            upgrade.effect(setPlayerState)
            unlockNextNode()
        }
    }

    return (
        <div className="m-2 w-[128px] h-[128px] rounded-full relative flex justify-center items-center" onClick={handleClick}>
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
    )
}