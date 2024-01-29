interface IUpgradeNode {
    id: number
    category: string
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    value: number
}

export class UpgradeNode {
    id: number
    category: string
    name: string
    cost: number
    isLocked: boolean
    isAcquired: boolean
    value: number
    

    constructor({ id, category, name, cost, isLocked, isAcquired, value }: IUpgradeNode) {
        this.id = id
        this.category = category
        this.name = name
        this.cost = cost
        this.isLocked = isLocked
        this.isAcquired = isAcquired
        this.value = value
    }
}

export class UpgradeTree {
    constructor(public upgradeNodes: UpgradeNode[]){}
}