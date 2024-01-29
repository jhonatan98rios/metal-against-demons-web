import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";


export const healthNodeTree = new UpgradeTree([

    new UpgradeNode({
        id: 0,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 500,
        isLocked: false,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 1,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 1000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 2,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 2000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 3,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 3000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 4,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 4000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 5,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 5000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 6,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 6000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 7,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 7000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 8,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 8000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 9,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 9000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),

    new UpgradeNode({
        id: 10,
        category: 'healthTree',
        name: 'Health +20%',
        cost: 10000,
        isLocked: true,
        isAcquired: false,
        value: 20
    }),
])