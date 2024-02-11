import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";
import { usePlayer } from "@/store/PlayerContext";
import { useUpgradeTree } from "@/store/UpgradeTreeContext";


interface IUpgradeNode {
    upgrade: UpgradeNode
}

export function UpgradeNodeModel({ upgrade }: IUpgradeNode) {

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

    function upgradeTree(columnIndex: string, upgradeIndex: number) {
        
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

        improveStatus(columnIndex, upgrade.value)
    }

    function handleClick() {
        if (upgrade.isLocked || upgrade.isAcquired) return
        if (playerState.money >= upgrade.cost) {

            setPlayerState(previous => ({
                ...previous,
                money: previous.money - upgrade.cost
            }))

            upgradeTree(upgrade.category, upgrade.id)
        }
    }


    return { handleClick, playerState }
}