import { PlayerState } from "@/store/PlayerContext"
import { Dispatch, SetStateAction } from "react"

type SetPlayerState = Dispatch<SetStateAction<PlayerState>>

interface IUpgradeNode {
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    effect: (setPlayerState: SetPlayerState) => void
}


export class UpgradeNode {
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    effect: (setPlayerState: SetPlayerState) => void

    constructor({ name, cost, isLocked, isAcquired, effect }: IUpgradeNode) {
        this.name = name
        this.cost = cost
        this.isLocked = isLocked
        this.isAcquired = isAcquired
        this.effect = effect
    }

    unlock() {
        this.isLocked = false
    }

    acquire() {
        this.isAcquired = true
    }
}

export class UpgradeTree {
    constructor(public upgradeNodes: UpgradeNode[]){}
}