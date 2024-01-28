import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree"
import { usePlayer } from "@/store/PlayerContext";
import { useUpgradeTree } from "@/store/UpgradeTreeContext";

interface IUpgradeNode {
    upgrade: UpgradeNode
}

export function UpgradeNodeComponent({ upgrade }: IUpgradeNode) {

    const { playerState, setPlayerState } = usePlayer()
    const { upgradeTreeState, setUpgradeTreeState } = useUpgradeTree()

    function improveDamage(value: number) {
        setPlayerState(prev => ({
            ...prev,
            baseAttack: Math.floor(prev.baseAttack + ((prev.baseAttack / 100) * value))
        }))
    }

    function improveHealth(value: number) {
        setPlayerState(prev => ({
            ...prev,
            maxHealth: Math.floor(prev.maxHealth + ((prev.maxHealth / 100) * value))
        }))
    }

    function improveStatus(category: string, value: number) {

        const status = {
            healthTree: improveHealth,
            strengthTree: improveDamage,
        }

        if (status[category]) {
            status[category](value)
        }
    }


    function handleUpgrade(columnIndex: string, upgradeIndex: number) {
        
        const updatedTree: UpgradeTree = structuredClone(upgradeTreeState[columnIndex])

        updatedTree.upgradeNodes[upgradeIndex].isAcquired = true

        if (updatedTree.upgradeNodes[upgradeIndex + 1]) {
            updatedTree.upgradeNodes[upgradeIndex + 1].isLocked = false
        }

        setUpgradeTreeState(prev => {
            return {
                ...prev,
                [columnIndex]: updatedTree
            }
        })

        improveStatus(columnIndex, upgrade.cost)
    }

    function handleClick() {
        if (upgrade.isLocked || upgrade.isAcquired) return
        if (playerState.money >= upgrade.cost) {

            setPlayerState(previous => ({
                ...previous,
                money: previous.money - upgrade.cost
            }))

            handleUpgrade(upgrade.category, upgrade.id)
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