import { UpgradeNodeTree, UpgradeTree } from "@/application/entities/UpgradeTree";


export const strengthNodeTree = new UpgradeTree([

    new UpgradeNodeTree({
        name: 'Damage + 10%',
        cost: 20,
        isLocked: false,
        isAcquired: false,
        effect: () => {}
    }),


    new UpgradeNodeTree({
        name: 'Damage + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Damage + 10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),


    new UpgradeNodeTree({
        name: 'Damage + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Damage + 10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),


    new UpgradeNodeTree({
        name: 'Damage + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Damage + 10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),


    new UpgradeNodeTree({
        name: 'Damage + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    
])