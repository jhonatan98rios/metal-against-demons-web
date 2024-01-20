import { UpgradeNodeTree, UpgradeTree } from "@/application/entities/UpgradeTree";


export const healthNodeTree = new UpgradeTree([

    new UpgradeNodeTree({
        name: 'Health + 10%',
        cost: 10,
        isLocked: false,
        isAcquired: true,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 20%',
        cost: 10,
        isLocked: false,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 20%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 20%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Health + 20%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),
])