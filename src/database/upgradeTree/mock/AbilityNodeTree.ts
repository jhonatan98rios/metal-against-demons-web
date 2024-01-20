import { Player } from "@/application/entities/Player";
import { UpgradeNodeTree, UpgradeTree } from "@/application/entities/UpgradeTree";


export const abilityNodeTree = new UpgradeTree([

    new UpgradeNodeTree({
        name: 'Speed + 10%',
        cost: 20,
        isLocked: false,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNodeTree({
        name: 'Speed + 20%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),
])