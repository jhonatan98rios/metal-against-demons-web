import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";


export const healthNodeTree = new UpgradeTree([

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: false,
        isAcquired: true,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: false,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),
])