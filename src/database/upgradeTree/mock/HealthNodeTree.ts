import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";


export const healthNodeTree = new UpgradeTree([

    new UpgradeNode({
        id: 0,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: false,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 1,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 2,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 3,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 4,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 5,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 6,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 7,
        category: 'healthTree',
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
    }),
])