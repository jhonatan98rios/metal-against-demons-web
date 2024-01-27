import { Player } from "@/application/entities/Player";
import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";



export const abilityNodeTree = new UpgradeTree([

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: false,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),

    new UpgradeNode({
        name: 'Speed +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: () => {}
    }),
])