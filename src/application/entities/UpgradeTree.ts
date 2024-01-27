import { PlayerState } from "@/store/PlayerContext"
import { Dispatch, SetStateAction } from "react"

interface IUpgradeNode {
    id: number
    category: string
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
}

export class UpgradeNode {
    id: number
    category: string
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    

    constructor({ id, category, name, cost, isLocked, isAcquired }: IUpgradeNode) {
        this.id = id
        this.category = category
        this.name = name
        this.cost = cost
        this.isLocked = isLocked
        this.isAcquired = isAcquired
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