interface IUpgradeNodeTree {
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    effect: () => void
}


export class UpgradeNodeTree {
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    effect: () => void

    constructor({ name, cost, isLocked, isAcquired, effect }: IUpgradeNodeTree) {
        this.name = name
        this.cost = cost
        this.isLocked = isLocked
        this.isAcquired = isAcquired
        this.effect = effect
    }

    execute() {
        this.effect()
    }

    unlock() {
        this.isLocked = false
    }

    acuire() {
        this.isAcquired = true
    }
}

export class UpgradeTree {
    constructor(public upgradeNodes: UpgradeNodeTree[]){}
}